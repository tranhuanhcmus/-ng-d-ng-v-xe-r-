var express = require('express');
var router = express.Router();
const controller = require('../controllers/Booking-detailsController');



router.get('/', function (req, res, next) {
  controller.showlist(req, res)
});


module.exports = router;