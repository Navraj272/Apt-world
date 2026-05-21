import leaderBoardNamespace from './leaderBoard.namespace'
import walletNamespace from './wallet.namespace'

export default function (io) {
  walletNamespace(io)
  leaderBoardNamespace(io)
}
