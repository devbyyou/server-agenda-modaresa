const { Op } = require('sequelize');
const { Appointments } = require('../../models');

const appointmentsControllers = {
  createAppointment: async (req, res) => {
    const {
      appointmentType,
      date,
      description,
      duration,
      time,
      location,
      participantType,
    } = req.body;
    let host_id;
    let client_id;
    let customer = "";
// Il faut que j'inscris si le buyers "champs cliqué" ajoute une entité customer = buyers
    if (participantType === "buyers") {
      client_id = 1;
      customer = "HOST";
    } else {
      client_id = 2;
      customer = "CLIENT";
    }
    if (appointmentType === "virtual") {
      host_id = 1;
    } else {
      host_id = 2;
    }
    const startTime = new Date(`${date}T${time}`);
    const endTime = new Date(startTime.getTime() + (duration * 60000));
    try {

      const conflictingAppointment = await Appointments.findOne({
        where: {
          [Op.and]: [
            { host_id: host_id },
            { start_time: { [Op.lte]: startTime } },
    
            { end_time: { [Op.gte]: endTime } },
          ],
        },
      });

      // console.log('conflictingAppointment', conflictingAppointment);

      if (!conflictingAppointment) {
        console.log('Le rendez-vous est déjà pris !');
        throw new Error('Le rendez-vous est déjà pris.');
      }

      const newAppointment = await Appointments.create({
        title: description,
        type: appointmentType,
        location: appointmentType === 'physical' ? location : null,
        start_time: startTime,
        end_time: endTime,
        client_id,
        host_id,
        customer,
      });
      // const appointments = await Appointments.findAll();

      res.status(201).json([newAppointment]);
    } catch (error) {
      console.error('Error creating appointment:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getAppointments: async (req, res) => {
    try {
      const appointments = await Appointments.findAll();
      res.status(200).json(appointments);
    } catch (error) {
      console.error('Error getting appointments:', error);
      res.status(500).json({ error: 'Failed to get appointments' });
    }
  },
  getAppointmentById: async (req, res) => {
    const { id } = req.params;
    try {
      const appointment = await Appointments.findByPk(id);

      if (!appointment) {
        return res.status(404).json({ error: 'Appointments not found' });
      }
      res.status(200).json(appointment);
    } catch (error) {
      console.error('Error getting appointment by ID:', error);
      res.status(500).json({ error: 'Failed to get appointment by ID' });
    }
  },

  updateAppointmentById: async (req, res) => {
    const { id:appointment_id } = req.params;
    const {
      appointmentType,
      date,
      description,
      duration,
      time,
      location,
      participantType,
    } = req.body;
    try {
      const updated = await Appointments.findByPk(appointment_id);
      console.log('description', description);

      if (!updated) {
         res.status(404).json({ message: 'updated non trouvée.' });
      } else {
         const updatedFields = {};
         if (appointmentType) updatedFields.appointmentType = appointmentType;
         if (date) updatedFields.date = date;
         if (description) updatedFields.title = description;
         if (duration) updatedFields.duration = duration;
         if (time) updatedFields.time = time;
         if (location) updatedFields.location = location;
         if (participantType) updatedFields.participantType = participantType;

         await updated.update(updatedFields);
         res.status(201).json([updated]);
      }
      // throw new Error('Appointments not found');
    } catch (error) {
      console.error('Error updating appointment by ID:', error);
      res.status(500).json({ error: 'Failed to update appointment by ID' });
    }
  },
  
  deleteAppointmentById: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Appointments.destroy({
        where: { appointment_id: id }
      });
      
      if (deleted) {
        const appointments = await Appointments.findAll();
        res.status(204).json(appointments);
      } else {
        throw new Error('Appointments not found');
      }
    } catch (error) {
      console.error('Error deleting appointment by ID:', error);
      res.status(500).json({ error: 'Failed to delete appointment by ID' });
    }
  },

};

module.exports = appointmentsControllers;
