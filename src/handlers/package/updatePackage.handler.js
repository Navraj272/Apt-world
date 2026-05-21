import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";
import { uploadImages } from "@src/helpers/uploadFiles.helpers";
import { BaseHandler } from "@src/libs/baseHandler";
import { deleteCacheByPattern } from "@src/libs/redis";
import {
  CACHE_KEYS,
  S3_FILE_PREFIX,
} from "@src/utils/constants/public.constants";
import { serverDayjs } from "@src/libs/dayjs";

export class UpdatePackageHandler extends BaseHandler {
  async run() {
    const {
      packageId,
      label,
      amount,
      gcCoin,
      scCoin,
      isActive,
      isVisibleInStore,
      images,
      orderId,
      maxPurchasePerUser,
      maxPurchaseTotal,
      discountAmount,
      welcomePackage,
      promoCode,
      vipTierIds,
      vipPoints,
      extraFreePercentage,
      promoTag,
      availableFrom,
      availableUntil,
      segmentId
    } = this.args;

    const transaction = this.context.sequelizeTransaction;


    const existingPackage = await db.Package.findOne({
      where: { id: packageId },
      transaction,
    });

    if (!existingPackage) {
      throw new AppError(Errors.PACKAGE_NOT_FOUND);
    }

    let vipTierIdsParsed = vipTierIds;

    if (typeof vipTierIdsParsed === "string") {
      try {
        vipTierIdsParsed = JSON.parse(vipTierIdsParsed);
      } catch {
        vipTierIdsParsed = [];
      }
    }


    if (label !== undefined) existingPackage.label = label;
    if (amount !== undefined) existingPackage.amount = amount;
    if (gcCoin !== undefined) existingPackage.gcCoin = gcCoin;
    if (scCoin !== undefined) existingPackage.scCoin = scCoin;
    if (isActive !== undefined) existingPackage.isActive = isActive;
    if (isVisibleInStore === true || isVisibleInStore === false) {
      existingPackage.isVisibleInStore = isVisibleInStore;
    }
    if (orderId !== undefined) existingPackage.orderId = orderId;
    if (maxPurchasePerUser !== undefined) {
      existingPackage.maxPurchasePerUser = maxPurchasePerUser;
    }
    if (maxPurchaseTotal !== undefined) {
      existingPackage.maxPurchaseTotal = maxPurchaseTotal;
    }
    if (discountAmount !== undefined) {
      existingPackage.discountAmount = discountAmount;
    }
    if (welcomePackage !== undefined) {
      existingPackage.welcomePackage = welcomePackage;
    }
    if (promoCode !== undefined) {
      existingPackage.promoCode = promoCode;
    }
    if (Array.isArray(vipTierIdsParsed)) {
      existingPackage.vipTierIds = vipTierIdsParsed;
    }
    if (vipPoints !== undefined) {
      existingPackage.vipPoints = vipPoints;
    }
    if (extraFreePercentage !== undefined) {
      existingPackage.extraFreePercentage = extraFreePercentage;
    }
    if (promoTag !== undefined) {
      existingPackage.promoTag = promoTag;
    }

    let parsedSegmentId = null;

    if (segmentId !== undefined && segmentId !== null && segmentId !== '') {
       parsedSegmentId = Number(segmentId);
       if (Number.isNaN(parsedSegmentId)) {
         throw new Error('segmentId must be a valid number');
       }
       existingPackage.segmentId = parsedSegmentId
    }
    
    let fromDate = existingPackage.availableFrom
      ? serverDayjs(existingPackage.availableFrom)
      : null;
    let untilDate = existingPackage.availableUntil
      ? serverDayjs(existingPackage.availableUntil)
      : null;

    if (availableFrom !== undefined) {
      if (availableFrom === null) {
        fromDate = null;
        existingPackage.availableFrom = null;
      } else {
        const parsedFrom = serverDayjs(availableFrom);
        if (!parsedFrom.isValid()) {
          throw new AppError(Errors.INVALID_DATE);
        }
        fromDate = parsedFrom;
        existingPackage.availableFrom = parsedFrom.toDate();
      }
    }

    if (availableUntil !== undefined) {
      if (availableUntil === null) {
        untilDate = null;
        existingPackage.availableUntil = null;
      } else {
        const parsedUntil = serverDayjs(availableUntil);
        if (!parsedUntil.isValid()) {
          throw new AppError(Errors.INVALID_DATE);
        }
        untilDate = parsedUntil;
        existingPackage.availableUntil = parsedUntil.toDate();
      }
    }


    // availableUntil must be after availableFrom
    if (fromDate && untilDate && fromDate.valueOf() >= untilDate.valueOf()) {
      throw new Error('availableUntil must be after availableFrom')
    }

    // LIMITED_TIME_OFFER must have both dates
    const effectivePromoTag =
      promoTag !== undefined ? promoTag : existingPackage.promoTag;

    if (
      effectivePromoTag === "LIMITED_TIME_OFFER" &&
      (!fromDate || !untilDate)
    ) {
      throw new AppError(Errors.LIMITED_TIME_REQUIRES_DATES);
    }

    // extraFreePercentage only allowed for EXTRA_FREE
    if (
      effectivePromoTag !== "EXTRA_FREE" &&
      Number(existingPackage.extraFreePercentage) > 0
    ) {
      throw new AppError(Errors.EXTRA_FREE_ONLY_ALLOWED_FOR_EXTRA_FREE_TAG);
    }

    const existingImages = {
      desktop: existingPackage.imageUrl,
      mobile: existingPackage.mobileImageUrl,
    };

    const imagesData = await uploadImages(
      images,
      existingImages,
      S3_FILE_PREFIX.casino_provider
    );

    if (imagesData?.desktop) {
      existingPackage.imageUrl = imagesData.desktop;
    }
    if (imagesData?.mobile) {
      existingPackage.mobileImageUrl = imagesData.mobile;
    }

    await existingPackage.save({ transaction });

    await deleteCacheByPattern(`${CACHE_KEYS.PACKAGES_WELCOME}*`);
    await deleteCacheByPattern(`${CACHE_KEYS.PACKAGES_NORMAL}*`);

    return { success: true };
  }
}

