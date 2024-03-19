const Appointments = require('./appointments');
const Vendors = require('./vendors');
const Buyers = require('./buyers');
const Users = require('./users.js');

Appointments.belongsTo(Vendors, { foreignKey: 'host_id' });
Appointments.belongsTo(Buyers, { foreignKey: 'client_id' });
Vendors.hasMany(Appointments, { foreignKey: 'host_id' });
Buyers.hasMany(Appointments, { foreignKey: 'client_id' });

Vendors.belongsTo(Users, { foreignKey: 'user_id' });
Buyers.belongsTo(Users, { foreignKey: 'user_id' });

module.exports = {
   Appointments,
   Vendors,
   Buyers,
   Users,
};
