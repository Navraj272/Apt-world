'use strict';

const TABLES = [
  { table: 'categories', partition: null },
  { table: 'subcategories', partition: 'category_id' },
  { table: 'products', partition: 'subcategory_id' },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (const { table, partition } of TABLES) {
      await queryInterface.addColumn(table, 'sort_order', {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      });
      // Seed existing rows with their current oldest-first position inside their list
      if (table !== 'products') {
        await queryInterface.sequelize.query(`
          UPDATE ${table} t SET sort_order = r.rn
          FROM (
            SELECT id, ROW_NUMBER() OVER (${partition ? `PARTITION BY ${partition} ` : ''}ORDER BY id) AS rn
            FROM ${table}
          ) r WHERE r.id = t.id
        `);
      }
      await queryInterface.addIndex(table, ['sort_order'], { name: `${table}_sort_order_idx` });
    }
    // Products start in one global order: category order, then subcategory order, then oldest first
    await queryInterface.sequelize.query(`
      UPDATE products p SET sort_order = r.rn
      FROM (
        SELECT p2.id, ROW_NUMBER() OVER (ORDER BY c.sort_order, s.sort_order, p2.id) AS rn
        FROM products p2
        LEFT JOIN categories c ON c.id = p2.category_id
        LEFT JOIN subcategories s ON s.id = p2.subcategory_id
      ) r WHERE r.id = p.id
    `);
  },

  down: async (queryInterface) => {
    for (const { table } of TABLES) {
      await queryInterface.removeIndex(table, `${table}_sort_order_idx`);
      await queryInterface.removeColumn(table, 'sort_order');
    }
  },
};
