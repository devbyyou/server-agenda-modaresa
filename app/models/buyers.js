const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Buyers extends Model {}

Buyers.init(
    {
        buyer_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: DataTypes.STRING(100),
            allowNull: false
          },
          company_name: {
            type: DataTypes.STRING(255),
            allowNull: false
          },
    },
    {
        sequelize,
        tableName: 'buyers', 
        timestamps: false, 
        underscored: true, 
    },
);

module.exports = Buyers;
