const request = require("request-promise");
var express = require("express");

var router = express.Router();

router.get("/:id", async (req, res, next) => {
    const data = {
        start: "Nha Trang",
        end: "Sài Gòn",
        nhaxe: "Binh Minh Bus",
        price: "450.000",
        startDes: ["VP Sài Gòn 1", "VP Sài Gòn 2"],
        endDes: ["VP Nha Trang 1", "VP Nha Trang 2"],
        time: "11:00 Ngày 1/10/2022",
        img: "https://plus.unsplash.com/premium_photo-1661760200219-6bfe3f0d72a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        type: "Limousin giường phòng 22 chỗ",
        checked: [1, 12, 3, 8, 5],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et odio fugiat nulla voluptas. Mollitia dolores dignissimos ex, odit placeat, dolore laudantium sed iusto facilis, veritatis porro ratione obcaecati soluta itaque! Placeat eaque cupiditate, recusandae illo asperiores atque aspernatur explicabo deserunt tempore non possimus, nam cumque facere minima! Asperiores, quaerat nemo soluta illo provident blanditiis? Quo expedita ab eum quasi quas non voluptatum vel beatae vitae. Natus nobis commodi pariatur rerum sequi aut fuga, nostrum cumque! Voluptatum nam nostrum repellendus rerum eum dolores quidem voluptas quisquam perferendis dignissimos placeat iste consequatur atque blanditiis dolorem ipsa dolor sed, odio ratione accusamus.",
    };

    const response = await request(
        `http://localhost:3000/api/chuyenxe/${req.params.id}`
    );
    const chuyenxe = await JSON.parse(response)[0];

    var checkArr;
    const checkedString = chuyenxe.checked;
    if (checkedString !== "") {
        checkArr = checkedString.split(",");
        checkArr = checkArr.map((i) => parseInt(i));
    } else checkArr = [];

    const timeStamp = chuyenxe.ngaykhoihanh;
    const date = new Date(timeStamp);
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });

    const newData = await {
        id: chuyenxe.id,
        start: chuyenxe.tpdi, //sai gon
        end: chuyenxe.tpden,
        nhaxe: chuyenxe.tennhaxe,
        price: chuyenxe.giave,
        startDes: chuyenxe.diemdonsdi.split(","),
        endDes: chuyenxe.diemdonsden.split(","),
        date: formattedDate,
        timeStart: chuyenxe.tgkhoihanh,
        timeEnd: chuyenxe.tgketthuc,
        img: "https://plus.unsplash.com/premium_photo-1661760200219-6bfe3f0d72a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        type: chuyenxe.type,
        checked: checkArr,
        description: chuyenxe.motachinhsach,
    };

    await res.render("Pages/Booking-details", {
        title: "Booking-details",
        data: newData,
    });
});

module.exports = router;