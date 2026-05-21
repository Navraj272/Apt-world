import db from "@src/db/models"
import { BaseHandler } from "@src/libs/baseHandler"
import { ApiHelper } from '@src/utils/api.utils'
import { Op, Sequelize } from "sequelize"




export class GetWithdrawRequestsHandler extends BaseHandler {
 async run() {


   const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
   const { startDate, endDate } = ApiHelper.getDateRange(this.args.startDate, this.args.endDate)
   const { status, search } = this.args


   // Build query conditions
   let query = {}
   if (status && status !== "null" && status !== "") {
     query = { ...query, status }
   }


   if (startDate || endDate) {
     query = {
       ...query,
       updatedAt: {
         ...(startDate ? { [Op.gte]: startDate } : {}),
         ...(endDate ? { [Op.lte]: endDate } : {}),
       },
     };
   }



   if (search) {
     // Ensure that search is applied only to string fields (e.g., username or email)
     query = {
       ...query,
       [Op.or]: [
         { "$User.username$": { [Op.iLike]: `%${search}%` } },  // Searching by username
         { "$User.email$": { [Op.iLike]: `%${search}%` } },     // Searching by email
       ],
     }
   }


   // Fetch withdrawal requests along with user and transaction ledger details
   const withdrawRequests = await db.Withdrawal.findAndCountAll({
     order: [["createdAt", "DESC"]],
     where: query,
     limit,
     offset: offset,
    //  include: { model: db.User, attributes: ['userId', 'username', 'email'] },
    include: [
        { 
          model: db.User, 
          attributes: ['userId', 'username', 'email'] 
        },
        { 
          model: db.Transaction, 
          attributes: ['moreDetails'] 
        }
      ],
     attributes: [
       "id",
       "userId",
       "createdAt",
       "updatedAt",
       "status",
       "amount",
       "comment"
     ],
   })

   const paymentAmounts = await db.Withdrawal.findAll({
  where: {
    ...query,
    status: "Pending"
  },
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
      Sequelize.literal(`"Transactions"."more_details"->>'paymentMethod'`),
      "paymentMethod",
    ],
    [
      Sequelize.fn("SUM", Sequelize.col("Withdrawal.amount")),
      "totalAmount",
    ],
  ],
  group: [Sequelize.literal(`"Transactions"."more_details"->>'paymentMethod'`)],
  raw: true,
});



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

   // Return response
   return {
     totalRequests : withdrawRequests.count,
     withdrawRequests: withdrawRequests.rows,
     pageNo,
     totalPages: Math.ceil(withdrawRequests.count / limit),
     redeemAmountSummary,
   }
 }
}