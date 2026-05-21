import { permissions } from '@src/utils/constants/starfManagement.constants';
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

describe('Admin Router', () => {
  /**
   * @description Tests admin login with valid credentials.
   * @returns {200} Success - Returns access token.
   */
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

  /**
   * @description Tests login with invalid credentials.
   * @returns {400} Bad Request - Invalid credentials.
   */
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

  /**
  * @description Tests retrieving all admin roles.
  * @returns {200} Success - Returns list of admin roles.
  */
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

  /**
   * @description Tests retrieving admin user details.
   * @returns {200} Success - Returns admin user details.
   */
  it('should return admin user details', async () => {
    const response = await request(app)
      .get('/api/v1/admin/details')
      .set('Authorization', `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('adminDetails');
    expect(response.body.data.adminDetails).toHaveProperty('email');
  });

  /**
  * @description Tests accessing admin role without authentication.
  * @returns {403} Forbidden - Missing authentication token.
  */
  it('should return 403 for unauthorized access', async () => {
    const response = await request(app)
      .get('/api/v1/admin/roles');

    expect(response.status).toBe(403);
  });

  describe('GET /role', () => {
    /**
     * @description Tests retrieving an admin role by role ID.
     * @returns {200} Success - Returns admin role details.
     */
    it('should return 200 and the admin role data if authenticated', async () => {
      const response = await request(app)
        .get('/api/v1/admin/role?roleId=4')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
    });

    /**
     * @description Tests accessing admin role without authentication.
     * @returns {403} Forbidden - Missing authentication token.
     */
    it('should return 403 if not authenticated', async () => {
      const response = await request(app).get('/api/v1/admin/role');

      expect(response.status).toBe(403);
    });
  });

  describe('PUT /role', () => {
    /**
     * @description Tests updating an admin role.
     * @returns {200} Success - Admin role updated.
     */
    it('should return 200 if the admin role is updated successfully', async () => {
      const response = await request(app)
        .put('/api/v1/admin/role')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          roleId: 3,
          name: 'Manager',
          permission: permissions, // object for permission
          level: 3,
        });

      expect(response.status).toBe(200);
    });
  });

  describe('DELETE /role', () => {
    /**
     * @description Tests deleting an admin role.
     * @returns {406} Not Acceptable - Role cannot be deleted.
     */
    it('should return 200 if the admin role is deleted successfully', async () => {
      const response = await request(app)
        .delete('/api/v1/admin/role?roleId=2')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(406);
    });
  });
});
