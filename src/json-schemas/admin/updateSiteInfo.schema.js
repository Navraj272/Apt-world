export const updateSiteInfoSchema = {
  body: {
    type: 'object',
    properties: {
      siteName: { type: 'string'},
      web: { type: 'string' },
      mobile: { type: 'string' },
      supportEmail: { type: 'string' },
      contactNumber: {type: 'number'},
      termsUrl: { type: 'string'},
      privacyPolicyUrl: { type: 'string' }
    }
  }
}