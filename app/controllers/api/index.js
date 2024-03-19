const appointmentsControllers = require('./appointmentsControllers');
const buyersControllers = require('./buyersControllers');
const vendorsControllers = require('./vendorsControllers');
const usersControllers = require('./usersControllers.js');

const apiController = {
   home(req, res) {
      return res.json({
         message: 'Welcome to the API!',
      });
   },
};



module.exports = {
    appointmentsControllers,
    buyersControllers,
    vendorsControllers,
    apiController,
    usersControllers,
};
