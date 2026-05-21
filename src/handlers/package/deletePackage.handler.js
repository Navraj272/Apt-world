import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCacheByPattern } from '@src/libs/redis'
import { CACHE_KEYS } from '@src/utils/constants/public.constants'



export class DeletePackageHandler extends BaseHandler {
  async run() {
    const { packageId } = this.args
    const transaction = this.dbTransaction
    const packageData = await db.Package.findOne({ where: { id: packageId } })

    if (!packageData) throw new AppError(Errors.PACKAGE_NOT_FOUND)
    await packageData.destroy({ transaction })
    await deleteCacheByPattern(`${CACHE_KEYS.PACKAGES_WELCOME}*`)
    await deleteCacheByPattern(`${CACHE_KEYS.PACKAGES_NORMAL}*`)
    return { success: true }
  }
}
