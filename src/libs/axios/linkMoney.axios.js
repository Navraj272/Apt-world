import config from '@src/configs/app.config'
import axios from 'axios'
import { AppError } from '@src/errors/app.error'
import { Errors } from '@src/errors/errorCodes'
import { Logger } from '../logger'

export class LinkMoneyAxios {
  constructor() {
    this.linkMoneyAxios = axios.create({
      baseURL: config.get('linkMoney.baseUrl'),
      headers: {
        Accept: 'application/json',
      },
    })
  }

  async generateBasicAuthHeader() {
    const clientId = config.get('linkMoney.clientId')
    const clientSecret = config.get('linkMoney.clientSecret')
    const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
    return `Basic ${encoded}`
  }

  /**
   * Gets an access token from LinkMoney using URLSearchParams.
   * @returns {Promise<string>} - Access token.
   */
  async getAccessToken() {
    const params = new URLSearchParams()
    params.append('client_id', config.get('linkMoney.clientId'))
    params.append('client_secret', config.get('linkMoney.clientSecret'))
    params.append('grant_type', 'client_credentials')
    params.append('scope', 'Link-Core')

    Logger.info(params, "Params");

    const tokenResponse = await this.postRequest(
      '/v1/tokens',
      params.toString(),
      'Failed to get token',
      { 'Content-Type': 'application/x-www-form-urlencoded' },
      200
    )

    Logger.info(tokenResponse, "Token Response");

    return tokenResponse?.access_token
  }

  async createSession(body = '') {
    return this.postRequest(
      '/v2/sessions',
      body,
      'Failed to create session',
      {
        Authorization: await this.generateBasicAuthHeader(),
        'Content-Type': 'application/json',
      },
      200
    )
  }

  async requestPayment(body = '') {
    const accessToken = await this.getAccessToken()

    Logger.info(accessToken,"AccessToken");

    Logger.info(body, "Body for approval");

    return this.postRequest(
      '/v1/payments',
      body,
      'Failed to request payment',
      {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      200
    )
  }

  async getAccounts(customerId) {
    const accessToken = await this.getAccessToken()
    return this.getRequest(
      `/v1/customers/${customerId}/accounts`,
      'Failed to get accounts',
      {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      200
    )
  }

  async subscribeWebhook(webhookUrl) {
    const accessToken = await this.getAccessToken()

    const body = {
      url: webhookUrl,
      secretKey: config.get('linkMoney.clientSecret'),
      subscriptionDetails: {
        type: 'CATEGORY',
        details: ['PAYMENT'],
      },
    }

    return this.postRequest(
      '/v1/webhook/subscribe',
      body,
      'Failed to subscribe webhook',
      {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      200
    )
  }

  async postRequest(endpoint, body, errorMessage, headers = {}, expectedStatus = 201) {
    try {
      const response = await this.linkMoneyAxios.post(endpoint, body, { headers })

      if (response.status !== expectedStatus) {
        throw new Error(`Unexpected response status: ${response.status}`)
      }

      return response.data
    } catch (error) {
      const errMsg = error?.response?.data?.message || error.message
      throw new AppError({ ...Errors.LINKMONEY_API_ERROR, message: `${errorMessage}: ${errMsg}` })
    }
  }

  async getRequest(endpoint, errorMessage, headers = {}, expectedStatus = 201) {
    try {
      const response = await this.linkMoneyAxios.get(endpoint, { headers })

      if (response.status !== expectedStatus) {
        throw new Error(`Unexpected response status: ${response.status}`)
      }

      return response.data
    } catch (error) {
      const errMsg = error?.response?.data?.message || error.message
      throw new AppError({ ...Errors.LINKMONEY_API_ERROR, message: `${errorMessage}: ${errMsg}` })
    }
  }
}
