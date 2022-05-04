'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      client.hasMany(models.loan)
    }
  };
  client.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    state: DataTypes.STRING,
    rg: DataTypes.STRING,
    cpf: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'client',
    tableName: 'clients',
    timestamps: false,
  });
  return client;
};