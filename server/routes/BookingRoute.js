var express = require("express");
var router = express.Router();
const request = require("request-promise");

const title = "BookingPage";

const Brand = [
    "Nhà xe Thành Bưởi",
    "Nhà Xe Phương Trang",
    "Nhà xe Phương Tân Niên",
    "Nhà xe Tuấn Hưng",
];
const Place = ["TP Cà Mau", "TP Hồ Chí Minh", "TP Đà Nẵng", "TP Hà Nội"];
const TypeBed = ["Xe giường nằm", "Xe giường phòng", "Xe thường"];

router.get("/", async function(req, res) {
    const response = await request(`http://localhost:3000/api/chuyenxe/`);
    const data = [];
    const chuyenxe = await JSON.parse(response);
    chuyenxe.map((item) => data.push(item));

    await res.render("Pages/Booking", { data, Brand, Place, TypeBed, title });
});

module.exports = router;