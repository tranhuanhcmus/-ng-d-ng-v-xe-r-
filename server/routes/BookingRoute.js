var express = require('express');
var router = express.Router();
const request = require("request-promise");
// const controller = require('../controllers/BookingController');
const title = 'BookingPage';
// const data = [{
//   img: './images/Booking/garage.png',
//   type: 'Limousin giường phòng 40 chỗ', id: '',
//   tennhaxe: "Huan Bs", tpdi: "vp Sài Gòn", tpden: "VP Bình Định", tgkhoihanh: "12:00", tgketthuc: "00:00", ngaykhoihanh: "20/09/2023", giave: "500.000"
// }];
const Brand = ['Nhà xe Thành Bưởi', 'Nhà Xe Phương Trang', 'Nhà xe Phương Tân Niên', 'Nhà xe Tuấn Hưng'];
const Place = ['TP Cà Mau', 'TP Hồ Chí Minh', 'TP Đà Nẵng', 'TP Hà Nội'];
const TypeBed = ['Xe giường nằm', 'Xe giường phòng', 'Xe thường'];


router.get('/', async function (req, res) {
  const response = await request(
    `http://localhost:3000/api/chuyenxe/`
  );
  const data = [];
  const chuyenxe = await JSON.parse(response);
  chuyenxe.map((item) => data.push(item));

  await res.render("Pages/Booking", { data, Brand, Place, TypeBed, title });

});

module.exports = router;
