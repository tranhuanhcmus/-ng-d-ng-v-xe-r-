'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const items = [{
      "benxeId": 1,
      "nhaxeId": 1
    },
    {
      "benxeId": 1,
      "nhaxeId": 2
    },
    {
      "benxeId": 1,
      "nhaxeId": 3
    },
    {
      "benxeId": 1,
      "nhaxeId": 4
    },
    {
      "benxeId": 2,
      "nhaxeId": 1
    },
    {
      "benxeId": 2,
      "nhaxeId": 2
    },
    {
      "benxeId": 2,
      "nhaxeId": 3
    },
    {
      "benxeId": 2,
      "nhaxeId": 4
    },
    {
      "benxeId": 3,
      "nhaxeId": 3
    },
    {
      "benxeId": 4,
      "nhaxeId": 4
    },];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('CT_BenXe_Nhaxe', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('CT_BenXe_Nhaxe', items, {});
  }
};
