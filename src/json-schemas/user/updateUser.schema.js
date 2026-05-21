export const updateUserSchema={
    body: {
        type: 'object',
        properties: {
          userId: {
            type: ['number','string']
          },
          firstName: {
            type: ['string', 'null']
          },
          lastName: {
            type: ['string', 'null']
          },
          email: {
            type: 'string'
          },
          phone: {
            type: ['string', 'null']
          },
          phoneCode: {
            type: ['string', 'null']
          },
          gender: {
            enum: ['Female', 'Male', 'F', 'M', 'Not to say', 'Other', 'null']
          },
          dateOfBirth: {
            type: ['string', 'null']
          },
          userName: {
            type: 'string'
          },
          countryCode: {
            type: ['string', 'null']
          },
          city: {
            type: ['string', 'null']
          },
          stateCode: {
            type: ['string', 'null']
          },
          // zipCode: {
          //   type: ['string', 'null']
          // },
          locale: {
            type: ['string', 'null']
          },
          address: {
            type: ['string', 'null']
          },
          // newsLetter: {
          //   type: 'boolean'
          // },
          // sms: {
          //   type: 'boolean'
          // }
          postalCode: {
            type: ['string']
          },
          isActive: {
            type: 'boolean',
            default: false
          },
          ssn: { type: "string" },
        },
        required: ['userId']
    }
}