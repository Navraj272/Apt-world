import db from '@src/db/models'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { BaseHandler } from '@src/libs/baseHandler'
import { ApiHelper } from '@src/utils/api.utils'

export class GetAllPackagesHandler extends BaseHandler {
  async run() {

    const { offset, limit, pageNo } = ApiHelper.getPagination(this.args.pageNo, this.args.limit)

    const packages = await db.Package.findAndCountAll({
      order: [['orderId', 'ASC']],
      limit: this.args.limit? limit : null,
      offset: this.args.limit? offset : null,
    })

    if (!packages) throw new AppError(Errors.PACKAGE_NOT_EXISTS)

    return { packages, pageNo, totalPages: Math.ceil(packages.count / limit) }
  }
}
