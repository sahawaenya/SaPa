'use strict';
const fs = require('fs')

const { query } = require("express");

module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const symptomps = JSON.parse(fs.readFileSync('./data/symptomps.json', 'utf-8')).map(el => {
      return {
        ...el,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
   return queryInterface.bulkInsert('Symptomps', symptomps)
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Symptomps', symptomps)
  }
};
