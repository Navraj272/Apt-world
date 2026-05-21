import db from "@src/db/models";
import { BaseHandler } from "@src/libs/baseHandler";
import { Op } from "sequelize";

export default class GetChatGroupUsersHandler extends BaseHandler {
  async run () {

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)
    const { chatGroupId, search, userId } = this.args
    let query = {}
    if (search) query = {
      ...query,
      [Op.or]: [{ username: { [Op.iLike]: `%${search}%` } }]
    }
    if (userId) query = { ...query, userId: { [Op.not]: userId } }
    const allUsers = await db.User.findAndCountAll({
      where: query,
      attributes: ["userId", "username", "firstName", "lastName", "email", "createdAt"],
      include: [{
        model: db.UserChatGroup,
        as: 'userChatGroups',
        where: { chatGroupId },
        required: true,
        attributes: []
      }],
      order: [['createdAt', 'DESC']],
      limit,
      offset: offset,
    })

    return { users: allUsers.rows, pageNo, totalPages: Math.ceil(allUsers.count / limit) }
  }
}
