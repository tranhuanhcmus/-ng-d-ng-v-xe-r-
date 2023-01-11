const title = 'Testdatabase';
const models = require('../models');

const controller ={
    create: async (req, res) => {
        try {
          const phieuxe = await models.Phieuxe.create(req.body);
          res.status(201).json(phieuxe);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
      },
      
      findAll: async (req, res) => {
          try {
            const phieuxe = await models.Phieuxe.findAll();
            res.status(200).json(phieuxe);
          } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
          }
      },
      
      findByPk: async (req, res) => {
        try {
          const phieuxe = await models.Phieuxe.findByPk(req.params.id);
          if (!phieuxe) return res.status(404).json({ message: 'Phieuxe not found' });
          res.status(200).json(phieuxe);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
        }
      },
      update: async (req, res) => {
        try {
          const phieuxe = await models.Phieuxe.findByPk(req.params.id);
          if (!phieuxe) {
            res.status(404).json({ message: 'Phieuxe not found' });
          } else {
            await phieuxe.update(req.body);
            res.status(200).json(phieuxe);
          }
        } catch (err) {
          res.status(500).json(err);
        }
        },
  
      delete: async (req, res) => {
          try {
            // Find the Nhaxe by its primary key
            const phieuxe = await models.Phieuxe.findByPk(req.params.id);
            
            // If no Nhaxe is found, return a 404
            if (!phieuxe) return res.status(404).json({ message: 'Phieuxe not found' });
      
            // Delete the Nhaxe
            await phieuxe.destroy();
            res.status(200).json({ message: 'Phieuxe deleted successfully' });
          } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
          }
      }
}

module.exports = controller;