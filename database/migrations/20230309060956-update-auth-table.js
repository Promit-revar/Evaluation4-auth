'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
      
     */
    await queryInterface.removeColumn('Users','id');
    await queryInterface.removeColumn('Users','username');
    await queryInterface.addColumn('Users','email',{
      type:Sequelize.STRING,
      primaryKey:true,
      allowNull:false,

    });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('Users','id',{
      type:Sequelize.INTEGER,
      autoIncrement:true,
    });
    await queryInterface.addColumn('Users','username',{
      type:Sequelize.STRING,
    });
    await queryInterface.removeColumn('Users','email');
  }
};
