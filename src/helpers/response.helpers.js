import BaseError from '@src/errors/base.error'
import { Errors } from '@src/errors/errorCodes'
import { extractErrorAttributes } from '@src/utils/error.utils'
import _ from 'lodash'
import { StatusCodes } from 'http-status-codes'

export const sendResponse = ({ req, res, next }, data) => {
  if (data && !_.isEmpty(data)) {
    res.payload = { data, errors: [] }
    const statusCode = res.statusCode || req?.context?.statusCode || StatusCodes.OK
    res.status(statusCode).json({ ...res.payload })
  } else {
    next(Errors.INTERNAL_ERROR)
  }
}

export const sendSocketResponse = ({ reqData, resCallback }, { successful, result, serviceErrors, defaultError }) => {
  if (successful && !_.isEmpty(result)) {
    return resCallback({ data: result, errors: [] })
  } else {
    if (!_.isEmpty(serviceErrors)) {
      // executed when addError is called from service
      const responseErrors = extractErrorAttributes(serviceErrors).map(errorAttr => errorTypes[errorAttr] || errorAttr)
      return resCallback({ data: {}, errors: responseErrors })
    }
    const responseError = new BaseError({ ...defaultError })
    return resCallback({ data: {}, errors: [responseError] })
  }
}
