

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newchuyenxe = await models.Chuyenxe.create(
                {
                    motachinhsach: req.body.motachinhsach,
                    src: req.body.src,
                    giave: req.body.giave,
                    xeId: req.body.xeId,
                    nhaxeId: req.body.nhaxeId,
                    thanhphodiId: req.body.thanhphodiId,
                    thanhphodenId: req.body.thanhphodenId
                },
            );
            newchuyenxe.save();

            res.status(200).json(newchuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const chuyenxe = await models.Chuyenxe.findAll();
            // res.status(200).json(benxe);
            res.json(chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe

    findByPk: async (req, res) => {

        try {
            const chuyenxe = await models.Chuyenxe.findByPk(req.params.idchuyenxe)
            res.status(200).json(chuyenxe);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const chuyenxe = await models.Chuyenxe.destroy({
                where: { id: req.params.idchuyenxe }
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
                    motachinhsach: req.body.motachinhsach,
                    src: req.body.src,
                    giave: req.body.giave,
                    xeId: req.body.xeId,
                    nhaxeId: req.body.nhaxeId,
                    thanhphodiId: req.body.thanhphodiId,
                    thanhphodenId: req.body.thanhphodenId
                }, {
                where: { id: req.params.idchuyenxe },

            })
            res.status(200).json(chuyenxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}
module.exports = controller;
