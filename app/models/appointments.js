const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Appointment extends Model {}

Appointment.init(
  {
    appointment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('virtual', 'physical'),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    host_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'appointments',
    timestamps: false, 
    underscored: true
}
);




module.exports = Appointment;
