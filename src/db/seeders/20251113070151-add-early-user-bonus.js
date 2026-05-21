"use strict";
const dayjs = require("dayjs");
const { BONUS_TYPE, BONUS_STATUS } = require("../../utils/constants/bonus.constants");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bonuses", [
      {
        bonus_type: BONUS_TYPE.EARLY_USER,
        promotion_title: "Early User Bonus",
        gc_amount: 500,
        sc_amount: 2,
        status: BONUS_STATUS.ACTIVE,
        description: "Receive 500 GC & 2 SC coins on registration.",
        terms_conditions: `
          <ul>
            <li><strong>Validity:</strong> Receive 500 GC & 2 SC coins on registration.</li>
            <li><strong>Eligibility:</strong> Available to early users only.</li>
          </ul>
        `,
        created_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        updated_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bonuses", { bonus_type: BONUS_TYPE.EARLY_USER });
  },
};
