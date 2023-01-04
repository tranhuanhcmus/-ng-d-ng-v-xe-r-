

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newchuyenxe = await models.Chuyenxe(req.body);
            await newchuyenxe.save();
            res.status(200).json(newchuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const chuyenxe = await models.Chuyenxe.findAll();
            res.status(200).json(chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe
    findOne: async (req, res) => {

        try {
            const chuyenxe = awaitmodels.Chuyenxe.findOne();
            res.status(200).json(chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    findByPk: async (req, res) => {

        try {
            const chuyenxe = awaitmodels.Chuyenxe.findByPk(req.params.idchuyenxe)
            res.status(200).json(chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const chuyenxe = awaitmodels.Chuyenxe.destroy({
                where: { id: req.params.chuyenxe }
            })
            res.status(200).json(chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const chuyenxe = await models.Chuyenxe.update(
                {
                    motachinhsach: req.params.motachinhsach,
                    src: req.params.src,
                    giave: req.params.giave,
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
