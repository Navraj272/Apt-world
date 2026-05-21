import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'

const constraints = {
  type: 'object',
  properties: {},
  required: []
}

export class GetAllTagsHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const tags = await db.Tag.findAll({
      order: [['id', 'DESC']]
    })

    return {
      success: true,
      data: tags
    }
  }
}