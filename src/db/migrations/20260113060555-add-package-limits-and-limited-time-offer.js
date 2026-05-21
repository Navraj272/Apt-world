"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.sequelize.query(`
      ALTER TYPE promo_tag_enum
      ADD VALUE IF NOT EXISTS 'LIMITED_TIME_OFFER';
    `);


    await queryInterface.addColumn("packages", "max_purchase_total", {
      type: Sequelize.INTEGER,
      allowNull: true,
      comment: "Maximum number of times this package can be purchased globally",
    });


    await queryInterface.addColumn("packages", "available_from", {
      type: Sequelize.DATE,
      allowNull: true,
      comment: "Package purchase start date and time",
    });


    await queryInterface.addColumn("packages", "available_until", {
      type: Sequelize.DATE,
      allowNull: true,
      comment: "Package purchase end date and time",
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove columns
    await queryInterface.removeColumn("packages", "max_purchase_total");
    await queryInterface.removeColumn("packages", "available_from");
    await queryInterface.removeColumn("packages", "available_until");


  },
};
