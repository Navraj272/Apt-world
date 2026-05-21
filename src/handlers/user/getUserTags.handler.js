import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'

const constraints = {
  type: 'object',
  properties: {
    userId: { type: 'string' }
  },
  required: ['userId']
}

export class GetUserTagsHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { userId } = this.args

    // Validate user exists
    const user = await db.User.findOne({
      where: { userId },
      attributes: ['userId']
    })

    if (!user) {
      throw new AppError(Errors.USER_NOT_EXISTS)
    }

    // Get all tags ordered by id DESC
    const allTags = await db.Tag.findAll({
      attributes: ['id', 'name','colorCode'],
      order: [['id', 'DESC']]
    })

    // Get user assigned tags
    const userWithTags = await db.User.findOne({
      where: { userId },
      attributes: ['userId'],
      include: [
        {
          model: db.Tag,
          as: 'tags',
          attributes: ['id', 'name','colorCode'],
          through: { attributes: [] }
        }
      ]
    })

    // Sort active tags by id DESC
    const assignedTags = (userWithTags?.tags || []).sort(
      (a, b) => b.id - a.id
    )

    const assignedTagIds = new Set(
      assignedTags.map(tag => tag.id)
    )

    // inactiveTags will already stay in DESC because allTags is DESC
    const inactiveTags = allTags.filter(
      tag => !assignedTagIds.has(tag.id)
    )

    return {
      success: true,
      data: {
        active: assignedTags,
        inactive: inactiveTags
      }
    }
  }
}