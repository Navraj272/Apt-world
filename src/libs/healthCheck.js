import db from '@src/db/models'
import Logger from '@src/libs/logger'

export default async () => {
  const healthCheck = {
    uptime: process.uptime(),
    timestamp: Date.now(),
    database: 'Database service unavailable'
  }

  try {
    await db.sequelize.authenticate()
    healthCheck.database = 'Database connection successful'
  } catch (error) {
    Logger.error('DATABASE_HEALTHCHECK_FAILED', { message: error.message })
  }

  return healthCheck
}
