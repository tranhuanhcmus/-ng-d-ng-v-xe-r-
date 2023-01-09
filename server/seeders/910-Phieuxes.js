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
      "soluong": 3,
      "tongtien": 560000,
      "trangthai": 1,
      "chuyenxeId": 1,
      "khachhangId": 7
    }, {
      "soluong": 1,
      "tongtien": 860000,
      "trangthai": 0,
      "chuyenxeId": 2,
      "khachhangId": 7
    }, {
      "soluong": 4,
      "tongtien": 930000,
      "trangthai": 1,
      "chuyenxeId": 17,
      "khachhangId": 7
    }, {
      "soluong": 1,
      "tongtien": 940000,
      "trangthai": 1,
      "chuyenxeId": 5,
      "khachhangId": 9
    }, {
      "soluong": 2,
      "tongtien": 940000,
      "trangthai": 1,
      "chuyenxeId": 12,
      "khachhangId": 8
    }, {
      "soluong": 4,
      "tongtien": 730000,
      "trangthai": 0,
      "chuyenxeId": 20,
      "khachhangId": 4
    }, {
      "soluong": 3,
      "trangthai": 0,
      "chuyenxeId": 14,
      "khachhangId": 5
    }, {
      "soluong": 5,
      "tongtien": 550000,
      "trangthai": 1,
      "chuyenxeId": 19,
      "khachhangId": 4
    }, {
      "soluong": 5,
      "tongtien": 520000,
      "trangthai": 1,
      "chuyenxeId": 14,
      "khachhangId": 6
    }, {
      "soluong": 5,
      "tongtien": 980000,
      "trangthai": 0,
      "chuyenxeId": 3,
      "khachhangId": 2
    }, {
      "soluong": 1,
      "tongtien": 750000,
      "trangthai": 0,
      "chuyenxeId": 17,
      "khachhangId": 9
    }, {
      "soluong": 1,
      "trangthai": 0,
      "chuyenxeId": 9,
      "khachhangId": 10
    }, {
      "soluong": 5,
      "tongtien": 910000,
      "trangthai": 1,
      "chuyenxeId": 11,
      "khachhangId": 3
    }, {
      "soluong": 2,
      "tongtien": 780000,
      "trangthai": 0,
      "chuyenxeId": 16,
      "khachhangId": 1
    }, {
      "soluong": 1,
      "tongtien": 900000,
      "trangthai": 0,
      "chuyenxeId": 11,
      "khachhangId": 3
    }, {
      "soluong": 3,
      "tongtien": 770000,
      "trangthai": 0,
      "chuyenxeId": 9,
      "khachhangId": 10
    }, {
      "soluong": 4,
      "tongtien": 910000,
      "trangthai": 1,
      "chuyenxeId": 10,
      "khachhangId": 10
    }, {
      "soluong": 2,
      "tongtien": 740000,
      "trangthai": 0,
      "chuyenxeId": 9,
      "khachhangId": 4
    }, {
      "soluong": 2,
      "tongtien": 740000,
      "trangthai": 1,
      "chuyenxeId": 13,
      "khachhangId": 5
    }, {
      "soluong": 1,
      "tongtien": 760000,
      "trangthai": 0,
      "chuyenxeId": 3,
      "khachhangId": 6
    }, {
      "soluong": 2,
      "tongtien": 610000,
      "trangthai": 1,
      "chuyenxeId": 18,
      "khachhangId": 4
    }, {
      "soluong": 5,
      "tongtien": 780000,
      "trangthai": 0,
      "chuyenxeId": 10,
      "khachhangId": 3
    }, {
      "soluong": 1,
      "tongtien": 610000,
      "trangthai": 0,
      "chuyenxeId": 20,
      "khachhangId": 10
    }, {
      "soluong": 2,
      "tongtien": 550000,
      "trangthai": 0,
      "chuyenxeId": 6,
      "khachhangId": 2
    }, {
      "soluong": 3,
      "tongtien": 680000,
      "trangthai": 1,
      "chuyenxeId": 20,
      "khachhangId": 7
    }, {
      "soluong": 4,
      "tongtien": 740000,
      "trangthai": 0,
      "chuyenxeId": 5,
      "khachhangId": 6
    }, {
      "soluong": 1,
      "tongtien": 720000,
      "trangthai": 0,
      "chuyenxeId": 18,
      "khachhangId": 5
    }, {
      "soluong": 3,
      "tongtien": 960000,
      "trangthai": 0,
      "chuyenxeId": 10,
      "khachhangId": 10
    }, {
      "soluong": 2,
      "tongtien": 680000,
      "trangthai": 0,
      "chuyenxeId": 12,
      "khachhangId": 8
    }, {
      "soluong": 5,
      "tongtien": 1000000,
      "trangthai": 1,
      "chuyenxeId": 18,
      "khachhangId": 2
    }, {
      "soluong": 5,
      "tongtien": 990000,
      "trangthai": 0,
      "chuyenxeId": 18,
      "khachhangId": 8
    }, {
      "soluong": 3,
      "tongtien": 930000,
      "trangthai": 1,
      "chuyenxeId": 14,
      "khachhangId": 3
    }, {
      "soluong": 4,
      "tongtien": 560000,
      "trangthai": 0,
      "chuyenxeId": 7,
      "khachhangId": 1
    }, {
      "soluong": 4,
      "tongtien": 580000,
      "trangthai": 1,
      "chuyenxeId": 14,
      "khachhangId": 2
    }, {
      "soluong": 3,
      "tongtien": 820000,
      "trangthai": 1,
      "chuyenxeId": 15,
      "khachhangId": 4
    }, {
      "soluong": 1,
      "tongtien": 990000,
      "trangthai": 0,
      "chuyenxeId": 17,
      "khachhangId": 1
    }, {
      "soluong": 4,
      "tongtien": 900000,
      "trangthai": 1,
      "chuyenxeId": 12,
      "khachhangId": 8
    }, {
      "soluong": 4,
      "tongtien": 600000,
      "trangthai": 0,
      "chuyenxeId": 9,
      "khachhangId": 10
    }, {
      "soluong": 3,
      "tongtien": 500000,
      "trangthai": 1,
      "chuyenxeId": 10,
      "khachhangId": 10
    }, {
      "soluong": 2,
      "tongtien": 810000,
      "trangthai": 1,
      "chuyenxeId": 11,
      "khachhangId": 3
    }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Phieuxes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Phieuxes', items, {});
  }
};
