import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'

export class UpdateUserLevelHandler extends BaseHandler {
  async run() {
    const { userId, vipTierId, authenticatedAdminId } = this.args
    const transaction = this.dbTransaction

    /**
     * 1. Validate user
     */
    const user = await db.User.findOne({
      where: { userId },
      attributes: ['userId'],
      transaction
    })
    if (!user) throw new AppError(Errors.USER_NOT_EXISTS)

    /**
     * 2. Validate target VIP tier
     */
    const targetVipTier = await db.VipTier.findOne({
      where: { vipTierId },
      transaction
    })
    if (!targetVipTier) throw new AppError(Errors.VIP_TIERS_NOT_EXISTS)

    /**
     * 3. Get next VIP tier (for nextVipTierId in UserDetails)
     */
    const nextVipTier = await db.VipTier.findOne({
      where: { level: targetVipTier.level + 1 },
      attributes: ['vipTierId', 'level', 'name'],
      transaction
    })

    /**
     * 4. Fetch current state for comment history
     *    — snapshot everything before we change it
     */
    const currentUserDetails = await db.UserDetails.findOne({
      where: { userId },
      attributes: ['vipTierId', 'nextVipTierId'],
      transaction
    })

    const currentProgress = await db.UserTierProgress.findAll({
      where: { userId },
      transaction
    })

    const currentVipTier = currentUserDetails?.vipTierId
      ? await db.VipTier.findOne({
          where: { vipTierId: currentUserDetails.vipTierId },
          attributes: ['vipTierId', 'name', 'level'],
          transaction
        })
      : null

    /**
     * 5. Store comment with full history snapshot
     */
    const adminDetails = await db.AdminUser.findOne({
      where: { adminUserId: authenticatedAdminId },
      attributes: ['email'],
      include: {
        model: db.AdminRole,
        attributes: ['name']
      }
    })
    

    await db.Comment.create(
      {
        comment: JSON.stringify({
          action: 'VIP_TIER_MANUAL_UPDATE',
          previousVipTierId: currentUserDetails?.vipTierId || null,
          previousVipTierName: currentVipTier?.name || null,
          previousVipTierLevel: currentVipTier?.level || null,
          newVipTierId: vipTierId,
          newVipTierName: targetVipTier.name,
          newVipTierLevel: targetVipTier.level,
          previousProgress: currentProgress.map(p => p.toJSON()),
          updatedAt: new Date().toISOString()
        }),
        title: `VIP Tier manually changed to ${targetVipTier.name} (Level ${targetVipTier.level})`,
        commentedBy: adminDetails.email,
        role: adminDetails.AdminRole.name,
        status: true,
        userId
      },
      { transaction }
    )

    /**
     * 6. Delete ALL existing tier progress for this user
     */
    await db.UserTierProgress.destroy({
      where: { userId },
      transaction
    })

    /**
     * 7. Create fresh progress for the target tier
     */
    await db.UserTierProgress.create(
      {
        vipTierId: nextVipTier?.vipTierId,
        userId: userId,
        wageringThreshold: 0,
        isActive: true,
        gamesPlayed: 0,
        bigBetsThreshold: 0,
        depositsThreshold: 0,
        loginStreak: 0,
        referralsCount: 0,
      },
      { transaction }
    )

    /**
     * 8. Update UserDetails
     */
    await db.UserDetails.update(
      {
        vipTierId: vipTierId,
        nextVipTierId: nextVipTier?.vipTierId || null
      },
      { where: { userId }, transaction }
    )

    return { success: true }
  }
}