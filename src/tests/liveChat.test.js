





import request from 'supertest';
import app from '../../src/rest-resources/index'; // Import Express app
import db from '@src/db/models'; // Import database models

let authToken;
let existingChatGroup;
let globalChatGroup;
let createdChatRain;
let testCreatedGroupId = null; // Store dynamically created test group ID

beforeAll(async () => {
  // ✅ Authenticate an Admin User (Replace credentials as needed)
  const loginResponse = await request(app)
  .post('/api/v1/admin/login')  // Ensure this matches your login route
  .send({
    email: 'superadmin@trueigtech.com',
    password: "YWRtaW4="  // Use the actual password stored in DB
  });

  authToken = loginResponse.body.data.adminUser.accessToken;
  if (!authToken) throw new Error("Test setup failed: No auth token received.");

  // ✅ Create an existing chat group for duplicate group test
  existingChatGroup = await db.ChatGroup.create({
    name: "existinggroup",
    description: "This is an existing test chat group",
    status: true,
    isGlobal: false,
  });
  console.log("chat group id",existingChatGroup);

  // ✅ Create a global chat group for global group conflict test
  globalChatGroup = await db.ChatGroup.create({
    name: "globalgroup",
    description: "Global Chat Group",
    status: true,
    isGlobal: true,
  });
});

afterEach(async () => {
  // ✅ If a test creates a chat group, delete it after test completion
  if (testCreatedGroupId) {
    await db.ChatGroup.destroy({
      where: { id: testCreatedGroupId },
      force: true, // Ensures permanent deletion
    });
    testCreatedGroupId = null; // Reset for next test
  }
});

afterAll(async () => {
  // ✅ Cleanup: Delete only the test groups created in `beforeAll`


  if (createdChatRain) {
    await db.ChatRain.destroy({ where: { id: createdChatRain.id }, force: true });
  }

  await db.ChatGroup.destroy({
    where: { id: testCreatedGroupId },
    force: true, // Ensures permanent deletion
  });

  // ✅ Close DB connection
  await db.sequelize.close();
});

describe('✅ Create Chat Group API Tests', () => {
  test('✅ Should successfully create a chat group', async () => {
    const response = await request(app)
      .post('/api/v1/live-chat/create-group')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        name: "tetup",
        description: "Test group for live chat",
        status: true,
        criteria: [],
        isGlobal: false,
      });

    expect(response.status).toBe(200);
    expect(response.body.data.group).toBeDefined();
    // expect(response.body.data.group.name).toBe("testgroup");

    // ✅ Store created group ID for cleanup
    testCreatedGroupId = response.body.data.group.id;
  });

  test('❌ Should fail if group already exists', async () => {
    const response = await request(app)
      .post('/api/v1/live-chat/create-group')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        name: existingChatGroup.name, // Using the chat created in beforeAll
        description: "Duplicate",
        status: true,
        criteria: [],
        isGlobal: false,
      });

    expect(response.status).toBe(400);
    expect(response.body.errors.message).toBe("Group Already Exists");
  });


  test('✅ Should successfully update a chat group', async () => {
    const response = await request(app)
      .put('/api/v1/live-chat/update-group')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        chatGroupId: 1 ,
        name: "updatedGroup",
        description: "Updated group description",
        status: false,
        criteria: [],
        isGlobal: false
      });

    expect(response.status).toBe(200);
    // expect(response.body.data).toHaveProperty("message");
  });


  test('✅ Should retrieve all chat groups with pagination', async () => {
    const response = await request(app)
      .get('/api/v1/live-chat/get-group')
      .set('Authorization', `Bearer ${authToken}`)
      .query({ pageNo: 1, limit: 10 });

    expect(response.status).toBe(200);
    expect(response.body.data.groups).toBeInstanceOf(Array);
    expect(response.body.data.totalPages).toBeGreaterThanOrEqual(1);
  });


  test('✅ Should filter users by search query', async () => {
    const response = await request(app)
      .get('/api/v1/live-chat/get-group-users')
      .set('Authorization', `Bearer ${authToken}`)
      .query({ chatGroupId: 1, search: 'testuser1' });

    expect(response.status).toBe(200);
    expect(response.body.users.length).toBe(1);
    expect(response.body.users[0].username).toBe("testuser1");
  });

  //apihelper problem

  test('✅ Should retrieve user messages in a chat group', async () => {
    const response = await request(app)
      .get('/api/v1/live-chat/get-user-chats')
      .set('Authorization', `Bearer ${authToken}`)
      .query({ chatGroupId: 1, userId: 1, pageNo: 1, limit: 10 });

    expect(response.status).toBe(200);
    expect(response.body.data.records).toBeInstanceOf(Array);
    expect(response.body.data.records.length).toBeGreaterThanOrEqual(1);
  });

  //message_binary problem

  test('✅ Should retrieve reported users', async () => {
    const response = await request(app)
      .get('/api/v1/live-chat/get-reported-user')
      .set('Authorization', `Bearer ${authToken}`)
      .query({ pageNo: 1, limit: 10 });

    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Object);

  });


  test('✅ Should successfully create a Chat Rain event', async () => {
    const response = await request(app)
      .post('/api/v1/live-chat/create-chat-rain')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        name: "Bonus Rain",
        description: "Special bonus event",
        prizeMoney: 500,
        currency: String(1), // Assuming currency 1 exists
        chatGroupId: Number(1)
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("id");
    expect(response.body.data.name).toBe("Bonus Rain");

    createdChatRain = response.body.data; // Store for cleanup
  });


  

  
});
