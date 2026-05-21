import config from "@src/configs/app.config";
import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { generateVerifyToken, sendMail } from "@src/helpers/sendMail.helpers";
import { BaseHandler } from "@src/libs/baseHandler";
import { EMAIL_NAME } from "@src/utils/constants/public.constants";

export class ResetUserPasswordHandler extends BaseHandler {
  async run() {
    const { userId } = this.args;
    const transaction = this.context.sequelizeTransaction;

    const userDetails = await db.User.findOne({
      where: { userId },
      attributes: ["userId", "email", "locale", "isEmailVerified", "username"],
      transaction,
    });

    if (!userDetails) throw new AppError(Errors.USER_NOT_EXISTS);

    if (!userDetails.isEmailVerified)
      throw new AppError(Errors.EMAIL_NOT_VERIFIED);

    const origin = config.get("app.userFrontendUrl");
    const newPasswordKey = await generateVerifyToken(
      userDetails.userId,
      config.get("jwt.resetPasswordKey"),
      config.get("jwt.resetPasswordExpiry")
    );

    const forgetPasswordEmailSent = await sendMail(
      userDetails.email,
      EMAIL_NAME.FORGET_PASSWORD,
      {
        name: userDetails.username,
        resetPasswordLink: `${origin}/reset-password?newPasswordKey=${newPasswordKey}`,
        expiry: parseInt(config.get("jwt.emailTokenExpiry")),
      }
    );
    if (!forgetPasswordEmailSent) throw new AppError(Errors.EMAIL_SERVICE_FAILED)
    return {
      message:
        "Mail has been send to user registered email address to reset password.",
    };
  }
}
