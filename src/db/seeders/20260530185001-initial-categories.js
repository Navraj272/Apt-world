'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert({ tableName: 'categories', schema: 'public' }, [
      {
        name: JSON.stringify({ en: 'General Tools and Machinery' }),
        slug: 'power-tools',
        description: JSON.stringify({ en: 'Corded and cordless power tools for professional use.' }),
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: JSON.stringify({ en: 'Cleaning Equipments' }),
        slug: 'hand-tools',
        description: JSON.stringify({ en: 'Manual tools for various applications.' }),
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: JSON.stringify({ en: 'Power Tools and Accessories' }),
        slug: 'measuring-layout',
        description: JSON.stringify({ en: 'Precision measuring and layout tools.' }),
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: JSON.stringify({ en: 'Welding Machine and Accessories' }),
        slug: 'accessories',
        description: JSON.stringify({ en: 'Consumables and attachments for tools.' }),
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: JSON.stringify({ en: 'Agricultural Tools and Solutions' }),
        slug: 'compressors',
        description: JSON.stringify({ en: 'Air compressors and related equipment.' }),
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: JSON.stringify({ en: 'Warehouse and Lifting Solutions' }),
        slug: 'air-tools',
        description: JSON.stringify({ en: 'Pneumatic tools for various tasks.' }),
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete({ tableName: 'categories', schema: 'public' }, null, {});
  },
};
