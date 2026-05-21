import { serverDayjs } from "@src/libs/dayjs"
import { Op } from "sequelize"



export const REPORT_TIME_PERIOD_FILTER = {
  TODAY: 'today',
  YESTERDAY: 'yesterday',
  LAST_7_DAYS: 'last7days',
  LAST_30_DAYS: 'last30days',
  LAST_90_DAYS: 'last90days',
  MONTH_TO_DATE: 'monthtodate',
  WEEK_TO_DATE: 'weektodate',
  YEAR_TO_DATE: 'yeartodate',
  PREVIOUS_MONTH: 'previousmonth',
  PREVIOUS_YEAR: 'previousyear'
}


/**
 * @param {string} startDate
 * @param {string} endDate
 * @returns
 */
export function alignDatabaseDateFilter(startDate, endDate) {
  let filterObj = {}
  if (startDate && endDate) filterObj = { [Op.and]: [{ [Op.gte]: serverDayjs(startDate).format() }, { [Op.lte]: serverDayjs(endDate).format() }] }
  else if (endDate) filterObj = { [Op.lte]: serverDayjs(endDate).format() }
  else if (startDate) filterObj = { [Op.gte]: serverDayjs(startDate).format() }
  return filterObj
}

export const getDateRanges = (startDate, endDate) => {
  const currentStart = serverDayjs(startDate).startOf('day')
  const currentEnd = serverDayjs(endDate).endOf('day')

  const duration = currentEnd.diff(currentStart, 'milliseconds')

  const previousStart = currentStart.subtract(duration, 'milliseconds').toISOString()
  const previousEnd = currentStart.subtract(1, 'milliseconds').toISOString()

  return {
    currentStart: currentStart.toISOString(),
    currentEnd: currentEnd.toISOString(),
    previousStart,
    previousEnd,
  }
}


export function dateOptionsFilter(dateOptions) {
  const today = serverDayjs().endOf('day')
  const startOfToday = today.startOf('day')
  let fromDate, toDate

  switch (dateOptions) {
    case REPORT_TIME_PERIOD_FILTER.TODAY:
      fromDate = startOfToday.format()
      toDate = today.format()
      break

    case REPORT_TIME_PERIOD_FILTER.YESTERDAY:
      fromDate = startOfToday.subtract(1, 'day')
      toDate = fromDate.endOf('day').format()
      fromDate = fromDate.format()
      break

    case REPORT_TIME_PERIOD_FILTER.LAST_7_DAYS:
      fromDate = startOfToday.subtract(7, 'days').format()
      toDate = today.format()
      break

    case REPORT_TIME_PERIOD_FILTER.LAST_30_DAYS:
      fromDate = startOfToday.subtract(30, 'days').format()
      toDate = today.format()
      break

    case REPORT_TIME_PERIOD_FILTER.LAST_90_DAYS:
      fromDate = startOfToday.subtract(90, 'days').format()
      toDate = today.format()
      break

    case REPORT_TIME_PERIOD_FILTER.WEEK_TO_DATE:
      fromDate = today.startOf('week').format()
      toDate = today.format()
      break

    case REPORT_TIME_PERIOD_FILTER.MONTH_TO_DATE:
      fromDate = today.startOf('month').format()
      toDate = today.format()
      break

    case REPORT_TIME_PERIOD_FILTER.YEAR_TO_DATE:
      fromDate = today.startOf('year').format()
      toDate = today.format()
      break

    case REPORT_TIME_PERIOD_FILTER.PREVIOUS_MONTH:
      fromDate = today.subtract(1, 'month').startOf('month').format()
      toDate = serverDayjs(fromDate).endOf('month').format()
      break

    case REPORT_TIME_PERIOD_FILTER.PREVIOUS_YEAR:
      fromDate = today.subtract(1, 'year').startOf('year').format()
      toDate = serverDayjs(fromDate).endOf('year').format()
      break

    default:
      fromDate = startOfToday.format()
      toDate = today.format()
      break
  }

  return { fromDate, toDate }
}