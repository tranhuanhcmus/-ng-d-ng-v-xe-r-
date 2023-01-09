

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newbenxe = await models.Benxe.create(
                {
                    tenbenxe: req.body.tenbenxe,
                    sdth: req.body.sdth,
                    diachi: req.body.diachi,
                    thanhphoId: req.body.thanhphoId
                },
            );
            newbenxe.save();
            res.status(200).json(newbenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const benxe = await models.Benxe.findAll();
            // res.status(200).json(benxe);
            res.json(benxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe

    findByPk: async (req, res) => {

        try {
            const benxe = await models.Benxe.findByPk(req.params.idbenxe)
            res.status(200).json(benxe);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const benxe = await models.Benxe.destroy({
                where: { id: req.params.idbenxe }
            })
            res.status(200).json(benxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const benxe = await models.Benxe.update(
                {
                    tenbenxe: req.body.tenbenxe,
                    sdth: req.body.sdth,
                    diachi: req.body.diachi
                }, {
                where: { id: req.params.idbenxe },

            })
            res.status(200).json(benxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}
module.exports = controller;
