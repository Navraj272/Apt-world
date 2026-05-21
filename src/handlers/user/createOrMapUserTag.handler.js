import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { identifyUser } from '@src/libs/customerio'

const constraints = {
  type: 'object',
  properties: {
    userId: { type: 'number' },
    tagId: {
      type: 'array',
      items: { type: 'number' }
    }
  },
  required: ['userId', 'tagId']
}

export class CreateOrMapUserTagHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { userId, tagId } = this.args
    const transaction =
      this.context.transaction || await db.sequelize.transaction()

    try {
      // Check if user exists
      const user = await db.User.findOne({
        where: { userId },
        transaction
      })

      if (!user) {
        throw new Error('User not found')
      }

      let tags = []

      // Fetch tags from tagIds (empty array means clear all tags)
      if (tagId.length > 0) {
        tags = await db.Tag.findAll({
          where: {
            id: tagId
          },
          transaction
        })

        if (tags.length !== tagId.length) {
          throw new Error('One or more tags not found')
        }
      }

      const newTagIds = tags
        .map(tag => tag.id)
        .sort((a, b) => a - b)

      // Get existing mappings
      const existingMappings = await db.UserTag.findAll({
        where: { userId },
        transaction
      })

      const existingTagIds = existingMappings
        .map(mapping => mapping.tagId)
        .sort((a, b) => a - b)

      // Skip update if same tags
      const isSame =
        JSON.stringify(existingTagIds) === JSON.stringify(newTagIds)

      if (isSame) {
        if (!this.context.transaction) await transaction.commit()

        return {
          success: true,
          message: 'Tags are already up to date'
        }
      }

      // Remove old mappings
      await db.UserTag.destroy({
        where: { userId },
        transaction
      })

      // Create new mappings
      if (newTagIds.length > 0) {
        await db.UserTag.bulkCreate(
          newTagIds.map(tagId => ({
            userId,
            tagId
          })),
          { transaction }
        )
      }

      if (!this.context.transaction) {
        await transaction.commit()
      }

      const tagNames = tags.map(tag => tag.name.toUpperCase())

      identifyUser(userId.toString(), {
        tags: tagNames
      })

      return {
        success: true,
        message: 'User tags updated successfully',
        data: {
          userId,
          tagIds: newTagIds
        }
      }
    } catch (error) {
      if (!this.context.transaction) {
        await transaction.rollback()
      }

      return this.handleError(error)
    }
  }
}