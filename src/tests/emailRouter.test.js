import request from "supertest";
import app from '../../src/rest-resources/index'; 
import db from "@src/db/models";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

describe("✅ Email Template API Integration Test", () => {
  beforeAll(async () => {
    // await db.sequelize.sync(); // Ensure database is ready
  });

  test("✅ GET /api/v1/email/template - Should fetch and update email templates", async () => {
    const response = await request(app)
      .get("/api/v1/email/template")
      .set("Authorization", `Bearer ${process.env.SENDGRID_API_KEY}`)
      .expect(200);

    // Validate API response
    expect(response.body).toHaveProperty("message");
    expect(["new template was successfully created", "no new template found"]).toContain(response.body.message);

    // Verify the database update
    const templates = await db.EmailTemplate.findAll();
    expect(templates.length).toBeGreaterThan(0);
  });

  test("❌ Should handle missing API Key error", async () => {
    const response = await request(app)
      .get("/api/v1/email/template")
      .set("Authorization", "Bearer ") // Send empty token
      .expect(401);

    expect(response.body).toHaveProperty("error");
  });

  afterAll(async () => {
    // await db.sequelize.close(); // Close DB connection
  });
});
