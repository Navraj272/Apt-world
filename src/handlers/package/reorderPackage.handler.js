import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCacheByPattern } from '@src/libs/redis'
import { CACHE_KEYS } from '@src/utils/constants/public.constants'


export class ReorderPackageHandler extends BaseHandler {
  async run() {
    let { packageIds } = this.args

    packageIds = [...(new Set(packageIds))]
    const promises = []
    const transaction = this.context.sequelizeTransaction
    const packages = await db.Package.count({ transaction })

    if (packages !== packageIds.length) throw new AppError(Errors.INVALID_ARRAY)
    let count = 1
    packageIds.forEach(packageId => {
      promises.push(db.Package.update({ orderId: count }, { where: { id: packageId }, transaction }))
      count++
    });
    await Promise.all(promises)
    await deleteCacheByPattern(`${CACHE_KEYS.PACKAGES_WELCOME}*`)
    await deleteCacheByPattern(`${CACHE_KEYS.PACKAGES_NORMAL}*`)
    return { success: true }

  }
}
