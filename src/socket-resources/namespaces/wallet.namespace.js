import config from '@src/configs/app.config'
import db from '@src/db/models'
import Logger from '@src/libs/logger'
import { SOCKET_NAMESPACES, SOCKET_ROOMS } from '@src/utils/constants/public.constants'
import jwt from 'jsonwebtoken'
/**
 *
 *
 * @export
 * @param {import('socket.io').Server} io
 */
export default function (io) {
  const namespace = io.of(SOCKET_NAMESPACES.WALLET)

  // namespace.use(authenticationSocketNamespaceMiddleWare)
  namespace.use(async (socket, next) => {
    try {
      const accessToken = socket.handshake.headers.auth
      if (!accessToken) {
        return next(new Error('TokenRequiredErrorType'))
      }
      const payLoad = await jwt.verify(accessToken, config.get('jwt.loginTokenSecret'))

      const findUser = await db.User.findOne({
        where:
          { userId: payLoad.id }
      })
      if (!findUser) {
        return next(new Error('UserNotExistsErrorType'))
      }

      const operator = {}
      operator.userId = payLoad.id
      socket.operator = operator

      next()
    } catch (err) {
      Logger.error('Error in authenticationSocketMiddleware', {
        message: err.message,
        context: socket.handshake,
        exception: err
      })
      return next(err)
    }
  })
  namespace.on('connection', (socket) => {
    socket.join(SOCKET_ROOMS.USER_WALLET + ':' + socket.operator.userId)
    socket.join(SOCKET_ROOMS.ACCOUNT_CAPTURE + ':' + socket.operator.userId)
  })
}
