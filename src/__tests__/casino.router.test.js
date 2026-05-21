import request from 'supertest';
import app from '../rest-resources/index';

describe('Casino Router API Tests', () => {
  /**
   * @description Tests retrieving casino aggregators when no aggregators exist.
   * @returns {200} Success - Returns an empty list.
   */
  it('GET /casino/aggregators: Should return an empty list when no aggregators exist', async () => {
    const response = await request(app).get('/api/v1/casino/aggregators');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('aggregators');
    expect(response.body.data.aggregators).toHaveProperty('count');
    expect(Array.isArray(response.body.data.aggregators.rows)).toBe(true);
  });

  /**
   * @description Tests retrieving casino providers.
   * @returns {200} Success - Returns provider list.
   */
  it('GET /casino/providers', async () => {
    const response = await request(app).get('/api/v1/casino/providers');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('providerList');
  });

  /**
   * @description Tests retrieving casino categories.
   * @returns {200} Success - Returns category list.
   */
  it('GET /casino/categories', async () => {
    const response = await request(app).get('/api/v1/casino/categories');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('casinoCategories');
  });

  /**
   * @description Tests retrieving casino games.
   * @returns {200} Success - Returns game list.
   */
  it('GET /casino/games', async () => {
    const response = await request(app).get('/api/v1/casino/games');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });

  /**
   * @description Tests creating a casino category with missing data.
   * @returns {400} Bad Request - Missing required fields.
   */
  it('POST /casino/category should return 400 for missing data', async () => {
    const response = await request(app).post('/api/v1/casino/category').send({});
    console.log(response.body);
    expect(response.status).toBe(400);
  });

  /**
   * @description Tests deleting a casino category with missing data.
   * @returns {400} Bad Request - Missing required fields.
   */
  it('DELETE /casino/category should return 400 for missing data', async () => {
    const response = await request(app).delete('/api/v1/casino/category').send({});
    console.log(response.body);
    expect(response.status).toBe(400);
  });

  /**
   * @description Tests toggling a casino game.
   * @returns {200} Success - Game toggled successfully.
   */
  it('should return 200 if the casino game is toggled successfully', async () => {
    const response = await request(app)
      .put('/api/v1/casino/toggle/game')
      .send({
        "casinoGameId": 1,
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('success', true);
  });

  /**
   * @description Tests toggling a casino provider.
   * @returns {200} Success - Provider toggled successfully.
   */
  it('should return 200 if the casino provider is toggled successfully', async () => {
    const response = await request(app)
      .put('/api/v1/casino/toggle/provider')
      .send({
        casinoProviderId: 1,
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('success', true);
  });

  /**
   * @description Tests toggling a casino category.
   * @returns {200} Success - Category toggled successfully.
   */
  it('should return 200 if the casino category is toggled successfully', async () => {
    const response = await request(app)
      .put('/api/v1/casino/toggle/category')
      .send({
        casinoCategoryId: 1,
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('success', true);
  });

  /**
   * @description Tests toggling a casino aggregator.
   * @returns {200} Success - Aggregator toggled successfully.
   */
  it('should return 200 if the casino aggregator is toggled successfully', async () => {
    const response = await request(app)
      .put('/api/v1/casino/toggle/aggregator')
      .send({
        casinoAggregatorId: 1,
      });

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('success', true);
  });

  // /**
  //  * @description Tests loading casino games if authenticated.
  //  * @returns {200} Success - Returns loaded casino games.
  //  */
  // it('should return 200 and load casino games if authenticated', async () => {
  //   const response = await request(app)
  //     .get('/api/v1/casino/load-game')
  //     .send({
  //       casinoGameId:1,
  //     });

  //   expect(response.status).toBe(200);
  //   expect(response.body.data).toHaveProperty('games');
  // });
});
