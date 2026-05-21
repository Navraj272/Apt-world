import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'


export class UpdateAffiliatePercentage extends BaseHandler {

  async run () {
    const { userId, affiliatePercentage } = this.args
    const transaction = this.context.sequelizeTransaction

    const updatedPercentage = await db.UserDetails.update(
      { userId: userId },
      {
        where: { referralPercentage: affiliatePercentage },
        transaction
      })

    return { updatedPercentage }
  }
}
