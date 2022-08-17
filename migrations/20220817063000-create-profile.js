'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
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
      UserId: {
        type: Sequelize.INTEGER,
        references : {
          model : "Users"
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
    await queryInterface.dropTable('Profiles');
  }
};