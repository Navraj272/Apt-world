import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";
import { ApiHelper } from "@src/utils/api.utils";
import { Op } from "sequelize";

export class GetDuplicateUsersHandler extends BaseHandler {
  async run() {
    const { userId } = this.args;

    const userDetail = await db.User.findOne({
      where: { userId },
      attributes: [
        "firstName",
        "lastName",
        "email",
        "phone",
        "dateOfBirth",
        "username",
        "userId",
      ],
      include: {
        model: db.UserDetails,
        as: "userDetails",
        attributes: ["ipAddress", "loginIpAddress"],
      },
    });
    const { offset, limit, pageNo } = ApiHelper.getPagination(
      this.args.pageNo,
      this.args.limit
    );
    if (!userDetail) throw new AppError(Errors.USER_NOT_EXISTS);

    let emailName = userDetail.email?.split("@")[0];
    emailName = emailName?.split("+")[0];
    const query = {
      [Op.or]: [
        // { firstName: { [Op.iLike]: `%${userDetail.firstName}%` } },
        // { lastName: { [Op.iLike]: `%${userDetail.lastName}%` } },
        { email: { [Op.iLike]: `%${emailName}%` } },
        // // { x: { [Op.like]: userDetail.phone ? userDetail.phone : ' ' } },
        userDetail.dateOfBirth && { dateOfBirth: { [Op.eq]: userDetail.dateOfBirth } },
        // { username: { [Op.iLike]: `%${userDetail.username}%` } },
        userDetail.userDetails?.ipAddress && {
          "$userDetails.ip_address$": {
            [Op.eq]: userDetail.userDetails?.ipAddress,
          },
        },
        userDetail.userDetails?.loginIpAddress && {
          "$userDetails.login_ip_address$": {
            [Op.eq]: userDetail.userDetails?.loginIpAddress,
          },
        },
      ],
      userId: { [Op.ne]: userDetail.userId },
    };

    const users = await db.User.findAndCountAll({
      where: query,
      limit,
      offset,
      attributes: [
        "firstName",
        "lastName",
        "email",
        "phone",
        "dateOfBirth",
        "username",
        "userId",
      ],
      include: {
        model: db.UserDetails,
        as: "userDetails",
        attributes: ["ipAddress", "loginIpAddress"],
      },
    });
    return {
      users,
      pageNo,
      totalPages: Math.ceil(users.count / limit),
    };
  }
}
