import request from 'supertest'
import app from '../../src/rest-resources/index' // Ensure this is the entry point of your Express app
import { applicationModule } from '@src/utils/constants/starfManagement.constants'
import CreateVipTierHandler from "../rest-resources/controllers/userEngagement.controller"
import path from 'path';
import fs from 'fs';


describe('User Engagement Router', () => {
  let authToken
  let testImagePath;

  beforeAll(async () => {
    // Authenticate as admin and get a token
    const loginResponse = await request(app)
    .post('/api/v1/admin/login')  // Ensure this matches your login route
    .send({
      email: 'superadmin@trueigtech.com',
      password: "YWRtaW4="  // Use the actual password stored in DB
    });
    authToken = loginResponse.body.data.adminUser.accessToken;
    console.log("token",authToken)


    testImagePath = path.join(__dirname, 'test-image.jpg');

    // Create a dummy image if it doesn't exist
    if (!fs.existsSync(testImagePath)) {
      fs.writeFileSync(testImagePath, 'dummy image content');
    }

  });
  


  describe('GET /spin-wheel-configuration', () => {
    it('should fetch the spin wheel list', async () => {
      const res = await request(app)
        .get('/api/v1/user-engagement/spin-wheel-configuration')
        .set('Authorization', `Bearer ${authToken}`)
      console.log(res.body);

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('data')
    })
  })

  describe('PUT /spin-wheel-configuration', () => {
    it('should update the spin wheel configuration', async () => {
      const res = await request(app)
        .put('/api/v1/user-engagement/spin-wheel-configuration')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          priority: 2,
        gc: 50000,
        sc: 4,
        wheelDivisionId: "1"
        })

      expect(res.status).toBe(200)
      // expect(res.body.message).toBe('Spin wheel updated successfully')
    })
  })

  describe('GET /vip-tier', () => {
    it('should fetch VIP tier details', async () => {
      const res = await request(app)
        .get('/api/v1/user-engagement/vip-tier')
        .query({
          sort: 'ASC',
          orderBy: 'name',
          prioritySupport: false,
          vipTierId: 1
        })
        .set('Authorization', `Bearer ${authToken}`)

        expect(res.status).toBe(200)
        expect(res.body.data).toHaveProperty('success', true)
        expect(res.body.data).toHaveProperty('data')
        expect(res.body.data).toBeInstanceOf(Object) // Ensure data is an object
        expect(res.body.data.data).toHaveProperty('vipTierId', 1)
    })


    // it('should update an existing VIP tier successfully', async () => {
    //   const updatePayload = {
    //     vipTierId: "1",
    //     userId:"1",
    //     name: 'Platinum',
    //     level: 4,
    //     wageringThreshold: 2000,
    //     depositsThreshold:1000,
    //     isActive: true,
    //   };
  
    //   const res = await request(app)
    //     .put('/api/v1/user-engagement/vip-tier/update-user-vip')
    //     .set('Authorization', `Bearer ${authToken}`)
    //     .field('vipTierId', updatePayload.vipTierId)
    //   .field('name', updatePayload.name)
    //   .field("userId",updatePayload.userId,)
    //   .field('level', updatePayload.level)
    //   .field('wageringThreshold', updatePayload.wageringThreshold)
    //   .field('isActive', updatePayload.isActive)
    //   .attach('image', testImagePath);
  
    //   expect(res.status).toBe(200);
    //   expect(res.body).toEqual({ success: true });
  
    //   // Fetch updated data from the database
    //   const updatedVipTier = await db.VipTier.findByPk(vipTier.vipTierId);
  
    //   expect(updatedVipTier.name).toBe('Platinum');
    //   expect(updatedVipTier.level).toBe(4);
    //   expect(updatedVipTier.wageringThreshold).toBe(2000);
    //   expect(updatedVipTier.isActive).toBe(true);
    //   expect(updatedVipTier.icon).toBeDefined();
    // });



  })

  

  

  describe('GET /vip-tier/all', () => {
    it('should fetch all VIP tiers', async () => {
      const res = await request(app)
        .get('/api/v1/user-engagement/vip-tier/all')
        .set('Authorization', `Bearer ${authToken}`)

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('data')
    })
  })


  test('should update user VIP level successfully', async () => {
    const updateData = {
      vipTierId:"2",
      userId: 1,
      level: 3,
      status: true
    }

    const res = await request(app)
      .put('/api/v1/user-engagement/vip-tier/update-user-vip')
      .set('Authorization', `Bearer ${authToken}`)
      .send(updateData)

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('success', true)

    // Verify in DB
    const updatedUser = await db.User.findByPk(userId)
    expect(updatedUser.level).toBe(3)
  })

});




