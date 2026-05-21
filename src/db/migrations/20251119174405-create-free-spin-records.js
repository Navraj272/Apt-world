"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("free_spin_records", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      vip_tier_ids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: true,
      },

      user_ids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: true,
        comment: "List of user IDs who received free spins",
      },

      game_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      provider_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      num_spins: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      expires_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("free_spin_records");
  },
};
