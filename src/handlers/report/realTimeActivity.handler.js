import db from "@src/db/models";
import { BaseHandler } from "@src/libs/baseHandler";
import { serverDayjs } from "@src/libs/dayjs";
import { client } from "@src/libs/redis";
import { CASINO_ROUND_STATUS } from "@src/utils/constants/casino.constants";
import {
  CASINO_TRANSACTION_PURPOSE,
  COINS,
  LEDGER_TRANSACTION_TYPES,
  LEDGER_TYPES,
  WITHDRAWAL_STATUS,
} from "@src/utils/constants/public.constants";

/**
 * Fetches real-time activity data for the dashboard.
 */
export class GetRealTimeActivityHandler extends BaseHandler {
  async run() {
    const activityTimeThreshold = serverDayjs().subtract(1, "hours");

    const [
      onlinePlayers,
      totalWinAmount,
      totalWagerAmount,
      withdrawalSummary,
    ] = await Promise.all([
      this.fetchOnlinePlayers(),
      this.calculateTotalWinAmount(activityTimeThreshold),
      this.calculateTotalWagerAmount(activityTimeThreshold),
      this.getPendingWithdrawalSummary(),
    ]);

    return {
      onlinePlayers,
      totalWinAmount,
      totalWagerAmount,
      pendingWithdrawals: withdrawalSummary.count,
      redeemAmountSummary: withdrawalSummary.redeemAmountSummary,
    };
  }

  async fetchOnlinePlayers() {
    const activeTokens = await client.keys("*:ACCESS_TOKEN");
    return activeTokens.length;
  }

  async calculateTotalWinAmount(activityTimeThreshold) {
    return (
      (await db.CasinoTransaction.sum("coin", {
        where: {
          coinType: { [db.Sequelize.Op.ne]: COINS.GOLD_COIN },
          actionType: CASINO_TRANSACTION_PURPOSE.CASINO_WIN,
          status: 'successful',
          created_at: { [db.Sequelize.Op.gte]: activityTimeThreshold },
        },
      })) || 0
    );
  }

  async calculateTotalWagerAmount(activityTimeThreshold) {
    return (
      (await db.CasinoTransaction.sum('coin', {
        where: {
          coinType: { [db.Sequelize.Op.ne]: COINS.GOLD_COIN },
          actionType: CASINO_TRANSACTION_PURPOSE.CASINO_BET,
          status: 'successful',
          created_at: { [db.Sequelize.Op.gte]: activityTimeThreshold }
        }
      })) || 0 
    )
  }

  async getPendingWithdrawalSummary() {
  // 1. Count
  const count = await db.Withdrawal.count({
    where: { status: WITHDRAWAL_STATUS.PENDING },
  });

  // 2. Grouped sum by payment method
  const paymentAmounts = await db.Withdrawal.findAll({
    where: { status: WITHDRAWAL_STATUS.PENDING },
    include: [
      {
        model: db.Transaction,
        as: "Transactions",
        attributes: [],
        required: true,
      },
    ],
    attributes: [
      [
        db.Sequelize.literal(`"Transactions"."more_details"->>'paymentMethod'`),
        "paymentMethod",
      ],
      [
        db.Sequelize.fn("SUM", db.Sequelize.col("Withdrawal.amount")),
        "totalAmount",
      ],
    ],
    group: [
      db.Sequelize.literal(
        `"Transactions"."more_details"->>'paymentMethod'`
      ),
    ],
    raw: true,
  });

  // 3. Build summary
  const redeemAmountSummary = {
    CRYPTO: 0,
    FIAT: 0,
  };

  paymentAmounts.forEach((row) => {
    const method = row.paymentMethod;
    const amount = Number(row.totalAmount || 0);

    if (method === "CRYPTO") {
      redeemAmountSummary.CRYPTO += amount;
    }

    if (method === "BASIC_CARD" || method === "BANKTRANSFER") {
      redeemAmountSummary.FIAT += amount;
    }
  });

  return {
    count,
    redeemAmountSummary,
  };
}
}
