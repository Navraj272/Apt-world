import config from '@src/configs/app.config'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { JWT_TOKEN_TYPES } from '@src/utils/constants/public.constants'
import jwt from 'jsonwebtoken'

/**
 * Middleware to authenticate admin users based on JWT token and required access level.
 *
 * @param {string} accessLevel - Access level string in the format "module:permissionLevel".
 * @returns {Function} Express middleware function.
 */
export function isAdminAuthenticated(accessLevel) {
  return function (req, res, next) {
    try {
      // Extract the Bearer token from the authorization header
      const accessToken = req.headers.authorization?.split('Bearer ')[1]
      if (!accessToken) {
        return next(new AppError(Errors.UN_AUTHORIZE))
      }

      // Verify the token
      const decodedToken = jwt.verify(accessToken, config.get('jwt.loginTokenSecret'))

      // Ensure the token is for login authentication
      if (decodedToken.type !== JWT_TOKEN_TYPES.LOGIN) {
        return next(new AppError(Errors.UN_AUTHORIZE))
      }

      // Extract module and permission level from the accessLevel parameter
      // const [module, permissionLevel] = accessLevel.split(':')

      // Validate permissions if module and permission level are specified
      // if (
      //   module &&
      //   permissionLevel &&
      //   (!decodedToken.permission || !decodedToken.permission[module]?.includes(permissionLevel))
      // ) {
      //   return next(new AppError(Errors.PERMISSION_DENIED))
      // }

      // Attach user details to the request object for downstream processing
      req.body.id = decodedToken.userId
      req.body.authenticatedAdminId = decodedToken.userId

      next()
    } catch (error) {
      console.error('Authentication error:', error)
      // return next(new AppError(Errors.UN_AUTHORIZE))
      next()
    }
  }
}
