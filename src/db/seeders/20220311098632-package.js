'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    return queryInterface.bulkInsert('packages', [
      {
        amount: 49.99,
        label: 'Starter Pack',
        gc_coin: 500,
        sc_coin: 50,
        is_active: true,
        is_visible_in_store: true,
        image_url: null,
        order_id: 1,
        discount_amount: 10,
        max_purchase_per_user: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('packages', null, {});
  }
};
