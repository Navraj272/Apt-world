import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { uploadImages } from "@src/helpers/uploadFiles.helpers";
import { BaseHandler } from "@src/libs/baseHandler";
import { deleteCache } from "@src/libs/redis";
import { CACHE_KEYS, S3_FILE_PREFIX } from "@src/utils/constants/public.constants";

export class UpdateVipTierHandler extends BaseHandler {
  async run() {
    const {
      vipTierId,
      name,
      // level,
      wageringThreshold,
      // gamesPlayed,
      // bigBetsThreshold,
      // bigBetAmount,
      // depositsThreshold,
      // loginStreak,
      // referralsCount,
      // sweepstakesEntries,
      // sweepstakesWins,
      // timeBasedConsistency,
      // isActive,
      dailyWithdrawalLimit,
      weeklyWithdrawalLimit,
      monthlyWithdrawalLimit,
      conversion_rate_gc_to_vip,
      conversion_rate_sc_to_vip,
      rewards,
      images,
    } = this.args;

    const transaction = this.dbTransaction;
    let imagesData;

    // Check if the VIP Tier exists
    const existingVipTier = await db.VipTier.findOne({
      where: { vipTierId },
      transaction,
    });

    if (!existingVipTier) throw new AppError(Errors.VIP_TIER_NOT_EXISTS);

    const finalDaily = dailyWithdrawalLimit !== undefined ? +dailyWithdrawalLimit : +existingVipTier.dailyWithdrawalLimit;
    const finalWeekly = weeklyWithdrawalLimit !== undefined ? +weeklyWithdrawalLimit : +existingVipTier.weeklyWithdrawalLimit;
    const finalMonthly = monthlyWithdrawalLimit !== undefined ? +monthlyWithdrawalLimit : +existingVipTier.monthlyWithdrawalLimit;

    // Helper to treat 0 as Infinity for comparison
    const valOrInf = (v) => (v === 0 ? Infinity : v);

    // Check 1: Daily vs Weekly
    if (valOrInf(finalDaily) > valOrInf(finalWeekly)) {
      throw new AppError({
        message: `Weekly limit (${finalWeekly === 0 ? 'Unlimited' : finalWeekly}) cannot be less than Daily limit (${finalDaily === 0 ? 'Unlimited' : finalDaily})`,
        code: 400
      });
    }

    // Check 2: Weekly vs Monthly
    if (valOrInf(finalWeekly) > valOrInf(finalMonthly)) {
      throw new AppError({
        message: `Monthly limit (${finalMonthly === 0 ? 'Unlimited' : finalMonthly}) cannot be less than Weekly limit (${finalWeekly === 0 ? 'Unlimited' : finalWeekly})`,
        code: 400
      });
    }


    if (images) {
      const existingImages = {
        desktop: existingVipTier.icon,
        mobile: existingVipTier.mobileIcon,
      };
      imagesData = await uploadImages(
        images,
        existingImages,
        S3_FILE_PREFIX.vipTier
      );
    }
  if(images) {
      if(images.desktop) existingVipTier.icon = imagesData.desktop
      if(images.mobile)  existingVipTier.mobileIcon = imagesData.mobile
    }


    if(name) existingVipTier.name = name
    if(wageringThreshold) existingVipTier.wageringThreshold = wageringThreshold


    if(rewards && rewards[0].rackback) existingVipTier.rackback = rewards[0].rackback
    if(rewards && rewards[0].cashBonus) existingVipTier.cashBonus = rewards[0].cashBonus
    if(rewards && rewards[0].commissionRate) existingVipTier.commissionRate = rewards[0].commissionRate

    if(dailyWithdrawalLimit) existingVipTier.dailyWithdrawalLimit = dailyWithdrawalLimit;
    if(weeklyWithdrawalLimit) existingVipTier.weeklyWithdrawalLimit = weeklyWithdrawalLimit;
    if(monthlyWithdrawalLimit) existingVipTier.monthlyWithdrawalLimit = monthlyWithdrawalLimit;

    if(images) {
      if(images.desktop) existingVipTier.icon = imagesData.desktop
      if(images.mobile)  existingVipTier.mobileIcon = imagesData.mobile
    }

    if (conversion_rate_gc_to_vip)
      existingVipTier.conversion_rate_gc_to_vip = conversion_rate_gc_to_vip;
    if (conversion_rate_sc_to_vip)
      existingVipTier.conversion_rate_sc_to_vip = conversion_rate_sc_to_vip;


    await existingVipTier.save({ transaction });
    await deleteCache(CACHE_KEYS.VIP)
    return { success: true };
  }
}
