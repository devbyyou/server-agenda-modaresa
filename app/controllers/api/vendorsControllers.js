const { Vendors } = require('../../models');


const vendorsControllers = {
   createVendors: async (req, res) => {
      try {
         const vendor = await Vendors.create(req.body);
         res.status(201).json(vendor);
       } catch (error) {
         res.status(400).json({ message: error.message });
       }
   },
   getAll: async (req, res) => {
      try {
         const vendors = await Vendors.findAll();
         res.json(vendors);
       } catch (error) {
         res.status(500).json({ message: error.message });
       }
   },
   getById: async (req, res) => {
      const { id } = req.params;
      try {
        const vendor = await Vendors.findByPk(id);
        if (!vendor) {
          return res.status(404).json({ message: 'Vendeur non trouvé' });
        }
        res.json(vendor);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
   },

   updateVendors: async (req, res) => {
      const { id } = req.params;
  try {
    const [updated] = await Vendors.update(req.body, {
      where: { vendor_id: id }
    });
    if (updated) {
      const updatedVendor = await Vendors.findByPk(id);
      return res.json(updatedVendor);
    }
    throw new Error('Vendeur non trouvé');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
   },
   deleteVendors: async (req, res) => {
      const { id } = req.params;
  try {
    const deleted = await Vendors.destroy({
      where: { vendor_id: id }
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Vendeur non trouvé' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
   },

};

module.exports = vendorsControllers;
