import config from '@src/configs/app.config'
import axios from 'axios'
import crypto from 'crypto'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'

/**
 * AptPayAxios handles API requests to AptPay service.
 */
export class AptPayAxios {
  constructor() {
    this.aptPayAxios = axios.create({
      baseURL: config.get('aptPay.ApiEndpoint'),
      headers: {
        AptPayApiKey: config.get('aptPay.apiKey'),
        'Content-Type': 'application/json',
        aptoken: config.get('aptPay.apiToken'),
      },
    })
  }

  /**
   * Generates HMAC SHA512 hash for request body.
   * @param {Object|string} body - Request payload.
   * @returns {Promise<string>} - Hashed body.
   */
  async generateBodyHash(body = "") {
    return crypto
      .createHmac('sha512', config.get('aptPay.secretKey'))
      .update(JSON.stringify(body))
      .digest('hex')
  }

  /**
   * Makes a purchase request.
   * @param {Object} body - Purchase request data.
   * @returns {Promise<Object>} - Response data.
   */
  async purchase(body = "") {
    return this.postRequest('/ach-debit/create', body, 'Failed to purchase')
  }

  /**
   * Initiates a withdrawal request.
   * @param {Object} body - Withdrawal request data.
   * @returns {Promise<Object>} - Response data.
   */
  async withdrawal(body = "") {
    return this.postRequest('/disbursements/add', body, 'Failed to withdraw amount')
  }

  /**
   * Adds a webhook listener.
   * @param {Object} body - Webhook details.
   * @returns {Promise<Object>} - Response data.
   */
  async addListen(body = "") {
    return this.postRequest('/webhook', body, 'Failed to add webhook URL', 200)
  }

  /**
   * Adds an identity record.
   * @param {Object} body - Identity data.
   * @returns {Promise<Object>} - Response data.
   */
  async addIdentity(body = "") {
    return this.postRequest('/identities/add', body, 'Failed to add identity')
  }

  /**
   * Generic method to handle POST requests.
   * @param {string} endpoint - API endpoint.
   * @param {Object} body - Request payload.
   * @param {string} errorMessage - Error message if request fails.
   * @param {number} [expectedStatus=201] - Expected response status code.
   * @returns {Promise<Object>} - Response data.
   * @throws {Error} - Throws error on failure.
   */
  async postRequest(endpoint, body, errorMessage, expectedStatus = 201) {
    try {
      const response = await this.aptPayAxios.post(endpoint,body, {
        headers: {'body-hash': await this.generateBodyHash(body)},
      })

      if (response.status !== expectedStatus) {
        throw new Error(response)
      }

      return response.data
    } catch (error) {
      console.log("===ERROR API ERROR APTPAY===",(error.response))
      if (error.response) {
        console.log("====error====",(error?.response?.data))
        throw new AppError({ ...Errors.APTPAY_API_ERROR, message: error.response.data.message })
      } else {
        throw new AppError({ ...Errors.APTPAY_API_ERROR, message: error.message })
      }
    }
  }
}
