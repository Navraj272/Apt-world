import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { BaseHandler } from "@src/libs/baseHandler";
import { deleteCacheByPattern } from "@src/libs/redis";
import { CACHE_KEYS } from "@src/utils/constants/public.constants";

export class DeleteBannerHandler extends BaseHandler {
  async run() {
    const { bannerId } = this.args;

    const checkBannerExist = await db.Banner.findOne({
      where: { id: bannerId },
    });
    if (!checkBannerExist) throw new AppError(Errors.BANNER_NOT_FOUND);

    await checkBannerExist.destroy();
    await deleteCacheByPattern(`${CACHE_KEYS.BANNERS}*`)
    return { success: true };
  }
}
