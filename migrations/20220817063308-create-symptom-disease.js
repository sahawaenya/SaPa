'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SymptomDiseases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SymptompId: {
        type: Sequelize.INTEGER,
        references : {
          model : "Symptomps"
        }
      },
      DiseaseId: {
        type: Sequelize.INTEGER,
        references : {
          model : "Diseases"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SymptomDiseases');
  }
};