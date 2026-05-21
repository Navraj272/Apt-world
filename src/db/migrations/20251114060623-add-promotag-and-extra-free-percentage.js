'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'promo_tag_enum') THEN
          CREATE TYPE promo_tag_enum AS ENUM ('NONE', 'EXTRA_FREE','BEST_VALUE');
        END IF;
      END$$;
    `);

    await queryInterface.addColumn('packages', 'promo_tag', {
      type: 'promo_tag_enum',
      allowNull: false,
      defaultValue: 'NONE',
      comment: 'Promotion tag such as EXTRA_FREE'
    });

    await queryInterface.addColumn('packages', 'extra_free_percentage', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Percentage value applied when promo_tag = EXTRA_FREE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('packages', 'promo_tag');
    await queryInterface.removeColumn('packages', 'extra_free_percentage');

    await queryInterface.sequelize.query(`
      DO $$
      BEGIN
        IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'promo_tag_enum') THEN
          DROP TYPE promo_tag_enum;
        END IF;
      END$$;
    `);
  }
};
