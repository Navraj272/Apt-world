import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { DIDIT_STATUS } from "@src/utils/constants/public.constants";

export class ToggleKycVerificationHandler extends BaseHandler {
    async run() {
        const { userId } = this.args;
        const transaction = this.context.sequelizeTransaction;

        try {
            const user = await db.User.findOne({ where: { userId }, transaction });

            if (!user) {
                throw new Error('User not found');
            }

            user.isKycVerified = !user.isKycVerified
            let veriffStatus = DIDIT_STATUS.ADMIN_BLOCK

            if (user.isKycVerified) {
                veriffStatus =  DIDIT_STATUS.ADMIN_APPROVED
            }

            await db.UserDetails.update(
                {
                    diditStatus: veriffStatus
                },
                { where: { userId }, transaction }
            )

            await user.save({ transaction });

            return { success: true, isKycVerified: user.isKycVerified };
        } catch (error) {
            return this.handleError(error);
        }
    }
}
