import request from 'supertest';
import app from '../rest-resources/index';

const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, './pic/leo.jpg');
if (!fs.existsSync(filePath)) {
  throw new Error('Test image file not found');
}

let authToken = '';

beforeAll(async () => {
  const credentials = {
    email: "superadmin@trueigtech.com",
    password: "YWRtaW4="
  };

  const response = await request(app)
    .post('/api/v1/admin/login')
    .send(credentials);

  authToken = response.body.data.adminUser.accessToken;
});

// describe('Package Router', () => {
//   describe('POST /', () => {
//     it('should create a package and return 200 if authenticated', async () => {
//       const response = await request(app)
//       .post('/api/v1/package/')
//       .set('Authorization', `Bearer ${authToken}`)
//       .set('Content-Type', 'multipart/form-data')
//       .field('label', 'Test Package 1')
//       .field('amount', '9.99')
//       .field('gcCoin', '10')
//       .field('scCoin', '1000')
//       .field('discountAmount', '50')
//       .attach('file', filePath)
//       .field('welcomePackage', 'true')
//       .field('isVisibleInStore', 'true')
//       .field('maxPurchasePerUser', '1');

//     expect(response.status).toBe(200);
//   });


//   it('should return 403 if not authenticated', async () => {
//     const response = await request(app)
//       .post('/api/v1/packages')
//       .attach('file', 'path/to/your/test/file.zip') // Adjust the path to your test file
//       .send({ /* your request body here */ });

//     expect(response.status).toBe(403);
//     expect(response.body).toHaveProperty('errors');
//     expect(response.body.errors).toHaveProperty('error', 'UnAuthorize');
//     expect(response.body.errors).toHaveProperty('message', 'Unauthorized ');
//     expect(response.body.errors).toHaveProperty('code', 3018);
//   });
// });

// describe('PUT /', () => {
//   it('should update a package and return 200 if authenticated', async () => {
//     const response = await request(app)
//       .put('/api/v1/packages')
//       .set('Authorization', `Bearer ${authToken}`)
//       .attach('file', 'path/to/your/test/file.zip') // Adjust the path to your test file
//       .send({ /* your request body here */ });

//     expect(response.status).toBe(200);
//     // Add more assertions based on the expected response structure
//   });

//   it('should return 403 if not authenticated', async () => {
//     const response = await request(app)
//       .put('/api/v1/packages')
//       .attach('file', 'path/to/your/test/file.zip') // Adjust the path to your test file
//       .send({ /* your request body here */ });

//     expect(response.status).toBe(403);
//     expect(response.body).toHaveProperty('errors');
//     expect(response.body.errors).toHaveProperty('error', 'UnAuthorize');
//     expect(response.body.errors).toHaveProperty('message', 'Unauthorized ');
//     expect(response.body.errors).toHaveProperty('code', 3018);
//   });
// });

// describe('DELETE /', () => {
//   it('should delete a package and return 204 if authenticated', async () => {
//     const response = await request(app)
//       .delete('/api/v1/packages')
//       .set('Authorization', `Bearer ${authToken}`)
//       .send({ /* your request body here */ });

//     expect(response.status).toBe(204);
//     // Add more assertions based on the expected response structure
//   });

//   it('should return 403 if not authenticated', async () => {
//     const response = await request(app)
//       .delete('/api/v1/packages')
//       .send({ /* your request body here */ });

//     expect(response.status).toBe(403);
//     expect(response.body).toHaveProperty('errors');
//     expect(response.body.errors).toHaveProperty('error', 'UnAuthorize');
//     expect(response.body.errors).toHaveProperty('message', 'Unauthorized ');
//     expect(response.body.errors).toHaveProperty('code', 3018);
//   });
// });

// describe('GET /', () => {
//   it('should return 200 and the package data if authenticated', async () => {
//     const response = await request(app)
//       .get('/api/v1/packages')
//       .set('Authorization', `Bearer ${authToken}`);

//     expect(response.status).toBe(200);
//     // Add more assertions based on the expected response structure
//   });

//   it('should return 403 if not authenticated', async () => {
//     const response = await request(app).get('/api/v1/packages');

//     expect(response.status).toBe(403);
//     expect(response.body).toHaveProperty('errors');
//     expect(response.body.errors).toHaveProperty('error', 'UnAuthorize');
//     expect(response.body.errors).toHaveProperty('message', 'Unauthorized ');
//     expect(response.body.errors).toHaveProperty('code', 3018);
//   });
// });

// describe('GET /all', () => {
//   it('should return 200 and all packages if authenticated', async () => {
//     const response = await request(app)
//       .get('/api/v1/packages/all')
//       .set('Authorization', `Bearer ${authToken}`);

//     expect(response.status).toBe(200);
//     // Add more assertions based on the expected response structure
//   });

//   it('should return 403 if not authenticated', async () => {
//     const response = await request(app).get('/api/v1/packages/all');

//     expect(response.status).toBe(403);
//     expect(response.body).toHaveProperty('errors');
//     expect(response.body.errors).toHaveProperty('error', 'UnAuthorize');
//     expect(response.body.errors).toHaveProperty('message', 'Unauthorized ');
//     expect(response.body.errors).toHaveProperty('code', 3018);
//   });
// });

// describe('PUT /reorder', () => {
//   it('should reorder packages and return 200 if authenticated', async () => {
//     const response = await request(app)
//       .put('/api/v1/packages/reorder')
//       .set('Authorization', `Bearer ${authToken}`)
//       .send({ /* your request body here */ });

//       expect(response.status).toBe(200);
//       // Add more assertions based on the expected response structure
//     });

//     it('should return 403 if not authenticated', async () => {
//       const response = await request(app)
//         .put('/api/v1/packages/reorder')
//         .send({ /* your request body here */ });

//       expect(response.status).toBe(403);
//       expect(response.body).toHaveProperty('errors');
//       expect(response.body.errors).toHaveProperty('error', 'UnAuthorize');
//       expect(response.body.errors).toHaveProperty('message', 'Unauthorized ');
//       expect(response.body.errors).toHaveProperty('code', 3018);
//     });
// });
