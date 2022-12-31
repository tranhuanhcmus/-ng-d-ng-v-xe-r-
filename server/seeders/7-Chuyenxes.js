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
      "motachinhsach": "morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
      "src": "4.jpg",
      "giave": 279,
      "xeId": 7,
      "nhaxeId": 2,
      "thanhphodiId": 2,
      "thanhphodenId": 3
    }, {
      "motachinhsach": "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
      "src": "8.jpg",
      "giave": 232,
      "xeId": 6,
      "nhaxeId": 4,
      "thanhphodiId": 4,
      "thanhphodenId": 4
    }, {
      "motachinhsach": "duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero",
      "src": "5.jpg",
      "giave": 263,
      "xeId": 6,
      "nhaxeId": 1,
      "thanhphodiId": 2,
      "thanhphodenId": 2
    }, {
      "motachinhsach": "mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id",
      "src": "5.jpg",
      "giave": 213,
      "xeId": 4,
      "nhaxeId": 1,
      "thanhphodiId": 4,
      "thanhphodenId": 1
    }, {
      "motachinhsach": "turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet",
      "src": "10.jpg",
      "giave": 282,
      "xeId": 9,
      "nhaxeId": 3,
      "thanhphodiId": 1,
      "thanhphodenId": 4
    }, {
      "motachinhsach": "ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est",
      "src": "3.jpg",
      "giave": 210,
      "xeId": 2,
      "nhaxeId": 2,
      "thanhphodiId": 1,
      "thanhphodenId": 1
    }, {
      "motachinhsach": "vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante",
      "src": "1.jpg",
      "giave": 284,
      "xeId": 6,
      "nhaxeId": 4,
      "thanhphodiId": 1,
      "thanhphodenId": 2
    }, {
      "motachinhsach": "in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis",
      "src": "9.jpg",
      "giave": 255,
      "xeId": 5,
      "nhaxeId": 1,
      "thanhphodiId": 1,
      "thanhphodenId": 2
    }, {
      "motachinhsach": "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam",
      "src": "3.jpg",
      "giave": 215,
      "xeId": 3,
      "nhaxeId": 3,
      "thanhphodiId": 1,
      "thanhphodenId": 3
    }, {
      "motachinhsach": "maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien",
      "src": "2.jpg",
      "giave": 263,
      "xeId": 2,
      "nhaxeId": 2,
      "thanhphodiId": 4,
      "thanhphodenId": 4
    }, {
      "motachinhsach": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
      "src": "4.jpg",
      "giave": 274,
      "xeId": 5,
      "nhaxeId": 1,
      "thanhphodiId": 4,
      "thanhphodenId": 1
    }, {
      "motachinhsach": "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      "src": "2.jpg",
      "giave": 281,
      "xeId": 9,
      "nhaxeId": 1,
      "thanhphodiId": 1,
      "thanhphodenId": 1
    }, {
      "motachinhsach": "lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero",
      "src": "4.jpg",
      "giave": 221,
      "xeId": 10,
      "nhaxeId": 2,
      "thanhphodiId": 4,
      "thanhphodenId": 3
    }, {
      "motachinhsach": "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
      "src": "2.jpg",
      "giave": 291,
      "xeId": 8,
      "nhaxeId": 3,
      "thanhphodiId": 4,
      "thanhphodenId": 2
    }, {
      "motachinhsach": "vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet",
      "src": "3.jpg",
      "giave": 270,
      "xeId": 7,
      "nhaxeId": 4,
      "thanhphodiId": 1,
      "thanhphodenId": 1
    }, {
      "motachinhsach": "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet",
      "src": "6.jpg",
      "giave": 248,
      "xeId": 2,
      "nhaxeId": 3,
      "thanhphodiId": 4,
      "thanhphodenId": 4
    }, {
      "motachinhsach": "proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum",
      "src": "9.jpg",
      "giave": 227,
      "xeId": 3,
      "nhaxeId": 2,
      "thanhphodiId": 4,
      "thanhphodenId": 3
    }, {
      "motachinhsach": "turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam",
      "src": "5.jpg",
      "giave": 233,
      "xeId": 10,
      "nhaxeId": 3,
      "thanhphodiId": 2,
      "thanhphodenId": 4
    }, {
      "motachinhsach": "lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla",
      "src": "5.jpg",
      "giave": 267,
      "xeId": 6,
      "nhaxeId": 1,
      "thanhphodiId": 1,
      "thanhphodenId": 3
    }, {
      "motachinhsach": "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",
      "src": "9.jpg",
      "giave": 201,
      "xeId": 1,
      "nhaxeId": 3,
      "thanhphodiId": 1,
      "thanhphodenId": 4
    }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Chuyenxes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.Delete('Chuyenxes', items, {});
  }

};
