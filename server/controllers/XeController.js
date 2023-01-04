

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newxe = await models.Xe(req.body);
            await newxe.save();
            res.status(200).json(newxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const xe = await models.Xe.findAll();
            res.status(200).json(xe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    findByPk: async (req, res) => {

        try {
            const xe = await models.Xe.findByPk(req.params.idxe)
            res.status(200).json(xe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const xe = await models.Xe.destroy({
                where: { id: req.params.idxe }
            })
            res.status(200).json(xe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const benxe = await models.Xe.update(
                {
                    sl_ghe: req.params.slghe,
                    bsx: req.params.bsx
                }, {
                where: { id: req.params.idbenxe }
            })
            res.status(200).json(benxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },



}
module.exports = controller;
