var express = require('express');
var router = express.Router();
const controller = require('../controllers/NhaxeController');

router.post('/', function (req, res, next){
    NhaxeController.create
});
router.get('/', function (req, res, next){
    NhaxeController.findAll
});
router.get('/:tennhaxe', function (req, res, next){
    NhaxeController.findOne
});
router.get('/:id', function (req, res, next){
    NhaxeController.findByPk
});
router.put('/:id', function (req, res, next){
    NhaxeController.update
});
router.delete('/:id', function (req, res, next){
    NhaxeController.delete
});

module.exports = router;