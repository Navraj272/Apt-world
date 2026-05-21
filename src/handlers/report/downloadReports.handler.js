import { reportGenerators } from '@src/helpers/downloadReports.helpers'
import { AppError } from '@src/errors/app.error'
import { BaseHandler } from '@src/libs/baseHandler'
import { Errors } from '@src/errors/errorCodes'
import { Transform as Json2CsvTransform } from 'json2csv'
import { Readable } from 'stream'

export class DownloadReport extends BaseHandler {
  async run() {
    const { reportName,reportFields,filters,pagination = false } = this.args
    const generator = reportGenerators[reportName]
    if (!generator) throw new AppError(Errors.REPORT_NOT_FOUND)
      
    const { data } = await generator.execute({...(filters || {}),pagination})
    if (!data || data.length === 0) {
      throw new AppError(Errors.NO_DATA_FOUND)
    }
    const fields = reportFields
      ? Object.entries(reportFields).map(([label, key]) => ({
          label,
          value: key,
        }))
      : [...new Set(data.flatMap(obj => Object.keys(obj)))].map(field => ({
          label: field,
          value: field,
        }))
    const csvTransform = new Json2CsvTransform(
      { fields },
      { objectMode: true }
    )

    const dataStream = Readable.from(data, { objectMode: true })
    const csvStream = dataStream.pipe(csvTransform)

    return { csvStream, reportName }
  }
}
