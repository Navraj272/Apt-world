import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import db from "@src/db/models";
import { BaseHandler } from "@src/libs/baseHandler";
import { uploadImages } from '@src/helpers/uploadFiles.helpers'
import { S3_FILE_PREFIX } from '@src/utils/constants/public.constants'
import { BONUS_TYPE } from "@src/utils/constants/bonus.constants";

export class updateBonusHandler extends BaseHandler {
  async run() {
    const {
      bonusId,
      bonusType,
      promotionTitle,
      scAmount,
      gcAmount,
      percentage,
      maxBonusLimit,
      gcMaxBonusLimit,
      maxReferralCap,
      status,
      description,
      termsConditions,
      minimumDepositRequired,
      images,
    } = this.args;
    const transaction = this.dbTransaction;
    const findBonus = await db.Bonus.findByPk(bonusId, { transaction });

    if (!findBonus) {
      throw new AppError(Errors.BONUS_NOT_FOUND);
    }
    const updateFields = {
      bonusType: bonusType || findBonus.bonusType,
      promotionTitle: promotionTitle || findBonus.promotionTitle,
      scAmount: scAmount || findBonus.scAmount,
      gcAmount: gcAmount || findBonus.gcAmount,
      percentage: percentage || findBonus.percentage,
      maxBonusLimit: maxBonusLimit || findBonus.maxBonusLimit,
      gcMaxBonusLimit: gcMaxBonusLimit || findBonus.gcMaxBonusLimit,
      maxReferralCap: maxReferralCap ?? findBonus.maxReferralCap,
      status: status || findBonus.status,
      description: description || findBonus.description,
      termsConditions: termsConditions || findBonus.termsConditions,
    };

    if (bonusType === BONUS_TYPE.REFERRAL_BONUS && minimumDepositRequired) {
        updateFields.minimumDepositRequired = minimumDepositRequired;
      }

    const existingImages = {
      desktop: findBonus.imageUrl,
      mobile: findBonus.mobileImageUrl,
    };

    const imagesData = await uploadImages(images, existingImages, S3_FILE_PREFIX.bonus);
    if (imagesData.desktop) updateFields.imageUrl = imagesData.desktop;
    if (imagesData.mobile) updateFields.mobileImageUrl = imagesData.mobile;

    const updateBonus = await db.Bonus.update(updateFields, {
      where: { id: bonusId },
      transaction,
    });

    if (updateBonus[0] == 0) {
      throw new AppError(Errors.BONUS_UPDATE_FAILED);
    }
    return {
      success: true,
    };
  }
}
