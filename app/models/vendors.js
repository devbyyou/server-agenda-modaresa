const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Vendors extends Model {}

Vendors.init(
    {
        vendor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: DataTypes.STRING(100),
            allowNull: false
          },
    },
    {
        sequelize,
        tableName: 'vendors', 
        timestamps: false, 
        underscored: true, 
    },
);

module.exports = Vendors;
