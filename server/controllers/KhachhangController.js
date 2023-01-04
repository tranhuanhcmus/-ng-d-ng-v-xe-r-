

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newkhachhang = await models.Khachhang(req.body);
            await newkhachhang.save();
            res.status(200).json(newkhachhang);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const khachhang = await models.Khachhang.findAll();
            res.status(200).json(khachhang);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe

    findByPk: async (req, res) => {

        try {
            const khachhang = await models.Khachhang.findByPk(req.params.idbenxe)
            res.status(200).json(khachhang);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const khachhang = await models.Khachhang.destroy({
                where: { id: req.params.benxe }
            })
            res.status(200).json(benxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const khachhang = await models.Khachhang.update(
                {
                    ten: req.params.ten,
                    sdt: req.params.sdt,
                    email: req.params.email
                }, {
                where: { id: req.params.idkhachhang }
            })
            res.status(200).json(khachhang);
        } catch (err) {
            res.status(500).json(err);
        }
    },



}
module.exports = controller;
