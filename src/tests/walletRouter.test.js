import request from 'supertest';
import db from '@src/db/models';
import app from '../../src/rest-resources/index'; 
import { WITHDRAWAL_STATUS } from '@src/utils/constants/public.constants';
import {TRANSACTION_PURPOSE} from "../utils/constants/public.constants"


let authToken;
let userId;
let withdrawal;
let id;

beforeAll(async () => {
  // ✅ Step 1: Authenticate an Admin User
  const loginResponse = await request(app)
    .post('/api/v1/admin/login') // Update with actual login route
    .send({
      email: 'superadmin@trueigtech.com',
      password: "YWRtaW4=", // Use actual password
    });

  authToken = loginResponse.body.data.adminUser.accessToken;
  console.log(authToken);

  // ✅ Step 2: Fetch User ID from Database
  const user = await db.User.findOne({ where: { userId: "2" } });
  userId = user.dataValues.userId;
  console.log("userid",userId);

  // ✅ Step 3: Create a Dummy Withdrawal Request
  withdrawal = await db.Withdrawal.create({
    userId: userId,
    amount: 500.75,
    status: WITHDRAWAL_STATUS.PENDING,
    comment: 'Test withdrawal',
  });
id=withdrawal.id;
console.log("id",id)
});

afterAll(async () => {
  // ✅ Cleanup: Delete test withdrawal request & close DB connection
  // await db.Withdrawal.destroy({ where: { id: withdrawal.id } });
  // await db.sequelize.close();
});

describe('✅ Withdrawal Request API Tests', () => {
  // ✅ Test if withdrawal request is created properly
  test('✅ Should create a valid withdrawal request', async () => {
    expect(withdrawal).toBeDefined();
    expect(withdrawal.id).toBeGreaterThan(0);
    expect(withdrawal.status).toBe(WITHDRAWAL_STATUS.PENDING);
    expect(withdrawal.amount).toBe(500.75);
    expect(withdrawal.comment).toBe('Test withdrawal');
    expect(withdrawal.approvedAt).toBeNull();
    expect(withdrawal.confirmedAt).toBeNull();
  });

  // ✅ Test acceptance of a withdrawal request
  test('✅ Should approve a withdrawal request', async () => {
    const response = await request(app)
      .post('/api/v1/wallet/accept-withdraw-request')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ withdrawalId: String(id) });

console.log(response.body)
      expect(response.body.data.success).toBe(true);
      expect(response.body.data.withdrawalRequest.status).toBe(WITHDRAWAL_STATUS.SUCCESS);
      expect(response.body.data.withdrawalRequest.approvedAt).not.toBeNull();
  });

  // ❌ Test when withdrawalId is missing
  test('❌ Should fail if withdrawalId is missing', async () => {
    const response = await request(app)
      .post('/api/v1/wallet/accept-withdraw-request')
      .set('Authorization', `Bearer ${authToken}`)
      .send({});

    expect(response.status).toBe(400);
  });

  // ❌ Test when unauthorized access is attempted
  test('❌ Should fail if unauthenticated', async () => {
    const response = await request(app)
      .post('/api/v1/wallet/accept-withdraw-request')
      .send({ withdrawalId: "3" });

    expect(response.status).toBe(403);
  });

  // ✅ Test rejection of a withdrawal request
  test('✅ Should reject a withdrawal request', async () => {
    // Create a fresh withdrawal request for rejection test
    const newWithdrawal = await db.Withdrawal.create({
      userId: userId,
      amount: 300.50,
      status: WITHDRAWAL_STATUS.PENDING,
      comment: 'Test withdrawal for rejection',
    });

    const response = await request(app)
      .post('/api/v1/wallet/reject-withdraw-request')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ withdrawalId: String(newWithdrawal.id), reason: 'Insufficient balance' });

   
    expect(response.body.data.success).toBe(true);
    expect(response.body.data.withdrawalRequest.status).toBe(WITHDRAWAL_STATUS.CANCELLED);
    expect(response.body.data.withdrawalRequest.comment).toBe('Insufficient balance');

    // Clean up: Delete rejected withdrawal request
    await db.Withdrawal.destroy({ where: { id: newWithdrawal.id } });
  });

  // ❌ Test rejecting a non-existent withdrawal request
  test('❌ Should fail to reject a non-existent withdrawal request', async () => {
    const response = await request(app)
      .post('/api/v1/wallet/reject-withdraw-request')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ withdrawalId: "999999", reason: 'Invalid request' });

    expect(response.body.errors.statusCode).toBe(400); // Not Found
  });




    test('✅ Should fetch withdrawal request details', async () => {
      const response = await request(app)
        .get('/api/v1/wallet/withdraw-request-details')
        .set('Authorization', `Bearer ${authToken}`)
        .query({ withdrawalId:"100" }); // Pass as query param
  
      console.log(response.body); // Debugging
  
      expect(response.status).toBe(200);
      expect(response.body.data.success).toBe(true);
      expect(response.body.data.ledgerEntries).toBeDefined();
    });
  
    test('❌ Should return error if withdrawalId is missing', async () => {
      const response = await request(app)
        .get('/api/v1/wallet/withdraw-request-details')
        .set('Authorization', `Bearer ${authToken}`);
  
      expect(response.status).toBe(500); // Bad request error
      
    });
  
    test('❌ Should return error for non-existent withdrawalId', async () => {
      const response = await request(app)
        .get('/api/v1/wallet/withdraw-request-details')
        .set('Authorization', `Bearer ${authToken}`)
        .query({ withdrawalId: '999999' }); // Use a non-existent ID
  
      expect(response.status).toBe(400); // Not found
     
    });



    test('✅ Should successfully manage wallet (add funds)', async () => {
      const response = await request(app)
        .post('/api/v1/wallet/manage-wallet')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          userId: "2",
          amount: 100.5,
          currencyCode: 'USD',
          purpose: TRANSACTION_PURPOSE.PURCHASE, // Use a valid purpose
        });
  
      console.log(response.body); // Debugging
  
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    }); 
  });



