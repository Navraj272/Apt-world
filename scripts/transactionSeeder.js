const { TRANSACTION_STATUS, WITHDRAWAL_STATUS, PAYMENT_PROVIDER } = require("@src/utils/constants/public.constants")
const {
  LEDGER_TRANSACTION_TYPES,
  LEDGER_TYPES,
  TRANSACTION_PURPOSE,
  CASINO_TRANSACTION_PURPOSE,
  LEDGER_DIRECTIONS,
  COINS,
} = require("@src/utils/constants/public.constants")
const { Faker, es } = require("@faker-js/faker")
import db from '@src/db/models'
const { MathPrecision } = require("@src/libs/mathOperation")
const { v4: uuid } = require("uuid")
const dayjs = require("dayjs")
const customFaker = new Faker({ locale: [es] })

async function updateWalletAndLedger(wallet, amount, purpose, transactionId, transactionType, code, date, dbTransaction) {
  const direction = LEDGER_DIRECTIONS[purpose]
  if (direction === LEDGER_TYPES.CREDIT) {
    wallet.balance = MathPrecision.plus(wallet.balance, amount)
  } else if (direction === LEDGER_TYPES.DEBIT) {
    if (wallet.balance < amount) return
    wallet.balance = MathPrecision.minus(wallet.balance, amount)
  } else return
  await wallet.save({ transaction: dbTransaction })
}

async function updateWalletAndLedgerWithWithdrawals(wallet, amount, userId, transactionType, code, date, dbTransaction) {
  const direction = LEDGER_DIRECTIONS[TRANSACTION_PURPOSE.REDEEM]
  if (direction === LEDGER_TYPES.DEBIT && wallet.balance >= amount) {
    wallet.balance = MathPrecision.minus(wallet.balance, amount)
  } else return
  const withId = await db.Withdrawal.create({
    userId,
    amount,
    status: WITHDRAWAL_STATUS.PENDING,
    createdAt: date,
    updatedAt: date
  }, { transaction: dbTransaction })

  const tx = await db.Transaction.create({
    userId,
    purpose: TRANSACTION_PURPOSE.REDEEM,
    // transactionId: uuid(),
    withdrawalId: withId.id,
    status: TRANSACTION_STATUS.SUCCESS,
    paymentProvider : PAYMENT_PROVIDER.OFFLINE,
    createdAt: date,
    updatedAt: date,
  }, { transaction: dbTransaction })


  await wallet.save({ transaction: dbTransaction })
}

async function createCasinoTxn(userId, gameId, purpose, amountRange, date, dbTransaction) {
  const transactionId = uuid()
  const txnId = await db.CasinoTransaction.create({
    userId,
    transactionId,
    casinoGameId: gameId,
    gameRoundId: gameId,
    actionType: purpose,
    status: TRANSACTION_STATUS.SUCCESS,
    createdAt: date,
    updatedAt: date,
    moreDetails: { betAmount: 100, currency: "USD", betType: "single" },
  }, { transaction: dbTransaction })

  const wallets = await db.Wallet.findAll({ where: { userId } })
  for (const wallet of wallets) {
    const amount = customFaker.number.float(amountRange)
    await updateWalletAndLedger(wallet, amount, purpose, txnId.id, LEDGER_TRANSACTION_TYPES.CASINO, wallet.currencyCode, date, dbTransaction)
  }
}

async function createTxn(userId, purpose, amountRange, date, dbTransaction) {
  const transaction = await db.Transaction.create({
    userId,
    purpose,
    status: TRANSACTION_STATUS.SUCCESS,
    paymentProvider : PAYMENT_PROVIDER.OFFLINE,
    createdAt: date,
    updatedAt: date,
  }, { transaction: dbTransaction })

  const wallets = await db.Wallet.findAll({ where: { userId } })
  for (const wallet of wallets) {
    const amount = customFaker.number.float(amountRange)
    await updateWalletAndLedger(wallet, amount, purpose, transaction.transactionId, LEDGER_TRANSACTION_TYPES.BANKING, wallet.currencyCode, date, dbTransaction)
  }
}

function generateTransactionDates() {
  const dates = new Set()
  const totalWeeks = 12
  for (let i = 0; i < totalWeeks * 4; i++) {
    const randomDaysAgo = Math.floor(Math.random() * (7 * totalWeeks));
    dates.add(dayjs().subtract(randomDaysAgo, "day").format("YYYY-MM-DD HH:mm:ss"));
  }
  return Array.from(dates);
}

async function initialize(dbTransaction) {
  const [users] = await db.sequelize.query("SELECT user_id FROM users limit 25 offset 0;", { transaction: dbTransaction });
  const casinoGameIds = (await db.CasinoGame.findAll()).map((game) => game.id);
  const transactionDates = generateTransactionDates();
  for (const user of users) {
    for (const date of transactionDates) {
      await createTxn(user.user_id, TRANSACTION_PURPOSE.PURCHASE, { min: 5, max: 100 }, date, dbTransaction);
      await createTxn(user.user_id, TRANSACTION_PURPOSE.REDEEM, { min: 5, max: 20 }, date, dbTransaction);

      const gameId = customFaker.helpers.arrayElement(casinoGameIds);
      await createCasinoTxn(user.user_id, gameId, CASINO_TRANSACTION_PURPOSE.CASINO_BET, { min: 5, max: 100 }, date, dbTransaction);
      await createCasinoTxn(user.user_id, gameId, CASINO_TRANSACTION_PURPOSE.CASINO_WIN, { min: 2, max: 50 }, date, dbTransaction);

      const wallet = await db.Wallet.findOne({ where: { userId: user.user_id, currencyCode: COINS.SWEEP_COIN.REDEEMABLE_SWEEP_COIN }, dbTransaction });
      if (wallet) {
        await updateWalletAndLedgerWithWithdrawals(wallet, customFaker.number.float({ min: 2, max: 25 }), user.user_id, LEDGER_TRANSACTION_TYPES.BANKING, wallet.currencyCode, date, dbTransaction);
      }
    }
  }
}


module.exports = initialize;
