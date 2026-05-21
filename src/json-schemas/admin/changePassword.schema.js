export const changePasswordSchema = {
  body: {
    type: 'object',
    properties: {
  
      password: {
        type: 'string',
        format: 'password',
        minLength: 8,
        description: 'Password for the admin user account',
      },
      newPassword: {
        type: 'string',
        format: 'password',
        minLength: 8,
        description: 'Password for the admin user account',
      },
      
    },
    required: [
      'newPassword','password'
    ],
  },
};
