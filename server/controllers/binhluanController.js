

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newbinhluan = await models.Binhluan(req.body);
            await newbinhluan.save();
            res.status(200).json(newbenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const binhluan = await models.Binhluan.findAll({
                where: { chuyenxeId: req.params.chuyenxeId }// tìm bình luận theo chuyến xe
            });
            res.status(200).json(binhluan);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    delete: async (req, res) => {

        try {
            const binhluan = await models.Binhluan.destroy({
                where: { id: req.params.benxe }
            })
            res.status(200).json(binhluan);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const binhluan = await models.Binhluan.update(
                {
                    noidung: req.params.noidung,
                    ten: req.params.ten,
                    rating: req.params.rating,
                    chuyenxeId: req.params.chuyenxeId,
                }, {
                where: { id: req.params.idbinhluan }
            })
            res.status(200).json(binhluan);
        } catch (err) {
            res.status(500).json(err);
        }
    },



}
module.exports = controller;
