

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newdiemdon = await models.Diemdon(req.body);
            await newdiemdon.save();
            res.status(200).json(newdiemdon);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const diemdon = await models.Diemdon.findAll();
            res.status(200).json(diemdon);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào id thành phố 
    findOne: async (req, res) => {

        try {
            const diemdon = await models.Diemdon.findAll(
                {
                    where:
                        { thanhphoId: req.params.tenthanhpho }// tìm điểm đón theo id thành phố 
                },
                {
                    include: Thanhpho,
                }
            );
            res.status(200).json(diemdon);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    findByPk: async (req, res) => {

        try {
            const diemdon = await models.Diemdon.findByPk(req.params.iddiemdon)
            res.status(200).json(diemdon);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const diemdon = await models.Diemdon.destroy({
                where: { id: req.params.diemdon }
            })
            res.status(200).json(diemdon);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const diemdon = await models.Diemdon.update(
                {
                    name: req.params.name
                }, {
                where: { id: req.params.iddiemdon }
            })
            res.status(200).json(diemdon);
        } catch (err) {
            res.status(500).json(err);
        }
    },



}
module.exports = controller;
