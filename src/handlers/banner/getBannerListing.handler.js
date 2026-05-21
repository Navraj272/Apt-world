import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { ApiHelper } from '@src/utils/api.utils'

export class GetBannerHandler extends BaseHandler {

  async run() {

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { isActive, bannerType, allData='false' } = this.args
    let query
    if (isActive) query = { isActive }
    if (bannerType) query = { ...query, bannerType }

    let condition = {
      where : { ...query },
      order : [['order', 'ASC']]
    }

    if(allData === 'false'){
      condition.limit =  limit,
      condition.offset = offset
    }

    const banners = await db.Banner.findAndCountAll(condition)
    return {
      banners: banners.rows,
      pageNo,
      totalPages: Math.ceil(banners.count / limit)
    }
  }
}
