import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'


export class ToggleProviderHandler extends BaseHandler {
    async run() {
        const { casinoProviderId } = this.args
        const transaction = this.context.sequelizeTransaction
        try {
            const provider = await db.CasinoProvider.findOne({
                where: { id: casinoProviderId },
                transaction
            })
            provider.isActive = !provider.isActive
            await provider.save({ transaction })
            return { success: true }
        }
        catch (error) {
            return this.handleError(error)
        }
    }
}
