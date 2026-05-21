import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCache } from '@src/libs/redis'
import { CACHE_KEYS } from '@src/utils/constants/public.constants'

export class CreateIpAddressHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { ipAddress, name, authenticatedAdminId } = this.args
    const transaction = this.dbTransaction

    const adminUser = await db.AdminUser.findOne({
      where: { adminUserId: authenticatedAdminId },
      attributes : ['firstName'],
      transaction
    })

    if (!adminUser) {
      throw new Error('Admin user not found')
    }
    const IpAddress = await db.WhitelistedIpAddress.create(
      {
        adminId:authenticatedAdminId,
        name,
        ipAddress
      },
      { transaction }
    )

    await deleteCache(CACHE_KEYS.IP_ADDRESSES);

    return {IpAddress}
  }
}
