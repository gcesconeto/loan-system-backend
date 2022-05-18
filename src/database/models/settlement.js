'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class settlement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      settlement.belongsTo(models.client, { foreignKey: 'clientId'})
      settlement.hasMany(models.ledger)
      settlement.hasMany(models.loan)
    }
  };
  settlement.init({
    clientId: DataTypes.INTEGER,
    amount: DataTypes.NUMBER,
    startDate: DataTypes.DATE,
    installments: DataTypes.INTEGER,
    notes: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'settlement',
    tableName: 'settlements',
    timestamps: false,
  });
  return settlement;
};