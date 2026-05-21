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

describe('CRM Router', () => {

  /**
   * @description Tests retrieving the list of email templates.
   * @returns {200} Success - Returns a list of email templates.
   */
  describe('GET /email/templates', () => {
    it('should return 200 and list email templates', async () => {
      const response = await request(app)
        .get('/api/v1/crm/email/templates')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
    });
  });

  /**
   * @description Tests retrieving an email template by ID.
   * @returns {200} Success - Returns email template details.
   */
  describe('GET /email/template', () => {
    it('should return 200 for valid template ID', async () => {
      const response = await request(app)
        .get('/api/v1/crm/email/template')
        .query({ emailTemplateId: 1 })
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
    });
  });

  /**
   * @description Tests retrieving the list of support tickets.
   * @returns {200} Success - Returns a list of support tickets.
   */
  describe('GET /tickets', () => {
    it('should return 200 and list support tickets', async () => {
      const response = await request(app)
        .get('/api/v1/crm/tickets')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
    });
  });

  /**
   * @description Tests updating the status of a support ticket.
   * @returns {200} Success - Ticket status updated successfully.
   */
  describe('PUT /tickets', () => {
    it('should update ticket status and return 200', async () => {
      const response = await request(app)
        .put('/api/v1/crm/tickets')
        .send({ ticketId: 1, status: 'resolved' })
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
    });
  });

  /**
   * @description Tests retrieving messages for a specific ticket.
   * @returns {200} Success - Returns ticket messages.
   */
  describe('GET /ticket/message', () => {
    it('should return 200 and get ticket messages', async () => {
      const response = await request(app)
        .get('/api/v1/crm/ticket/message')
        .query({ ticketId: 1 })
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
    });
  });

  /**
   * @description Tests sending a message to a support ticket.
   * @returns {200} Success - Ticket message sent successfully.
   */
  describe('POST /ticket/message', () => {
    it('should send a ticket message and return 200', async () => {
      const response = await request(app)
        .post('/api/v1/crm/ticket/message')
        .send({ ticketId: 1, user: { userId: 1 }, message: 'Test message' }) // Adjust based on schema
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
    });
  });
});
