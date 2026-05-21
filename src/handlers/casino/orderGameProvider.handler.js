import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'





export class OrderGameProviderHandler extends BaseHandler {


  async run() {
    const providerIds = [...(new Set(this.args.order))]

    await Promise.all(providerIds.map(async (providerId, index) => {
      await db.CasinoProvider.update({ orderId: index + 1 }, { where: { id: providerId } })
    }))
    return { success: true }
  }
}
