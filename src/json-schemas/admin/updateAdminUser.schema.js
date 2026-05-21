export const updateAdminUserSchema = {
  body: {
    type: 'object',
    properties: {
      adminUserId: { type: 'number' },
      user: { type: 'object' },
      id: { type: 'integer' },
      firstName: {
        type: 'string',
        minLength: 3,
        maxLength: 50
      },
      lastName: {
        type: 'string',
        minLength: 3,
        maxLength: 50
      },
      email: {
        type: 'string',
        maxLength: 150,
        format: 'email'
      },
      adminUsername: { type: 'string' },
      group: { type: 'string' },
      permission: { type: 'object' },
      isActive: { type: 'boolean' }
    },
    required: ['id', 'adminUserId', 'firstName', 'lastName', 'email', 'permission']
  }
}
