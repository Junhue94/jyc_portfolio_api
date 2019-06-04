module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('Stock', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: Sequelize.ENUM(
        'Current',
        'Watchlist',
        'Partial Exit',
        'Exited',
      ),
      entryDate: Sequelize.DATE,
      exitDate: Sequelize.DATE,
      name: Sequelize.STRING,
      sector: Sequelize.ENUM(
        'Basic Material',
        'Consumer Staple',
        'Consumer Discretionary',
        'Energy',
        'Entertainment',
        'Financial',
        'Health Care',
        'Industrial',
        'Property',
        'Service',
        'Technology',
        'Telecommunication',
        'Transportation',
        'Utilities',
        'REIT',
        'Business Trust',
      ),
      country: Sequelize.ENUM(
        'SG',
        'MY',
        'HK',
        'US',
      ),
      currency: Sequelize.ENUM(
        'S$',
        'RM',
        'HKD',
        'US$',
      ),
      priceBuy: Sequelize.FLOAT,
      priceSell: Sequelize.FLOAT,
      priceProfitTarget: Sequelize.FLOAT,
      priceStopLoss: Sequelize.FLOAT,
      quantityBuy: Sequelize.INTEGER,
      quantitySell: Sequelize.INTEGER,
      totalDividend: Sequelize.FLOAT,
      totalCapital: Sequelize.FLOAT,
      capitalReturn: Sequelize.FLOAT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      isDeleted: Sequelize.BOOLEAN,
    }),
  down: (queryInterface) => {
    const { sequelize } = queryInterface;

    return sequelize.transaction(t => queryInterface
      .dropTable('Stock')
      // Drop enums
      .then(() => sequelize.query('DROP TYPE IF EXISTS "enum_Stock_type";', { transaction: t }))
      .then(() => sequelize.query('DROP TYPE IF EXISTS "enum_Stock_sector";', { transaction: t }))
      .then(() => sequelize.query('DROP TYPE IF EXISTS "enum_Stock_country";', { transaction: t }))
      .then(() => sequelize.query('DROP TYPE IF EXISTS "enum_Stock_currency";', { transaction: t })));
  },
};
