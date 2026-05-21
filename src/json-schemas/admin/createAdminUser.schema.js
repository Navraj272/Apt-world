export const createAdminUserSchema = {
  body: {
    type: 'object',
    properties: {
      parentId: { type: 'number' },
      firstName: {
        type: 'string',
        minLength: 3,
        maxLength: 50,
        description: 'First name of the admin user',
      },
      lastName: {
        type: 'string',
        minLength: 3,
        maxLength: 50,
        description: 'Last name of the admin user',
      },
      email: {
        type: 'string',
        maxLength: 150,
        format: 'email',
        description: 'Email address of the admin user',
      },
      adminUsername: {
        type: 'string',
        minLength: 3,
        maxLength: 50,
        description: 'Unique username for the admin user',
      },
      password: {
        type: 'string',
        format: 'password',
        minLength: 8,
        description: 'Password for the admin user account',
      },
      adminRoleId: {
        type: 'integer',
        description: 'ID of the admin role to assign',
      },
      authenticatedAdminId: { type: 'integer', },
      permission: {
        type: 'object',
        description: 'Permissions for the admin user',
      },
    },
    required: [
      'firstName',
      'lastName',
      'email',
      'adminUsername',
      'password',
      'adminRoleId',
      'permission',
    ],
  },
};
