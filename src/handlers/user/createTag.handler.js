import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'

const constraints = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    colorCode: { type: 'string' }
  },
  required: ['name', 'colorCode']
}

export class CreateTagHandler extends BaseHandler {
  get constraints() {
    return constraints
  }

  async run() {
    const { name, colorCode } = this.args

    // Check if tag already exists
    const existingTag = await db.Tag.findOne({
      where: { name }
    })

    if (existingTag) {
      throw new Error('Tag already exists')
    }

    // Create the tag
    const tag = await db.Tag.create({
      name,
      colorCode
    })

    return {
      success: true,
      message: 'Tag created successfully',
      data: tag
    }
  }
}