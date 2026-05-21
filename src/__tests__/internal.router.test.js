import request from 'supertest';
import app from "../rest-resources/index";

describe('Internal Router', () => {

  /**
   * @description Tests populating internal data.
   * @returns {200} Success - Data populated successfully.
   */
  describe('GET /populate-data', () => {
    it('should return 200 and populate data', async () => {
      const response = await request(app)
        .get('/api/v1/internal/populate-data');

      expect(response.status).toBe(200);
    });
  });

});
