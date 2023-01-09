var express = require("express");
var router = express.Router();

const title = "HomePage";
const user = "Huan";

router.get("/", function(req, res, next) {
    res.render("Pages/homePage", { title, user });
});

module.exports = router;