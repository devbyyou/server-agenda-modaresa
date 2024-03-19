const { Buyers } = require('../../models');

const buyersControllers = {
   getAll: async (req, res) => {
      try {
         const buyers = await Buyers.findAll();
         res.json(buyers);
       } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Erreur lors de la récupération des acheteurs' });
       }
   },
   createBuyers: async (req, res) => {
      try {
         const { name, company_name } = req.body;
         const newBuyer = await Buyers.create({ name, company_name });
         res.status(201).json(newBuyer);
       } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Erreur lors de la création d\'un nouvel acheteur' });
       }
   },
   getById: async (req, res) => {
      const { id } = req.params;
      try {
        const buyers = await Buyers.findByPk(id);
        if (!buyers) {
          return res.status(404).json({ error: 'buyers not found' });
        }
        res.status(200).json(buyers);
      } catch (error) {
        console.error('Error getting buyers by ID:', error);
        res.status(500).json({ error: 'Failed to get buyers by ID' });
      }
   },

   updateBuyers: async (req, res) => {
      try {
         const { id } = req.params;
         const { name, company_name } = req.body;
         const updatedBuyer = await Buyers.findByPk(id);
         if (!updatedBuyer) {
           return res.status(404).json({ message: 'Acheteur non trouvé' });
         }
         updatedBuyer.name = name;
         updatedBuyer.company_name = company_name;
         await updatedBuyer.save();
         res.json(updatedBuyer);
       } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'acheteur' });
       }
   },

   deleteBuyers: async (req, res) => {
      try {
         const { id } = req.params;
         const deletedBuyer = await Buyers.findByPk(id);
         if (!deletedBuyer) {
           return res.status(404).json({ message: 'Acheteur non trouvé' });
         }
         await deletedBuyer.destroy();
         res.json({ message: 'Acheteur supprimé avec succès' });
       } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Erreur lors de la suppression de l\'acheteur' });
       }
   },
};

module.exports = buyersControllers;
