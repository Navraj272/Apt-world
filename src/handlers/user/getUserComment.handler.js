import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { ApiHelper } from '@src/utils/api.utils'
import { BaseHandler } from '@src/libs/baseHandler'
import { Op } from 'sequelize'


export class GetAllCommentsPageHandler extends BaseHandler {
  async run () {
    const { search, status, userId, role } = this.args

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)

    let query = { userId }
    if (search) query = {
      ...query,
      [Op.or]: [{ title: { [Op.iLike]: `%${search}%` } },
      { comment: { [Op.iLike]: `%${search}%` } },
      { commentedBy: { [Op.iLike]: `%${search}%` } }]
    }
    if (status && (status !== '' || status !== null)) query = { ...query, status }
    if (role === 'superadmin' || role === 'admin') query = { ...query, role }

    const comment = await db.Comment.findAndCountAll({
      order: [['createdAt', 'DESC']],
      where: query,
      limit,
      offset
    })

    if (!comment) throw new AppError(Errors.COMMENT_NOT_FOUND)
    return { comment, pageNo, totalPages: Math.ceil(comment.count / limit) }
  }
}
