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
      "name": "06105 Upham Junction",
      "thanhphoId": 2
    }, {
      "name": "313 Burning Wood Street",
      "thanhphoId": 1
    }, {
      "name": "4 Dorton Street",
      "thanhphoId": 1
    }, {
      "name": "5 Monterey Place",
      "thanhphoId": 1
    }, {
      "name": "6106 Hintze Court",
      "thanhphoId": 3
    }, {
      "name": "87 Tennessee Parkway",
      "thanhphoId": 4
    }, {
      "name": "04 Novick Terrace",
      "thanhphoId": 3
    }, {
      "name": "3 Vermont Lane",
      "thanhphoId": 1
    }, {
      "name": "3 Corry Place",
      "thanhphoId": 1
    }, {
      "name": "613 Blackbird Street",
      "thanhphoId": 3
    }, {
      "name": "288 Division Terrace",
      "thanhphoId": 4
    }, {
      "name": "7725 Stuart Plaza",
      "thanhphoId": 4
    }, {
      "name": "28 Pankratz Junction",
      "thanhphoId": 2
    }, {
      "name": "3 Nelson Trail",
      "thanhphoId": 4
    }, {
      "name": "0562 Graedel Plaza",
      "thanhphoId": 1
    }, {
      "name": "3004 International Crossing",
      "thanhphoId": 4
    }, {
      "name": "30078 Northfield Way",
      "thanhphoId": 3
    }, {
      "name": "8 Clarendon Pass",
      "thanhphoId": 4
    }, {
      "name": "1 Northland Plaza",
      "thanhphoId": 2
    }, {
      "name": "0308 Moulton Pass",
      "thanhphoId": 2
    }, {
      "name": "63 Declaration Center",
      "thanhphoId": 1
    }, {
      "name": "316 Debs Parkway",
      "thanhphoId": 4
    }, {
      "name": "3032 Corry Hill",
      "thanhphoId": 1
    }, {
      "name": "8 Claremont Street",
      "thanhphoId": 4
    }, {
      "name": "9 South Lane",
      "thanhphoId": 2
    }, {
      "name": "930 Annamark Center",
      "thanhphoId": 1
    }, {
      "name": "73648 Declaration Center",
      "thanhphoId": 2
    }, {
      "name": "434 Melody Alley",
      "thanhphoId": 4
    }, {
      "name": "291 Mitchell Trail",
      "thanhphoId": 4
    }, {
      "name": "820 Oakridge Place",
      "thanhphoId": 3
    }, {
      "name": "64442 Sunnyside Park",
      "thanhphoId": 1
    }, {
      "name": "125 Northwestern Crossing",
      "thanhphoId": 4
    }, {
      "name": "3441 Lotheville Way",
      "thanhphoId": 3
    }, {
      "name": "03 Sunbrook Trail",
      "thanhphoId": 4
    }, {
      "name": "50 Chinook Parkway",
      "thanhphoId": 4
    }, {
      "name": "38 Esker Lane",
      "thanhphoId": 4
    }, {
      "name": "5989 Heffernan Lane",
      "thanhphoId": 3
    }, {
      "name": "6729 Little Fleur Junction",
      "thanhphoId": 4
    }, {
      "name": "9287 Elmside Junction",
      "thanhphoId": 1
    }, {
      "name": "500 Thierer Road",
      "thanhphoId": 2
    }, {
      "name": "0306 Delladonna Crossing",
      "thanhphoId": 2
    }, {
      "name": "2 Menomonie Parkway",
      "thanhphoId": 2
    }, {
      "name": "397 Reinke Crossing",
      "thanhphoId": 3
    }, {
      "name": "50522 Blaine Trail",
      "thanhphoId": 1
    }, {
      "name": "323 Reinke Center",
      "thanhphoId": 4
    }, {
      "name": "80580 Eastwood Park",
      "thanhphoId": 4
    }, {
      "name": "19101 Briar Crest Court",
      "thanhphoId": 3
    }, {
      "name": "955 Hovde Court",
      "thanhphoId": 2
    }, {
      "name": "47005 Algoma Junction",
      "thanhphoId": 3
    }, {
      "name": "4 South Pass",
      "thanhphoId": 1
    }, {
      "name": "060 Elgar Parkway",
      "thanhphoId": 1
    }, {
      "name": "03325 Westridge Park",
      "thanhphoId": 1
    }, {
      "name": "1 Alpine Parkway",
      "thanhphoId": 1
    }, {
      "name": "941 Eggendart Plaza",
      "thanhphoId": 3
    }, {
      "name": "41610 Gerald Junction",
      "thanhphoId": 3
    }, {
      "name": "8 Forest Dale Terrace",
      "thanhphoId": 4
    }, {
      "name": "4755 Northridge Place",
      "thanhphoId": 3
    }, {
      "name": "41 Dixon Way",
      "thanhphoId": 2
    }, {
      "name": "3232 Mosinee Road",
      "thanhphoId": 2
    }, {
      "name": "3 Carey Trail",
      "thanhphoId": 3
    }, {
      "name": "841 Merchant Plaza",
      "thanhphoId": 4
    }, {
      "name": "1 Kipling Terrace",
      "thanhphoId": 2
    }, {
      "name": "1212 Golf View Alley",
      "thanhphoId": 3
    }, {
      "name": "148 Shopko Crossing",
      "thanhphoId": 2
    }, {
      "name": "888 Crownhardt Drive",
      "thanhphoId": 1
    }, {
      "name": "574 Michigan Park",
      "thanhphoId": 2
    }, {
      "name": "2495 Mcguire Junction",
      "thanhphoId": 4
    }, {
      "name": "1 Kropf Drive",
      "thanhphoId": 3
    }, {
      "name": "5 Knutson Parkway",
      "thanhphoId": 1
    }, {
      "name": "10 Maryland Point",
      "thanhphoId": 4
    }, {
      "name": "5237 Raven Circle",
      "thanhphoId": 2
    }, {
      "name": "04 Trailsway Way",
      "thanhphoId": 1
    }, {
      "name": "64878 Union Place",
      "thanhphoId": 1
    }, {
      "name": "83602 Merrick Drive",
      "thanhphoId": 3
    }, {
      "name": "50560 Debra Alley",
      "thanhphoId": 2
    }, {
      "name": "39267 Carpenter Road",
      "thanhphoId": 2
    }, {
      "name": "75891 Arrowood Drive",
      "thanhphoId": 4
    }, {
      "name": "04 Miller Point",
      "thanhphoId": 4
    }, {
      "name": "72 Ridgeway Court",
      "thanhphoId": 4
    }, {
      "name": "824 Quincy Alley",
      "thanhphoId": 2
    }, {
      "name": "21 Thompson Place",
      "thanhphoId": 1
    }, {
      "name": "32614 Esker Court",
      "thanhphoId": 3
    }, {
      "name": "8 Kensington Alley",
      "thanhphoId": 4
    }, {
      "name": "36 Annamark Road",
      "thanhphoId": 3
    }, {
      "name": "055 Northview Circle",
      "thanhphoId": 3
    }, {
      "name": "547 Fordem Center",
      "thanhphoId": 4
    }, {
      "name": "4 Derek Street",
      "thanhphoId": 2
    }, {
      "name": "1131 Basil Parkway",
      "thanhphoId": 1
    }, {
      "name": "285 Village Green Way",
      "thanhphoId": 3
    }, {
      "name": "46 Vernon Circle",
      "thanhphoId": 2
    }, {
      "name": "9 Carey Center",
      "thanhphoId": 1
    }, {
      "name": "0111 Mendota Pass",
      "thanhphoId": 2
    }, {
      "name": "0196 Trailsway Plaza",
      "thanhphoId": 4
    }, {
      "name": "8567 Forest Dale Point",
      "thanhphoId": 4
    }, {
      "name": "42521 Dovetail Place",
      "thanhphoId": 4
    }, {
      "name": "14 Northview Avenue",
      "thanhphoId": 4
    }, {
      "name": "1 Bowman Park",
      "thanhphoId": 4
    }, {
      "name": "1446 New Castle Hill",
      "thanhphoId": 3
    }, {
      "name": "64 Hayes Hill",
      "thanhphoId": 4
    }, {
      "name": "47088 Lakewood Avenue",
      "thanhphoId": 2
    }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Diemdons', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
