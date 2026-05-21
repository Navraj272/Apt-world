import { BaseHandler } from '@src/libs/baseHandler';
import { deleteCache } from '@src/libs/redis';
import { CACHE_KEYS } from '@src/utils/constants/public.constants';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';

export class ResetFyntekCooldownHandler extends BaseHandler {
    async run() {
        const { userId } = this.args;

        if (!userId) {
             throw new AppError(Errors.INVALID_INPUT, 'User ID is required');
        }

        const cooldownKey = `${CACHE_KEYS.FYNTEK_REDEEM_COOLDOWN}:${userId}`;

        await deleteCache(cooldownKey);

        // this.context.logger.info(`Fyntek cooldown reset for user: ${userId}`);

        return {
            success: true,
            message: `Cooldown reset successfully for user ${userId}`
        };
    }
}
