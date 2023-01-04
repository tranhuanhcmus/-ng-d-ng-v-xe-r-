

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newct_phieuxe = await models.CT_Phieuxe(req.body);
            await newct_phieuxe.save();
            res.status(200).json(newct_phieuxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const ct_phieuxe = await models.CT_Phieuxe.findAll();
            res.status(200).json(ct_phieuxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe
    findOne: async (req, res) => {

        try {
            const ct_phieuxe = awaitmodels.CT_Phieuxe.findOne(
                {
                    where:
                        { id: req.params.id }
                },
            );
            res.status(200).json(ct_phieuxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    findByPk: async (req, res) => {

        try {
            const ct_phieuxe = awaitmodels.Benxe.findByPk(req.params.idct_phieuxe)
            res.status(200).json(ct_phieuxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const ct_phieuxe = await models.CT_Phieuxe.destroy({
                where: { id: req.params.ct_phieuxe }
            })
            res.status(200).json(ct_phieuxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const ct_phieuxe = await models.CT_Phieuxe.update(
                {
                    soghe: req.params.soghe,
                    sotang: req.params.sotang
                },
                {
                    where: { id: req.params.idct_phieuxe }
                })
            res.status(200).json(ct_phieuxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },



}
module.exports = controller;
