"use strict";
const dayjs = require("dayjs")
const {
  BONUS_TYPE,
  BONUS_STATUS,
} = require("../../utils/constants/bonus.constants");
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bonuses", [
      {
        bonus_type: BONUS_TYPE.WELCOME,
        promotion_title: "Welcome Bonus",
        gc_amount: 1000,
        sc_amount: 5,
        status: BONUS_STATUS.ACTIVE,
        description: "Receive 1000 GC & 5 SC coins on registration.",
        terms_conditions: `
          <ul>
            <li><strong>Validity:</strong> Receive 1000 GC & 5 SC coins on registration.</li>
            <li><strong>Eligibility:</strong> Available to new users only.</li>
          </ul>
        `,
        created_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        updated_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      },
      {
        bonus_type: BONUS_TYPE.BOOST_BONUS,
        promotion_title: "Boost Bonus",
        percentage: 10,
        valid_on_days: JSON.stringify({
          Sunday: 10,
          Wednesday: 10,
        }),
        status: BONUS_STATUS.ACTIVE,
        description: "Get an exclusive Bonus Boost upon redeeming packages. Enjoy additional rewards on selected days.",
        terms_conditions: `
          <ul>
            <li><strong>Validity:</strong> The bonus is applicable on selected days only. </li>
            <li><strong>Eligibility:</strong> This bonus applies only after successfully redeeming a package. </li>
          </ul>
        `,
        created_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        updated_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      },
       {
        bonus_type: BONUS_TYPE.REFERRAL_BONUS,
        promotion_title: "Referral Bonus",
        gc_amount: 500,
        sc_amount: 2,
        percentage: 10.00,                // Percentage for referral bonus
        max_bonus_limit: 500.00,          // Max bonus limit
        minimum_deposit_required: 100.00,
        gc_max_bonus_limit : 200000.00,
        status: BONUS_STATUS.ACTIVE,
        description: "Get rewarded for inviting your friends! Receive 500 GC & 2 SC when your friend registers.",
        terms_conditions: `
          <ul>
            <li><strong>Reward:</strong> Bonus is credited after the referred friend successfully registers and verifies their account and complete first deposit.</li>
            <li><strong>Eligibility:</strong> Applicable for each successful referral.</li>
          </ul>
        `,
        created_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        updated_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bonuses", null, {});
  },
};
