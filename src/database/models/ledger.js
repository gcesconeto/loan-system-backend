'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ledger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ledger.belongsTo(models.loan, { foreignKey: 'loanId' , allowNull: true })
      ledger.belongsTo(models.settlement, { foreignKey: 'settlementId' , allowNull: true })
    }
  };
  ledger.init({
    loanId: DataTypes.INTEGER,
    settlementId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ledger',
    tableName: 'ledger',
    timestamps: false,
  });
  return ledger;
};