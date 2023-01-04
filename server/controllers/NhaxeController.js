

const title = 'Testdatabase';
const models = require('../models');

const controller = {

    create: async (req, res) => {

        try {
            const newnhaxe = await models.Nhaxe(req.body);
            await newnhaxe.save();
            res.status(200).json(newnhaxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async (req, res) => {

        try {
            const nhaxe = await models.Nhaxe.findAll();
            res.status(200).json(nhaxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //tim điểm đón dựa vào ten bến xe
    findOne: async (req, res) => {

        try {
            const nhaxe = awaitmodels.Nhaxe.findAll(
                {
                    where:
                        { tennhaxe: req.params.tennhaxe }
                },
            );
            res.status(200).json(nhaxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    findByPk: async (req, res) => {

        try {
            const nhaxe = await models.Nhaxe.findByPk(req.params.idnhaxe)
            res.status(200).json(nhaxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete: async (req, res) => {

        try {
            const nhaxe = await models.Nhaxe.destroy({
                where: { id: req.params.nhaxe }
            })
            res.status(200).json(nhaxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    update: async (req, res) => {

        try {
            const nhaxe = await models.Nhaxe.update(
                {
                    tennhaxe: req.params.tennhaxe,
                    sdth: req.params.sdth,
                    hinhanh: req.params.hinhanh
                }, {
                where: { id: req.params.idnhaxe }
            })
            res.status(200).json(nhaxe);
        } catch (err) {
            res.status(500).json(err);
        }
    },



}
module.exports = controller;
