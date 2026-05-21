import axios from 'axios';
import config from '@src/configs/app.config';
import { Logger } from './logger';

// Create a single, configured Axios instance for the Customer.io v1 API
const customerIOAxios = axios.create({
  baseURL: 'https://track.customer.io/api/v1', // Use the v1 API endpoint
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${Buffer.from(`${config.get('customerIo.siteId')}:${config.get('customerIo.apiKey')}`).toString('base64')}`,
  },
});

/**
 * Creates or updates a user in Customer.io and sets their attributes.
 * @param {string} userId - The unique ID of the user in your system.
 * @param {object} attributes - An object of attributes to set on the user's profile.
 */
export async function identifyUser(userId, attributes) {
  try {
    // The v1 endpoint for identifying a user is PUT /customers/{id}
    await customerIOAxios.put(`/customers/${userId}`, attributes);
    Logger.info(`Successfully identified user ${userId} in Customer.io`);
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    Logger.error({ message: `Failed to identify user ${userId} in Customer.io`, error: errorMessage });
    throw error; // Re-throw to be caught by the calling handler
  }
}

/**
 * Tracks a custom event for a user.
 * @param {string} userId - The unique ID of the user who performed the event.
 * @param {string} eventName - The name of the event (e.g., "signin").
 * @param {object} eventData - An object of data associated with the event.
 */
export async function trackEvent(userId, eventName, eventData = {}) {
  try {
    const payload = {
      name: eventName,
      data: eventData,
    };
    // The v1 endpoint for tracking an event is POST /customers/{id}/events
    await customerIOAxios.post(`/customers/${userId}/events`, payload);
    Logger.info(`Successfully tracked event '${eventName}' for user ${userId}`);
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    Logger.error({ message: `Failed to track event '${eventName}' for user ${userId}`, error: errorMessage });
    throw error; // Re-throw to be caught by the calling handler
  }
}
