const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Users extends Model {}

Users.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: DataTypes.STRING(100),
            allowNull: false
          }
    },
    {
        sequelize,
        tableName: 'users', 
        timestamps: false, 
        underscored: true, 
    },
);

module.exports = Users;
