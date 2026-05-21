import request from 'supertest';
import app from '../rest-resources/index';

let authToken;

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

describe('CMS Page API', () => {

  /**
   * @description Tests retrieving all CMS pages.
   * @returns {200} Success - Returns a list of CMS pages.
   */
  describe('GET /page', () => {
    it('should return all CMS pages with status 200', async () => {
      const response = await request(app)
        .get('/api/v1/cms/page')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('data');
      expect(response.body.data).toHaveProperty('cmsPages');
      expect(response.body.data.cmsPages).toHaveProperty('count');
    });
  });

  /**
   * @description Tests creating a new CMS page.
   * @returns {200} Success - New CMS page created.
   */
  describe('POST /page', () => {
    it('should create a new CMS page and return 200', async () => {
      const response = await request(app)
        .post('/api/v1/cms/page')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          title: { EN: 'Test Page11' },
          slug: 'test-page1',
          content: { EN: 'This is a test CMS page.' },
          category: 'support',
          isActive: true,
        });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('data');
    });
  });

  /**
   * @description Tests updating an existing CMS page.
   * @returns {200} Success - CMS page updated successfully.
   */
  describe('PUT /page', () => {
    it('should update an existing CMS page and return 200', async () => {
      const response = await request(app)
        .put('/api/v1/cms/page')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          cmsPageId: 2,
          title: { EN: 'Updated Test Page' },
          slug: 'updated-test-page',
          content: { EN: 'Updated content for the test CMS page.' },
          category: 'support',
          isActive: true
        });

      expect(response.status).toBe(200);
    });
  });

  /**
   * @description Tests deleting a CMS page.
   * @returns {200} Success - CMS page deleted successfully.
   */
  describe('DELETE /page', () => {
    it('should delete a CMS page and return 200', async () => {
      const response = await request(app)
        .delete('/api/v1/cms/page')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          cmsPageId: 1,
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('data');
    });
  });
});

/**
 * @description Tests retrieving details of a CMS page.
 * @returns {200} Success - Returns CMS page details.
 */
describe('GET /page/details', () => {
  it('should return 200 and the CMS page details', async () => {
    const response = await request(app)
      .get('/api/v1/cms/page/details')
      .set('Authorization', `Bearer ${authToken}`)
      .query({ cmsPageId: 3 });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('cmsDetails');
  });
});

/**
 * @description Tests retrieving the list of available languages.
 * @returns {200} Success - Returns the list of languages.
 */
describe('GET /language', () => {
  it('should return 200 and a list of available languages', async () => {
    const response = await request(app)
      .get('/api/v1/cms/language')
      .set('Authorization', `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
});

/**
 * @description Tests toggling the CMS page status.
 * @returns {200} Success - CMS page status toggled successfully.
 */
describe('PUT /page/toggle', () => {
  it('should toggle the CMS page status and return 200', async () => {
    const response = await request(app)
      .put('/api/v1/cms/page/toggle')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        cmsPageId: 3,
        status: true,
        code: 'EN'
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('success', true);
  });
});

/**
 * @description Tests downloading affiliate banners.
 * @returns {406} Not Acceptable - Permission denied.
 */
describe('GET /affiliate/banners-download', () => {
  it('should return 406 because of permission denied', async () => {
    const response = await request(app)
      .get('/api/v1/cms/affiliate/banners-download')
      .set('Authorization', `Bearer ${authToken}`);

    expect(response.status).toBe(406);
  });
});
