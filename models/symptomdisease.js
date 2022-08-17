'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SymptomDisease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SymptomDisease.init({
    SymptompId: DataTypes.INTEGER,
    DiseaseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SymptomDisease',
  });
  return SymptomDisease;
};