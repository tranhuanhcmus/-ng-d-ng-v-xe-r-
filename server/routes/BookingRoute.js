var express = require("express");
var router = express.Router();
// const controller = require('../controllers/BookingController');
const title = "BookingPage";
const data = [{
        img: "./images/Booking/garage.png",
        type: "Limousin giường phòng 40 chỗ",
        id: "1",
        tennhaxe: "Huan Bs",
        diemdon: "vp Sài Gòn",
        diemtra: "VP Bình Định",
        hdi: "12:00",
        hden: "00:00",
        price: "500.000",
    },
    {
        img: "./images/Booking/garage.png",
        type: "Limousin giường phòng 40 chỗ",
        id: "2",
        tennhaxe: "Huan Bs",
        diemdon: "vp Sài Gòn",
        diemtra: "VP Bình Định",
        hdi: "12:00",
        hden: "00:00",
        price: "500.000",
    },
    {
        img: "./images/Booking/garage.png",
        type: "Limousin giường phòng 40 chỗ",
        id: "3",
        tennhaxe: "Huan Bs",
        diemdon: "vp Sài Gòn",
        diemtra: "VP Bình Định",
        hdi: "12:00",
        hden: "00:00",
        price: "500.000",
    },
];
const Brand = [
    "An Phu bussiness",
    "Huan Bussiness",
    "Doan Anh bussiness",
    "CuaCaMau bussiness",
    "LucPM bussinesss",
];
const Place = [
    "Cà Mau",
    "Sài Gòn",
    "Bình Định",
    "Đà Nẵng",
    "Đắk Lăk",
    "Quảng Nam",
];
const TypeBed = ["Giường Nằm", "Giường Phòng", "Ghế ngồi"];

router.get("/", function(req, res) {
    res.render("Pages/Booking", { data, Brand, Place, TypeBed, title });
});

module.exports = router;