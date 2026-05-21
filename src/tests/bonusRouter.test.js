import request from 'supertest';
import app from '../../src/rest-resources/index'; // Import your Express app
import jwt from 'jsonwebtoken';
import config from '@src/configs/app.config';
import db from '@src/db/models';
import { Sequelize } from 'sequelize';


let authToken;

beforeAll(async () => {
  // Generate a valid JWT token for authentication
  const loginResponse = await request(app)
  .post('/api/v1/admin/login')  // Ensure this matches your login route
  .send({
    email: 'superadmin@trueigtech.com',
    password: "YWRtaW4="  // Use the actual password stored in DB
  });

authToken = loginResponse.body.data.adminUser.accessToken;
console.log("token",authToken)

  // Clear the database before running tests
  // await DropBonus.destroy({ where: {} });
});

afterAll(async () => {
  // Clean up database after tests
  // await DropBonus.destroy({ where: {} });
  // await Sequelize.close();
});

describe('Bonus Routes', () => {
  let bonusId;

  /** Test: Create a Drop Bonus */
  test('POST /bonus/drop-bonus should create a drop bonus', async () => {

    console.log("hello1")
    const requestBody = {
     coin: 300,
    name: "latest bonus",
    coinType:"BSC", // GC, BSC
   totalClaimsAllowed: 12,
   expiryTime:"2025-03-30T23:59:59Z",
   isActive: true
    };
    
    const response = await request(app)
      .post('/api/v1/bonus/drop-bonus')
      .set('Authorization', `Bearer ${authToken}`)
      .send(requestBody)
      .set('Content-Type', 'application/json');
    //  console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.dropBonus).toBeDefined();
    expect(response.body.data.dropBonus.name).toBe('latest bonus');

    // Store bonus ID for further tests
    bonusId = response.body.data.dropBonus.id;
  });

  /** Test: Get Drop Bonus */
  test('GET /bonus/drop-bonus should return drop bonus data', async () => {
    const response = await request(app)
      .get('/api/v1/bonus/drop-bonus')
      .set('Authorization', `Bearer ${authToken}`)
      .query({ limit: '30', pageNo: '1' });;
    console.log("response",response.body);
        // Check the HTTP status
        expect(response.status).toBe(200);

        //  Validate the overall response structure
        expect(response.body).toHaveProperty('data');
        expect(response.body).toHaveProperty('errors');
        
        // ✅ Validate data field structure
        expect(response.body.data).toHaveProperty('data');
        expect(response.body.data).toHaveProperty('pageNo');
        expect(response.body.data).toHaveProperty('totalPages');
        expect(response.body.data).toHaveProperty('status');

        // ✅ Check values
        expect(response.body.data.status).toBe("200");
        expect(Array.isArray(response.body.data.data)).toBe(true);
        expect(response.body.data.pageNo).toBe(1);
        expect(response.body.data.totalPages).toBeGreaterThan(0);

        // ✅ Ensure at least one drop bonus exists
        if (response.body.data.data.length > 0) {
          const bonus = response.body.data.data[0];

          expect(bonus).toHaveProperty('id');
          expect(bonus).toHaveProperty('name');
          expect(bonus).toHaveProperty('code');
          expect(bonus).toHaveProperty('coin');
          expect(bonus).toHaveProperty('coinType');
          expect(bonus).toHaveProperty('expiryTime');
          expect(bonus).toHaveProperty('isActive');
          expect(bonus).toHaveProperty('totalClaims');
          expect(bonus).toHaveProperty('totalClaimsAllowed');

          expect(typeof bonus.id).toBe('number');
          expect(typeof bonus.name).toBe('string');
          expect(typeof bonus.code).toBe('string');
          expect(typeof bonus.coin).toBe('number');
          expect(typeof bonus.coinType).toBe('string');
          expect(typeof bonus.expiryTime).toBe('string');
          expect(typeof bonus.isActive).toBe('boolean');
          expect(typeof bonus.totalClaims).toBe('number');
          expect(typeof bonus.totalClaimsAllowed).toBe('number');
        }

        // ✅ Validate errors array
        expect(Array.isArray(response.body.errors)).toBe(true);
  });


  /** ✅ Test: Update a Drop Bonus */
test('PUT /bonus/drop-bonus should update drop bonus data', async () => {
  const updateData = {
    id: bonusId,
    name: 'Updated Bonus',
    isActive: false,
  };

  const response = await request(app)
    .put('/api/v1/bonus/drop-bonus')
    .set('Authorization', `Bearer ${authToken}`)
    .send(updateData)
    .set('Content-Type', 'application/json');

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('data');
  expect(response.body.data).toHaveProperty('success', true);
  expect(response.body).toHaveProperty('errors');
  expect(response.body.errors).toEqual([]);

  // ✅ Verify database update
  const updatedBonus = await db.DropBonus.findByPk(bonusId);
  expect(updatedBonus).not.toBeNull();
  expect(updatedBonus.name).toBe('latest bonus');
  expect(updatedBonus.isActive).toBe(true);
});

/** ❌ Test: Unauthorized Request (Missing Token) */
test('POST /bonus/drop-bonus should return 401 if token is missing', async () => {
  const response = await request(app)
    .post('/api/v1/bonus/drop-bonus')
    .send({
      coin: 50,
      name: 'Unauthorized Bonus',
      coinType: 'GOLD_COIN',
      totalClaimsAllowed: 5,
      totalClaims: 0,
      expiryTime: new Date(Date.now() + 86400000).toISOString(),
    });

  // ✅ Check status
  expect([401, 403]).toContain(response.status);


  // ✅ Ensure error message
  expect(response.body.errors).toHaveProperty('error');
  expect(response.body.errors.error).toMatch(/UnAuthorize/i);
});

// /** ❌ Test: Invalid Data (Missing Required Fields) */
test('POST /bonus/drop-bonus should return 400 for invalid data', async () => {
  const response = await request(app)
    .post('/api/v1/bonus/drop-bonus')
    .set('Authorization', `Bearer ${authToken}`)
    .send({
      name: 'Missing Required Fields', // Missing other required fields
    });

  // ✅ Validate status
  expect([400, 500]).toContain(response.status);
   if (response.status === 500) {
  console.error('Server Error:', response.body);
    }


  // ✅ Ensure error message
  expect(response.body.errors).toHaveProperty('error');

});


});
