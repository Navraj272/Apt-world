import { Logger } from '@src/libs/logger'
import socketEmitter from '@src/libs/socketEmitter'
import { SOCKET_EMITTERS, SOCKET_NAMESPACES, SOCKET_ROOMS } from '@src/utils/constants/public.constants'
import Flatted from 'flatted'

/**
 * Wallet Emitter for Emitting things related to the /wallet namespace
 *
 * @export
 * @class WalletEmitter
 */
export default class WalletEmitter {
  static async emitUserWalletBalance(socketObj, playerId) {
    try {
      socketObj = Flatted.parse(Flatted.stringify(socketObj))
      const room = SOCKET_ROOMS.USER_WALLET + ':' + +playerId
      socketEmitter.of(SOCKET_NAMESPACES.WALLET).to(room).emit(SOCKET_EMITTERS.USER_WALLET_BALANCE, { data: { ...socketObj, playerId } })
    } catch (error) {
      Logger.info('Actual Error', { exception: error })
    }
  }
}
