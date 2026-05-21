import { createServer } from 'http'
import config from './src/configs/app.config'
import gracefulShutDown from './src/libs/gracefulShutDown'
import { Logger } from './src/libs/logger'
import app from './src/rest-resources'
import socketServer from './src/socket-resources'

const httpServer = createServer(app)
socketServer.attach(httpServer)


httpServer.listen({ port: config.get('port') }, () => {
  Logger.info({ message: `Listening On ${config.get('port')}` }, 'Server Started')
})

process.on('SIGTERM', gracefulShutDown)
process.on('SIGINT', gracefulShutDown)
process.on('SIGUSR2', gracefulShutDown)

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Optional: Exit process or notify monitoring service
});
// Log uncaught exceptions
process.on('uncaughtException', (err) => {
  Logger.fatal({ err }, 'Uncaught Exception');
  process.exit(1); // Exit process after logging
});
