

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const ct_chuyenxe = await models.CT_Chuyenxe(req.body);
            await ct_chuyenxe.save();
            res.status(200).json(ct_chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const ct_chuyenxe = await models.CT_Chuyenxe.findAll();
            res.status(200).json(ct_chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findOne: async (req, res) => {

        try {
            const ct_chuyenxe = await models.CT_Chuyenxe.findOne(
                {
                    where:
                        { id: req.params.id }
                }
            );
            res.status(200).json(benxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    findByPk: async (req, res) => {

        try {
            const ct_chuyenxe = await models.Benxe.ct_chuyenxe(req.params.idct_chuyenxe)
            res.status(200).json(ct_chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const ct_chuyenxe = awaitmodels.CT_Chuyenxe.destroy({
                where: { id: req.params.ct_chuyenxe }
            })
            res.status(200).json(ct_chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const ct_chuyenxe = await models.CT_Chuyenxe.update(
                {
                    tgkhoihanh: req.params.tgkhoihanh,
                    tgketthuc: req.params.tgketthuc,
                    ngaykhoihanh: req.params.ngaykhoihanh,
                    stt: req.params.stt
                }, {
                where: { id: req.params.idct_chuyenxe }
            })
            res.status(200).json(ct_chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },



}
module.exports = controller;
