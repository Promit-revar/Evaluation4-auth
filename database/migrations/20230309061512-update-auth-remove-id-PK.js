'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users','id',{
      type:Sequelize.INTEGER,
      autoIncrement:true,       
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users','id');
  }
};
