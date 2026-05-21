import db from '@src/db/models'
import { uploadImages } from '@src/helpers/uploadFiles.helpers'
import { BaseHandler } from '@src/libs/baseHandler'
import { deleteCacheByPattern } from '@src/libs/redis'
import { CACHE_KEYS, S3_FILE_PREFIX } from '@src/utils/constants/public.constants'
import { serverDayjs } from '@src/libs/dayjs'

export class CreatePackageHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const {
      label,
      amount,
      gcCoin,
      scCoin,
      isActive,
      isVisibleInStore,
      images,
      orderId,
      maxPurchasePerUser,
      discountAmount,
      welcomePackage,
      promoCode,
      vipTierIds,
      vipPoints,
      extraFreePercentage,
      promoTag,
      maxPurchaseTotal,
      availableFrom,
      availableUntil,
      segmentId
    } = this.args

    const transaction = this.context.sequelizeTransaction


    let vipTierIdsParsed = vipTierIds

    if (typeof vipTierIdsParsed === 'string') {
      try {
        vipTierIdsParsed = JSON.parse(vipTierIdsParsed)
      } catch {
        vipTierIdsParsed = []
      }
    }


    const packageData = {
      label,
      amount,
      gcCoin,
      scCoin,
      isActive,
      isVisibleInStore,
      orderId,
      maxPurchasePerUser,
      discountAmount,
      welcomePackage: welcomePackage === 'true',
      vipTierIds: vipTierIdsParsed || [],
      vipPoints: vipPoints || 0,
      extraFreePercentage,
      promoTag,
      maxPurchaseTotal
    }

    if (promoCode) {
      packageData.promoCode = promoCode
    }


    let fromDate = null
    let untilDate = null

    if (availableFrom) {
      fromDate = serverDayjs(availableFrom)
      if (!fromDate.isValid()) {
        throw new Error('Invalid availableFrom date')
      }
      packageData.availableFrom = fromDate.toDate()
    }

    if (availableUntil) {
      untilDate = serverDayjs(availableUntil)
      if (!untilDate.isValid()) {
        throw new Error('Invalid availableUntil date')
      }
      packageData.availableUntil = untilDate.toDate()
    }

    if (fromDate && untilDate && fromDate.valueOf() >= untilDate.valueOf()) {
      throw new Error('availableUntil must be after availableFrom')
    }
    
    let parsedSegmentId = null;

    if (segmentId !== undefined && segmentId !== null && segmentId !== '') {
       parsedSegmentId = Number(segmentId);
       if (Number.isNaN(parsedSegmentId)) {
         throw new Error('segmentId must be a valid number');
       }
       packageData.segmentId = parsedSegmentId
    }
    

    if (
      promoTag === 'LIMITED_TIME_OFFER' &&
      (!fromDate || !untilDate)
    ) {
      throw new Error(
        'LIMITED_TIME_OFFER requires availableFrom and availableUntil'
      )
    }


    if (
      promoTag !== 'EXTRA_FREE' &&
      Number(extraFreePercentage) > 0
    ) {
      throw new Error(
        'extraFreePercentage is only allowed when promoTag is EXTRA_FREE'
      )
    }


    const imagesData = await uploadImages(
      images,
      {},
      S3_FILE_PREFIX.casino_category
    )

    if (imagesData?.desktop) {
      packageData.imageUrl = imagesData.desktop
    }

    if (imagesData?.mobile) {
      packageData.mobileImageUrl = imagesData.mobile
    }


    const packageInstance = await db.Package.create(packageData, {
      transaction,
    })


    await deleteCacheByPattern(`${CACHE_KEYS.PACKAGES_WELCOME}*`)
    await deleteCacheByPattern(`${CACHE_KEYS.PACKAGES_NORMAL}*`)

    return { package: packageInstance }
  }
}

