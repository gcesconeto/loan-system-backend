'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      loan.belongsTo(models.client, { foreignKey: 'clientId'})
    }
  };
  loan.init({
    clientId: DataTypes.INTEGER,
    amount: DataTypes.NUMBER,
    startDate: DataTypes.DATE,
    paymentDate: DataTypes.DATE,
    rate: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'loan',
    tableName: 'loans',
    timestamps: false,
  });
  return loan;
};