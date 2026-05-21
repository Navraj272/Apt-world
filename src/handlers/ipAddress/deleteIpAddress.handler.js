import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCache } from '@src/libs/redis'
import { CACHE_KEYS } from '@src/utils/constants/public.constants'

export class DeleteIpAddressHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { ipAddressId } = this.args
    const transaction = this.dbTransaction

    const deleted = await db.WhitelistedIpAddress.destroy({
      where: { id : ipAddressId },
      transaction
    })

    if (deleted === 0) {
      throw new Error('IP address not found')
    }

    await deleteCache(CACHE_KEYS.IP_ADDRESSES);

    return { message: 'IP address deleted successfully' }
  }
}
