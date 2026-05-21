import { Errors } from '@src/errors/errorCodes'
import { AppError } from '@src/errors/app.error'
import db from '@src/db/models'
import { BaseHandler } from '@src/libs/baseHandler'



export class UpdateDocumentLabelHandler extends BaseHandler {
  async run () {
    const { documentLabelId, name, isRequired } = this.args

    const checkLabelExists = await db.DocumentLabel.findOne({
      where: { documentLabelId }
    })

    if (!checkLabelExists) throw new AppError(Errors.DOCUMENT_LABELS_NOT_FOUND)

      const updatedLabel = await db.DocumentLabel.update(
        { name: { ...checkLabelExists.name, ...name },isRequired},
        {where: { documentLabelId }}
      );


    return { updatedLabel }
  }
}
