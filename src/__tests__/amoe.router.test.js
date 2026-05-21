import request from 'supertest';
import app from '../rest-resources/index';

let authToken = '';

/**
 * @description Before all tests, log in as an admin to get an authentication token.
 */
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

describe('AMOE Router', () => {
  describe('GET /faucet', () => {
    /**
     * @description Tests retrieving faucet data when authenticated.
     * @returns {200} Success - Returns faucet data.
     */
    it('should return 200 and the faucet data if authenticated', async () => {
      const response = await request(app)
        .get('/api/v1/amoe/faucet')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
    });

    /**
     * @description Tests accessing faucet data without authentication.
     * @returns {403} Forbidden - Missing authentication token.
     */
    it('should return 403 if not authenticated', async () => {
      const response = await request(app).get('/api/v1/amoe/faucet');

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toHaveProperty('error', 'UnAuthorize');
      expect(response.body.errors).toHaveProperty('message', 'Unauthorized ');
      expect(response.body.errors).toHaveProperty('code', 3018);
    });
  });

  describe('PUT /faucet', () => {
    /**
     * @description Tests setting faucet data when authenticated.
     * @returns {200} Success - Faucet set successfully.
     */
    it('should return 200 if the faucet is set successfully', async () => {
      const faucet_data = {
        GC: 400,
        SC: 0.66,
        interval: 24
      };

      const response = await request(app)
        .put('/api/v1/amoe/faucet')
        .set('Authorization', `Bearer ${authToken}`)
        .send(faucet_data);

      expect(response.status).toBe(200);
    });

    /**
     * @description Tests setting faucet data without authentication.
     * @returns {403} Forbidden - Missing authentication token.
     */
    it('should return 403 if not authenticated', async () => {
      const response = await request(app).put('/api/v1/amoe/faucet');

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toHaveProperty('error', 'UnAuthorize');
      expect(response.body.errors).toHaveProperty('message', 'Unauthorized ');
      expect(response.body.errors).toHaveProperty('code', 3018);
    });
  });

  describe('PUT /postcode/request', () => {
    /**
     * @description Tests updating postal code request status without authentication.
     * @returns {403} Forbidden - Missing authentication token.
     */
    it('should return 403 if not authenticated', async () => {
      const response = await request(app).put('/api/v1/amoe/postcode/request');

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toHaveProperty('error', 'UnAuthorize');
      expect(response.body.errors).toHaveProperty('message', 'Unauthorized ');
      expect(response.body.errors).toHaveProperty('code', 3018);
    });
  });

  describe('GET /postcode/request', () => {
    /**
     * @description Tests retrieving postal code request list without authentication.
     * @returns {403} Forbidden - Missing authentication token.
     */
    it('should return 403 if not authenticated', async () => {
      const response = await request(app).get('/api/v1/amoe/postcode/request');

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty('errors');
      expect(response.body.errors).toHaveProperty('error', 'UnAuthorize');
      expect(response.body.errors).toHaveProperty('message', 'Unauthorized ');
      expect(response.body.errors).toHaveProperty('code', 3018);
    });
  });
});
