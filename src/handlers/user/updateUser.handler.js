import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"

export class UpdateUserHandler extends BaseHandler {
  async run() {
    let {
      userId,
      firstName,
      userName,
      lastName,
      phone,
      phoneCode,
      gender,
      dateOfBirth,
      city,
      address,
      locale,
      stateCode,
      postalCode,
      isActive,
      ssn
    } = this.args

    const transaction = this.context.sequelizeTransaction;
    const user = await db.User.findOne({
      where: { userId },
      transaction,
    });

    if (!user) throw new Errors("User not exists");
    const userObj = {};
    const userDetailsObj = {};

    const newDate = new Date(dateOfBirth);
    newDate.setFullYear(new Date(dateOfBirth).getFullYear() + 18);

    if (newDate > new Date()) throw new AppError(Errors.AGE_IS_BELOW18);
    if (firstName) userObj.firstName = firstName;
    if (lastName) userObj.lastName = lastName;
    if (phone) userObj.phone = phone;
    if (gender) userObj.gender = gender;
    if (dateOfBirth) userObj.dateOfBirth = dateOfBirth;
    if (isActive) userObj.isActive = isActive;
    if (locale) userObj.locale = locale;
    if (phoneCode) userObj.phoneCode = phoneCode;
    if (stateCode) userDetailsObj.stateCode = stateCode;
    if (address) userDetailsObj.address = address;
    if (city) userDetailsObj.city = city;
    if (postalCode) userDetailsObj.postalCode = postalCode;
    if (typeof ssn !== 'undefined') {
      if (!userDetailsObj.otherVeriffDetails) {
        userDetailsObj.otherVeriffDetails = {}
      }
      userDetailsObj.otherVeriffDetails.ssn = ssn
    }
    if (userName) {
      const existingUser = await db.User.findOne({
        where: { username: userName },
        attributes: ['username'],
        transaction,
      })

      if (existingUser?.username === userName) throw new AppError(Errors.USER_NAME_EXISTS)
      userObj.username = userName
    }

    await Promise.all([
      await db.User.update(userObj, { where: { userId }, transaction }),
      await db.UserDetails.update(userDetailsObj, {
        where: { userId },
        transaction,
      }),
    ]);

    return { success: true };
  }
}
