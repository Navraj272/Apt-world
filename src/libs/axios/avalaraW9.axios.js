import axios from 'axios'
import config from '@src/configs/app.config'
import { Logger } from '@src/libs/logger'
import { getCache, setCache } from '@src/libs/redis'
import { TIN_MATCH_STATUS } from '@src/utils/constants/public.constants'

const REDIS_TOKEN_KEY = 'avalara_access_token'

export class W9Service {
  // -----------------------------
  // PRIVATE: Get Axios Client
  // -----------------------------
  static async #getAvalaraClient () {
    const token = await this.#getAvalaraAccessToken()

    if (!token) throw new Error('Avalara authentication failed')

    return axios.create({
      baseURL: config.get('avalara1099.baseUrl'),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'avalara-version': '2.0.0'
        // 'X-Correlation-Id': config.get()

      },
      timeout: 15000
    })
  }

  // -----------------------------
  // PRIVATE: Get Access Token
  // -----------------------------
  static async #getAvalaraAccessToken (forceRefresh = false) {
    try {
      if (!forceRefresh) {
        const cached = await getCache(REDIS_TOKEN_KEY)
        if (cached && typeof cached === 'string' && cached.trim() !== '' && cached !== '{}') {
          return cached
        }
      }

      const baseUrl = config.get('avalara1099.baseUrl')

      const identityUrl =
        baseUrl.includes('sandbox') || baseUrl.includes('sbx')
          ? 'https://identity.sbx.avalara.com'
          : 'https://identity.avalara.com'

      const response = await axios.post(
            `${identityUrl}/connect/token`,
            new URLSearchParams({
              grant_type: 'client_credentials',
              client_id: config.get('avalara1099.clientId'),
              client_secret: config.get('avalara1099.clientSecret')
            }),
            {
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              timeout: 20000
            }
      )

      const { access_token: token, expires_in: expiresIn } = response.data

      await setCache(REDIS_TOKEN_KEY, token, expiresIn - 60)

      return token
    } catch (error) {
      Logger.error(error, 'Avalara authentication failed')
      return null
    }
  }

  // -----------------------------
  // CREATE W9 (MAIN METHOD)
  // -----------------------------
  static async createW9 (payload, userId, referenceId) {
    try {
      const client = await this.#getAvalaraClient()
      const companyId = config.get('avalara1099.companyId')

      if (!companyId) {
        throw new Error('Avalara companyId is not configured')
      }

      // Normalize payload (whitelist fields only)
      const requestBody = {
        type: 'W9',

        // user fields
        name: payload.name,
        businessName: payload.businessName || null,
        businessClassification: payload.businessClassification,
        businessOther: payload.businessClassification === 'Other' ? payload.businessOther : null,
        address: payload.address,
        city: payload.city,
        state: payload.state,
        zip: payload.zip,
        tinType: payload.tinType,
        tin: payload.tin,
        email: payload.email,
        signature: payload.signature,

        // system fields
        companyId,
        referenceId,
        eDeliveryConsentedAt: payload.eDeliveryConsent
          ? new Date().toISOString().replace(/\.(\d{3})Z$/, '.$1000')
          : null,

        // defaults
        is1099able: true,
        backupWithholding: false,
        foreignPartnerOwnerOrBeneficiary: false,
        foreignCountryIndicator: false
      }

      const response = await client.post('/avalara1099/w9/forms', requestBody)

      return response.data
    } catch (error) {
      Logger.error(error, `W9 creation failed for userId: ${userId}`)
      throw error
    }
  }

  // -----------------------------
  // GET W9 FORM (STATUS)
  // -----------------------------
  static async getW9Form (formId) {
    try {
      const client = await this.#getAvalaraClient()

      const response = await client.get(`/avalara1099/w9/forms/${formId}`)

      return response.data
    } catch (error) {
      Logger.error(error, `Failed to fetch W9 form: ${formId}`)
      throw error
    }
  }

  // -----------------------------
  // SYNC STATUS (helper)
  // -----------------------------
  static async getW9StatusSummary (formId) {
    const data = await this.getW9Form(formId)

    return {
      entryStatus: data.entryStatus?.status || 'unknown',
      tinMatchStatus: data.tinMatchStatus?.status || TIN_MATCH_STATUS.PENDING
    }
  }

  // -----------------------------
  // GET ALL W9 FORMS (OData pagination)
  // -----------------------------
  static async getAllW9FormsPaginated () {
    try {
      const client = await this.#getAvalaraClient()

      let url = '/avalara1099/w9/forms'
      const allForms = []

      while (url) {
        const response = await client.get(url)
        const data = response.data

        if (Array.isArray(data?.value)) {
          allForms.push(...data.value)
        }

        // Avalara OData pagination
        const nextLink = data['@nextLink']

        if (nextLink && nextLink.trim() !== '') {
          url = nextLink
        } else {
          url = null
        }
      }

      return allForms
    } catch (error) {
      Logger.error(error, 'Failed to fetch paginated W9 forms')
      throw error
    }
  }
}
