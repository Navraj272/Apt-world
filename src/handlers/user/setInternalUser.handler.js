import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { setInternalCache } from '@src/libs/redis'
import { CACHE_KEYS } from '@src/utils/constants/public.constants'
import { identifyUser } from '@src/libs/customerio'



// export class SetInternalUserHandler extends BaseHandler {
//   get constraints() {
//     return constraints
//   }

//   async run() {
//     const { userId, userInternalStatus } = this.args

//     const transaction = this.dbTransaction

// const user = await db.User.findOne({
//   where: { userId },
//   attributes: ['userId', 'isInternalUser'],
//   transaction
// })

// if (!user) throw new AppError(Errors.USER_NOT_EXISTS)

// await user.set({ isInternalUser: userInternalStatus }).save({ transaction })

// const getInternal = await db.User.findAll({
//   where: { isInternalUser: true },
//   attributes: ['userId'],
//   transaction
// })

// identifyUser(user.userId.toString(), {
//   is_internal_user: userInternalStatus
// }).catch(err => {
//   this.context.logger?.error({
//     message: 'Failed to sync isInternalUser to Customer.io',
//     error: err.message,
//     userId: user.userId
//   })
// })

// const array = getInternal.map(item => item.userId);

// const getInternalCache = await getCache(CACHE_KEYS.INTERNAL_USERS);


// if(getInternalCache) await deleteCache(CACHE_KEYS.INTERNAL_USERS);

// await setInternalCache(CACHE_KEYS.INTERNAL_USERS, JSON.stringify(array));

//     return { success: true }
//   }
// }


export class SetInternalUserHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { userId, userInternalStatus } = this.args
    const transaction = this.dbTransaction

    const user = await db.User.findOne({
      where: { userId },
      attributes: ['userId', 'isInternalUser'],
      transaction
    })

    if (!user) throw new AppError(Errors.USER_NOT_EXISTS)

    // 1. Get current internal users BEFORE update
    const internalUsers = await db.User.findAll({
      where: { isInternalUser: true },
      attributes: ['userId'],
      transaction
    })

    let internalUserIds = internalUsers.map(u => u.userId)

    // 2. Update DB
    user.isInternalUser = userInternalStatus
    await user.save({ transaction })

    // 3. Update cache array manually
    if (userInternalStatus === true) {
      if (!internalUserIds.includes(userId)) {
        internalUserIds.push(userId)
        console.log(internalUserIds,"internalUserIds1")
      }
    } else {
      internalUserIds = internalUserIds.filter(id => id !== userId)
      console.log(internalUserIds,"internalUserIds2")
    }

    // 4. Sync cache
    await setInternalCache(
      CACHE_KEYS.INTERNAL_USERS,
      JSON.stringify(internalUserIds)
    )

    console.log(internalUserIds,"internalUserIds3")

    // 5. Async Customer.io sync (non-blocking)
    identifyUser(user.userId.toString(), {
      is_internal_user: userInternalStatus
    }).catch(err => {
      this.context.logger?.error({
        message: 'Failed to sync isInternalUser to Customer.io',
        error: err.message,
        userId: user.userId
      })
    })

    return { success: true }
  }
}

