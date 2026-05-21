import db from '@src/db/models'
import Logger from '@src/libs/logger'
import { client } from '@src/libs/redis'

export default async () => {
  const healthCheck = {
    uptime: process.uptime(),
    timestamp: Date.now(),
    database: 'Database service unavailable',
    cache: 'Cache service unavailable'
  }

  try {
    await db.sequelize.authenticate()
    healthCheck.database = 'Database connection successful'
  } catch (error) {
    Logger.error('DATABASE_HEALTHCHECK_FAILED', { message: error.message })
  }

  try {
    const redisResponse = await client.ping()
    if (redisResponse !== 'PONG') {
      throw new Error('Cache service failed')
    }
    healthCheck.cache = 'Cache connection successful'
  } catch (error) {
    Logger.error('CACHE_HEALTHCHECK_FAILED', { message: error.message })
  }

  return healthCheck
}
