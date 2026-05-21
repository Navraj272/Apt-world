import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCache } from '@src/libs/redis'
import { CACHE_KEYS, S3_FILE_PREFIX } from '@src/utils/constants/public.constants'

export class CreateVipTierHandler extends BaseHandler {

  async run() {

    const {
      level,
      maxDepositLimit,
      minDepositLimit,
      minRedemptionLimit,
      maxRedemptionLimit,
      name,
      boost,
      rakeback,
      bonusSc,
      bonusGc,
      scRequiredMonth,
      gcRequiredMonth,
      gradualLoss,
      gradualLossPeriodUnit,
      prioritySupport,
      isActive,
      rewardCap,
      images
    } = this.args;

    const transaction = this.dbTransaction

    // Check if the VIP tier already exists
    const existingVipTier = await db.VipTier.findOne({
      where: {
        [db.Sequelize.Op.or]: [
          { level },
          { name },
        ],
      },
      transaction
    });

    // console.log(existingVipTier)

    if (existingVipTier) {
      throw new AppError(Errors.VIP_TIER_ALREADY_EXISTS);
    }

    // Validating if maxDepositLimit is greater than minDepositLimit
    if (+maxDepositLimit < +minDepositLimit) {
      throw new AppError(Errors.MAX_LIMIT_LESS_THAN_MIN_LIMIT);
    }

    // Validating if maxRedemptionLimit is greater than minRedemptionLimit
    if (+maxRedemptionLimit < +minRedemptionLimit) {
      throw new AppError(Errors.MIN_LIMIT_GREATER_THAN_MAX_LIMIT);
    }


    // Creating the new VIP Tier
    const vipTierData = {
      level,
      maxDepositLimit,
      minDepositLimit,
      minRedemptionLimit,
      maxRedemptionLimit,
      name,
      boost,
      rakeback,
      bonusSc,
      bonusGc,
      scRequiredMonth,
      gcRequiredMonth,
      gradualLoss,
      gradualLossPeriodUnit,
      prioritySupport,
      isActive
    };

    if (images) {
      const imagesData = await uploadImages(images, {}, S3_FILE_PREFIX.promotions);
      vipTierData.icon = imagesData.desktop
      vipTierData.mobileIcon = imagesData.mobile
    }

    // Only add claimLimit if it's not an empty string
    if (rewardCap !== "") {
      vipTierData.rewardCap = rewardCap;
    }

    const newVipTier = await db.VipTier.create(vipTierData, { transaction });
    await deleteCache(CACHE_KEYS.VIP)
    return {
      success: true,
      vipTierId: newVipTier
    }
  }
}
