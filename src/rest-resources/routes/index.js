import healthCheck from '@src/libs/healthCheck';
import express from 'express';
import v1Router from './api';

const routes = express.Router();

// API versioning
routes.use('/api/v1', v1Router);

// Health check endpoint
routes.get('/healthcheck', async (_, res) => {
  try {
    const response = await healthCheck();
    res.json(response);
  } catch (error) {
    res.status(503).send();
  }
});

export default routes;
