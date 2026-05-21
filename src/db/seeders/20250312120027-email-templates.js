"use strict";

const axios = require("axios")
const dayjs = require("dayjs")
const config = require("@src/configs/app.config")
const { EMAIL_NAME } = require("@src/utils/constants/public.constants.js")

module.exports = {
  up: async (queryInterface) => {
    try {
      // Fetch dynamic templates from SendGrid


      function toSnakeCase(str) {
        return str
          .replace(/\s+/g, '_')
          .replace(/([a-z])([A-Z])/g, '$1_$2')
          .replace(/[^a-zA-Z0-9_]/g, '')
          .toLowerCase()
          .replace(/__+/g, '_')
          .replace(/^_+|_+$/g, '');
      }

      const { data } = await axios.get("https://api.sendgrid.com/v3/templates", {
        headers: {
          Authorization: `Bearer ${config.get("sendGrid.apiKey")}`,
          "Content-Type": "application/json",
        },
        params: {
          generations: "dynamic",
        },
      })

      const templates = data.templates || [];

      const updatedTemplates = templates
        .filter(template => template.name && template.id)
        .map(template => ({
          label: toSnakeCase(template.name),
          templateProviderId: template.id,
          createdAt: timestamp,
          updatedAt: timestamp,
        }));


      if (updatedTemplates.length) {
        await queryInterface.bulkInsert("email_templates", updatedTemplates);
      }
    } catch (error) {
      console.error("❌ Failed to seed email_templates:", error?.response?.data || error.message || error);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("email_templates", null, {});
  },
}