import db from '@src/db/models';
import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';
import { BaseHandler } from '@src/libs/baseHandler';
;


export class GetPackageHandler extends BaseHandler {
  get constraints() {
    return constraints;
  }

  async run() {
    const { id } = this.args;

    const data = await db.Package.findOne({
      where: { id }
    });


    if (!data) throw new AppError(Errors.PACKAGE_NOT_FOUND);

    return { data };
  }
}
