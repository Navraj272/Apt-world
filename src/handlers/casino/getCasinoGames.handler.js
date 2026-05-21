import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { ApiHelper } from '@src/utils/api.utils'
import { Op } from 'sequelize'

export class GetCasinoGamesHandler extends BaseHandler {
  async run() {
    const {
      isActive, search, casinoCategoryId, providerId, isFeatured,
      freespins, include, reorder = false,
    } = this.args

    const applyPagination = !JSON.parse(reorder || 'false');
    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)

    const whereCondition = {
      ...(search && { name: { [Op.iLike]: `%${search}%` } }),
      ...(isActive !== undefined && { isActive }),
      ...(isFeatured !== undefined && { isFeatured }),
      ...(providerId && { casinoProviderId: providerId }),
      ...(casinoCategoryId && {
        casinoCategoryId: include === 'false' ? { [Op.not]: casinoCategoryId } : casinoCategoryId
      }),
      ...(freespins && { hasFreespins: true })
    }

    let orderBy = [['orderId', 'ASC'], ['id', 'ASC']];
    if (include === 'false'){
      orderBy = [['createdAt', 'DESC'], ['id', 'ASC']];
    }
    
    const casinoGames = await db.CasinoGame.findAndCountAll({
      where: whereCondition,
      attributes: [
        'id', 'orderId', 'casinoGameId', 'casinoCategoryId', 'hasFreespins',
        'casinoProviderId', 'returnToPlayer','isActive', 'mobileThumbnailUrl',
        'isFeatured', 'name', 'thumbnailUrl', 'devices', 'moreDetails'
      ],
      include: [
        { model: db.CasinoProvider, attributes: ['name'], where: { isActive: true } ,required :true},
        { model: db.CasinoCategory, attributes: ['name'], required: false }
      ],
      limit: applyPagination ? limit : null,
      offset: applyPagination ? offset : null,
      order: orderBy,
      subQuery: false 
    })

    return {
      casinoGames: casinoGames.rows,
      pageNo: applyPagination ? pageNo : 1,
      totalPages: applyPagination ? Math.ceil(casinoGames.count / limit) : 1,
      totalCount: casinoGames?.count
    }
  }
}
