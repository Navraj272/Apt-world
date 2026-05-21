import db from "@src/db/models"
import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import { BaseHandler } from "@src/libs/baseHandler"
import { setCache } from "@src/libs/redis"
import { CACHE_KEYS } from "@src/utils/constants/public.constants"

// export class toggleStateHandler extends BaseHandler {
//   async run() {
//     const { stateCode } = this.args
//     const transaction = this.context.sequelizeTransaction

//     const checkState = await db.State.findOne({
//       where: { stateCode },
//       transaction,
//     })

//     if (!checkState) throw new AppError(Errors.STATE_NOT_FOUND)

//     checkState.isActive = !checkState.isActive
//     await checkState.save({ transaction })

//     const stateRecords = await db.State.findAll({ where: { isActive: false },transaction})
//     const inactiveStateCode = stateRecords.map((state) => state.stateCode)
//     await setCache(CACHE_KEYS.STATE_CODES, JSON.stringify(inactiveStateCode))

//     return { success: true, isActive: checkState.isActive }
//   }
// }
export class toggleStateHandler extends BaseHandler {
  async run() {
    const { stateCode } = this.args
    const transaction = this.context.sequelizeTransaction

    const checkState = await db.State.findOne({
      where: { stateCode },
      transaction,
    })

    if (!checkState) throw new AppError(Errors.STATE_NOT_FOUND)


    const stateRecords = await db.State.findAll({
        where: { isActive: false },
        transaction
    })

    let inactiveStateCodes = stateRecords.map((state) => state.stateCode)

    // 2. Perform the Toggle
    const newIsActiveStatus = !checkState.isActive
    checkState.isActive = newIsActiveStatus
    await checkState.save({ transaction })


    if (newIsActiveStatus === false) {
        if (!inactiveStateCodes.includes(stateCode)) {
            inactiveStateCodes.push(stateCode)
        }
    } else {

        inactiveStateCodes = inactiveStateCodes.filter(code => code !== stateCode)
    }

    await setCache(CACHE_KEYS.STATE_CODES, JSON.stringify(inactiveStateCodes))

    return { success: true, isActive: checkState.isActive }
  }
}
