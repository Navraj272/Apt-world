import request from "supertest";
import app from "../../src/rest-resources/index"
import db from "@src/db/models";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

let adminToken;
let userId;


describe("✅ GET /api/v1/user/all - Fetch Users", () => {
  beforeAll(async () => {


    const loginResponse = await request(app)
    .post('/api/v1/admin/login')  // Ensure this matches your login route
    .send({
      email: 'superadmin@trueigtech.com',
      password: "YWRtaW4="  // Use the actual password stored in DB
    });
  
  adminToken = loginResponse.body.data.adminUser.accessToken;
  console.log("token",adminToken)

  const user = await db.User.create({
    email: "testuser@example.com",
    username: "testuser",
    password:"12345",
    isEmailVerified: false,
    level: 0,
  });
  userId = user.userId;
 
    
  });

  test("✅ Should fetch all users with pagination", async () => {
    const response = await request(app)
      .get("/api/v1/user/all")
      .set('Authorization', `Bearer ${adminToken}`)
      .query({ pageNo: 1, limit: 10 })
      .set('Content-Type', 'application/json')
      .expect(200);

    // Validate API response structure
    expect(response.body.data).toHaveProperty("users");
    expect(response.body.data).toHaveProperty("pageNo", 1);
    expect(response.body.data).toHaveProperty("totalPages");
    // expect(response.body.data.users.length).toBeGreaterThan(0);
  });

   test("✅ Should fetch referred users and total commission", async () => {
    const response = await request(app)
    .get("/api/v1/user/referrals")
    .set('Authorization', `Bearer ${adminToken}`)
    .query({ userId: "1", pageNo: 1, limit: 10 })
    .set('Content-Type', 'application/json')
    .expect(200);

  // Validate response structure
  expect(response.body.data).toHaveProperty("referredUsers");
  expect(response.body.data).toHaveProperty("pageNo", 1);
  expect(response.body.data).toHaveProperty("totalPages");

});

 


//   test("✅ Should fetch user details with wallet and transaction summary", async () => {
//     const response = await request(app)
//       .get(`/api/v1/user/`)
//       .query({ userId: "1" })
//       .set('Authorization', `Bearer ${adminToken}`)
//       .expect(200)
//       .set('Content-Type', 'application/json');

//     // Validate response structure
//     expect(response.body.data).toHaveProperty("getUser");
//     // expect(response.body.data).toHaveProperty("username");
//     // expect(response.body.data).toHaveProperty("userWallet");
//     // expect(response.body.data).toHaveProperty("userDetails");

//     // Validate wallet
//     // expect(response.body.getUser.userWallet.balance).toBe(500);

//     // Validate transactions
//     // expect(response.body.getUser.totalScPurchase).toBe(100);
//     // expect(response.body.getUser.totalScRedeemed).toBe(50);
//   });


  test("✅ PUT /api/v1/user/ - Update user details", async () => {
    const response = await request(app)
      .put("/api/v1/user/")
      .set("Authorization", `Bearer ${adminToken}`)
      .send({ username: "updatedUser",userId:Number(userId) })
      .expect(200);

    expect(response.body.data).toHaveProperty("success", true);
  });

  test("✅ PUT /api/v1/user/status - Toggle user status", async () => {
    const response = await request(app)
      .put("/api/v1/user/status")
      .set("Authorization", `Bearer ${adminToken}`)
      .send({ userId:Number(userId), status: "active" })
      .expect(200);

    expect(response.body.data).toHaveProperty("success", true);
  });

//   test("✅ POST /api/v1/user/daily-limit - Set daily limit", async () => {
//     const response = await request(app)
//       .post("/api/v1/user/daily-limit")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({ userId:Number(userId), limit: 500,currencyCode: , dailyLimit: , timePeriod:})
//       .expect(200);

//     expect(response.body.data).toHaveProperty("success", true);
//   });

//   test("✅ POST /api/v1/user/loss-limit - Set loss limit", async () => {
//     const response = await request(app)
//       .post("/api/v1/user/loss-limit")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({ userId, limit: 200 })
//       .expect(200);

//     expect(response.body).toHaveProperty("success", true);
//   });

//   test("✅ PUT /api/v1/user/verify-email - Verify user email", async () => {
//     const response = await request(app)
//       .put("/api/v1/user/verify-email")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({ userId })
//       .expect(200);

//     expect(response.body).toHaveProperty("success", true);
//   });

//   test("✅ PUT /api/v1/user/update-password - Update password", async () => {
//     const response = await request(app)
//       .put("/api/v1/user/update-password")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({ userId, newPassword: "newPassword123" })
//       .expect(200);

//     expect(response.body).toHaveProperty("success", true);
//   });

//   test("✅ PUT /api/v1/user/reset-password - Reset password", async () => {
//     const response = await request(app)
//       .put("/api/v1/user/reset-password")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({ email: "testuser@example.com" ,userId:userId})
//       .expect(200);

//     expect(response.body).toHaveProperty("success", true);
//   });

//   test("✅ GET /api/v1/user/duplicate - Get duplicate users", async () => {
//     const response = await request(app)
//       .get("/api/v1/user/duplicate")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .expect(200);

//     expect(response.body).toHaveProperty("data");
//   });

//   test("✅ POST /api/v1/user/comment - Add comment", async () => {
//     const response = await request(app)
//       .post("/api/v1/user/comment")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({ userId, comment: "Test comment" })
//       .expect(200);

//     expect(response.body).toHaveProperty("success", true);
//   });

//   test("✅ GET /api/v1/user/comments - Get user comments", async () => {
//     const response = await request(app)
//       .get("/api/v1/user/comments")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .expect(200);

//     expect(response.body).toHaveProperty("data");
//   });

//   test("✅ PUT /api/v1/user/comment-status - Update comment status", async () => {
//     const response = await request(app)
//       .put("/api/v1/user/comment-status")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({ commentId: 1, status: "approved" })
//       .expect(200);

//     expect(response.body).toHaveProperty("success", true);
//   });

//   test("✅ PUT /api/v1/user/self-exclusion - Update self-exclusion", async () => {
//     const response = await request(app)
//       .put("/api/v1/user/self-exclusion")
//       .set("Authorization", `Bearer ${adminToken}`)
//       .send({ userId, excludedUntil: "2025-12-31" })
//       .expect(200);

//     expect(response.body).toHaveProperty("success", true);
//   });


afterAll(async () => {
    // await db.User.destroy({ where: {} }); // Cleanup test data
    
  });

});


