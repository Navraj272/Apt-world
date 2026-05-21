import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';

export class ToggleEmailVerificationHandler extends BaseHandler {
    async run() {
        const { userId } = this.args;
        const transaction = this.context.sequelizeTransaction;

        const user = await db.User.findOne({ where: { userId }, transaction });

        if (!user) {
            throw new Error('User not found');
        }

        user.isEmailVerified = !user.isEmailVerified;

        await user.save({ transaction });

        return { success: true, isEmailVerified: user.isEmailVerified };
    }
}
