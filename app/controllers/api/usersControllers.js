const { Users } = require('../../models');


const usersControllers = {
 
   getAll: async (req, res) => {
      try {
         const users = await Users.findAll();
         res.json(users);
       } catch (error) {
         res.status(500).json({ message: error.message });
       }
   },
}

module.exports = usersControllers;
