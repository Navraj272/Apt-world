import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'

const constraints = {
  type: 'object',
  properties: {
    tagId: { type: 'number' }
  },
  required: ['tagId']
}

export class RemoveTagHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { tagId } = this.args
    const transaction = this.dbTransaction

    // Check if tag exists
    const tag = await db.Tag.findByPk(tagId, { transaction })
    if (!tag) {
      throw new AppError(Errors.TAG_NOT_FOUND)
    }

    // ✅ CASCADE will handle deletion from user_tags automatically
    await tag.destroy({ transaction })

    return {
      success: true,
      message: 'Tag deleted successfully'
    }
  }
}