/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app'); 
const { Appointments } = require('../models');

describe('Appointments Controller', () => {
  beforeEach(async () => {
    await Appointments.destroy({ where: {} });
  });
  it('should create a new appointment', async () => {
    const newAppointment = {
      appointmentType: 'virtual',
      date: '2024-03-18',
      description: 'Test appointment',
      duration: 30,
      time: '10:00',
      location: null,
      participantType: 'buyers',
    };
    const response = await request(app)
      .post('/appointments')
      .send(newAppointment);
    expect(response.status).toBe(201);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(1);
    expect(response.body[0].title).toBe(newAppointment.description); 
  });

  it('should get all appointments', async () => {
    await Appointments.bulkCreate([
      { title: 'test' },
      { title: 'test' },
    ]);
    const response = await request(app).get('/appointments');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(2);
  });
});
