'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Step 1: Add the new columns as nullable (to prevent migration failure on existing rows)
    await queryInterface.addColumn('vip_tiers', 'conversion_rate_sc_to_vip', {
      type: Sequelize.DECIMAL(10, 8),
      allowNull: true,
      defaultValue: 0,
      comment: 'conversion rate from sc to vip points',
    });

    await queryInterface.addColumn('vip_tiers', 'conversion_rate_gc_to_vip', {
      type: Sequelize.DECIMAL(10, 8),
      allowNull: true,
      defaultValue: 0,
      comment: 'conversion rate from gc to vip points',
    });

    // Step 2: Update existing rows with default value (0.00000000)
    await queryInterface.sequelize.query(`
      UPDATE "vip_tiers"
      SET "conversion_rate_sc_to_vip" = 0,
          "conversion_rate_gc_to_vip" = 0
      WHERE "conversion_rate_sc_to_vip" IS NULL OR "conversion_rate_gc_to_vip" IS NULL;
    `);

    // Step 3: Alter columns to make them NOT NULL
    await queryInterface.changeColumn('vip_tiers', 'conversion_rate_sc_to_vip', {
      type: Sequelize.DECIMAL(10, 8),
      allowNull: false,
      defaultValue: 0,
      comment: 'conversion rate from sc to vip points',
    });

    await queryInterface.changeColumn('vip_tiers', 'conversion_rate_gc_to_vip', {
      type: Sequelize.DECIMAL(10, 8),
      allowNull: false,
      defaultValue: 0,
      comment: 'conversion rate from gc to vip points',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('vip_tiers', 'conversion_rate_sc_to_vip');
    await queryInterface.removeColumn('vip_tiers', 'conversion_rate_gc_to_vip');
  },
};
