'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produk_komponen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produk_komponen.init({
    produk_id: DataTypes.INTEGER,
    komponen_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produk_komponen',
  });
  return Produk_komponen;
};