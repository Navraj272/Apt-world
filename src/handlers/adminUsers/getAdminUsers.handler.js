import db from '@src/db/models'
import { ApiHelper } from '@src/utils/api.utils'
import { BaseHandler } from '@src/libs/baseHandler'
import { Op, Sequelize } from 'sequelize';


export class GetAdminUsersHandler extends BaseHandler {
  async run() {

    const { offset, limit,pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { orderBy = 'firstName', search, status, sort = 'ASC', roleId } = this.args

    let query = {}
    // if (userType) query.parentType = userType
    if (search) query = {
      ...query,
      [Op.or]: [Sequelize.where(Sequelize.fn('concat', Sequelize.col('first_name'), ' ', Sequelize.col('last_name')), {
        [Op.iLike]: `%${search}%`
      }),
      { email: { [Op.iLike]: `%${search}%` } },
      { group: { [Op.iLike]: `%${search}%` } }]

    }
    if (status) query.isActive = status

    const options = {
      where: query,
      order: [[orderBy, sort.toUpperCase()]],
      attributes: ['adminUserId', 'firstName', 'lastName', 'phone', 'email', 'adminRoleId', 'permission', 'isActive', 'adminUsername', 'group',],
      include: {
        attributes: ['name'],
        where: roleId ? { roleId } : {},
        model: db.AdminRole
      }
    }

    if (offset && limit) {
      options.limit = limit
      options.offset = offset
    }

    const adminDetails = await db.AdminUser.findAndCountAll(options)

    return {
      adminDetails,
      pageNo,
      totalPages: Math.ceil(adminDetails.count / limit)
    }
  }
}
