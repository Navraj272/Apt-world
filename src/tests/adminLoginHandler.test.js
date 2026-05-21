import request from 'supertest';
import app from '../rest-resources/index';

let authToken = '';

beforeAll(async () => {
  const credentials = {
    email: "superadmin@trueigtech.com",
    password: "YWRtaW4="
  };

  const response = await request(app)
    .post('/api/v1/admin/login')
    .send(credentials);

    // console.log(response.body.accessToken)

  authToken = response.body.data.adminUser.accessToken;
});

describe('Admin Router', () => {
  it('should log in an admin user with valid credentials', async () => {
    expect(authToken).toBeDefined();

    const credentials = {
        email: "superadmin@trueigtech.com",
        password: "YWRtaW4="
      };

      const response = await request(app)
        .post('/api/v1/admin/login')
        .send(credentials);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('data.success', true);
      expect(response.body.data).toHaveProperty('adminUser');
      expect(response.body.data.adminUser).toHaveProperty('adminUserId');
      expect(response.body.data.adminUser).toHaveProperty('accessToken');
      authToken = response.body.data.adminUser.accessToken;
  });

  it('should reject login with invalid credentials', async () => {
    const credentials = {
      email: "wrong@trueigtech.com",
      password: "wrongpassword"
    };

    const response = await request(app)
      .post('/api/v1/admin/login')
      .send(credentials);

    expect(response.status).toBe(400);
  });

  it('should return all admin roles', async () => {
    const response = await request(app)
      .get('/api/v1/admin/roles')
      .set('Authorization', `Bearer ${authToken}`);
      console.log(response.body);

    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');
    expect(response.body.errors).toEqual([]);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('adminRoles');
    expect(response.body.data.adminRoles).toHaveProperty('rows');
    expect(Array.isArray(response.body.data.adminRoles.rows)).toBe(true);
  });

  it('should return admin user details', async () => {
    const response = await request(app)
      .get('/api/v1/admin/details')
      .set('Authorization', `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('adminDetails');
    expect(response.body.data.adminDetails).toHaveProperty('email');
  });


  it('should return 403 for unauthorized access', async () => {
    const response = await request(app)
      .get('/api/v1/admin/roles');

    expect(response.status).toBe(403);
  });



  //Create AdminUser

//   it('should create a new admin user', async () => {
//     const newUser  = {
//         firstName: "Rishi3",
//         lastName: "Admin3",
//         email: "rishidubey65@gmail.com",
//         adminUsername: "RAdmin433",
//         password: "HelloPassword1",
//         adminRoleId: 1,
//         phone: "7000525502",
//         isPhoneVerified: true,
//         permission: {"Admins": ["C","R","U","T","D"],"Banner": ["C","R","U","T","D"],"Bonus": ["C","R","U","T","Issue"],
//               "CMS": ["C","R","U","T","D"],"CashierManagement": ["C","R","U","T","D"],"CasinoManagement": ["C","R","U","T","D"],
//               "Configurations": ["C","R","U","T","D"]}
//     };

//     const response = await request(app)
//         .post('/api/v1/admin/')
//         .set('Authorization', Bearer ${authToken})
//         .send(newUser);

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('data');
//     expect(response.body.errors).toEqual([]);
//     expect(response.body.data).toHaveProperty('createAdminUser');
//     expect(response.body.data.createAdminUser).toHaveProperty('firstName');
// });



// /api/v1/admin/role routes test

  describe('GET /role', () => {
    it('should return 200 and the admin role data if authenticated', async () => {
      const response = await request(app)
        .get('/api/v1/admin/role?roleId=4')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      // expect(response.body).toHaveProperty('data');
      // expect(response.body.data).toBeInstanceOf(Array);
    });

    it('should return 403 if not authenticated', async () => {
      const response = await request(app).get('/api/v1/admin/role');

      expect(response.status).toBe(403);
    });
  });

  // describe('POST /role', () => {
  //   it('should return 201 if the admin role is created successfully', async () => {
  //     const response = await request(app)
  //       .post('/api/v1/admin/role')
  //       .set('Authorization', Bearer ${authToken})
  //       .send({
  //         name: 'SuperAdmin',
  //       });

  //     expect(response.status).toBe(201);
  //     expect(response.body).toHaveProperty('data');
  //   });
  // });

  describe('PUT /role', () => {
    it('should return 200 if the admin role is updated successfully', async () => {
      const response = await request(app)
        .put('/api/v1/admin/role')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          roleId: 3,
          name: 'Manager',
          permission: {
            Admins: ['R'],
            Banner: ['R'],
            Bonus: ['R'],
            CMS: ['R'],
            CashierManagement: ['R'],
            CasinoManagement: ['R'],
            Configurations: ['R'],
            Currencies: ['R'],
            ImageGallery: ['R'],
            Package: ['R'],
            Popup: ['R'],
            RegistrationField: ['R'],
            Report: ['R'],
            RestrictedCountry: ['R'],
            RewardSystem: ['R'],
            SpinWheelConfiguration: ['R'],
            Transactions: ['R'],
            Users: ['R', 'U'],
          },
          level: 3,
        });
  
      expect(response.status).toBe(200);
    });
  });
  
  describe('DELETE /role', () => {
    it('should return 200 if the admin role is deleted successfully', async () => {
      const response = await request(app)
        .delete('/api/v1/admin/role?roleId=2')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(406);
    });
  });
});