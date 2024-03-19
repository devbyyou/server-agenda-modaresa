const express = require('express');

const { appointmentsControllers: controller } = require('../../controllers/api');
const router = express.Router();

router
    .route('/')
    /**
     * GET /api/appointments
     */
    .get(controller.getAppointments)
    /*
     * POST /api/appointments
     */
    .post(controller.createAppointment);

router
    .route('/:id(\\d+)')
    /**
     * GET /api/appointments/{id}
     */
    .get(controller.getAppointmentById)
    /**
     * PATCH /api/appointments/{id}
     */
    .put(controller.updateAppointmentById)
    /**
     * DELETE /api/appointments/{id}
     */
    .delete(controller.deleteAppointmentById);

// router
//     .route('/category/:id(\\d+)')
//     /**
//      * GET /api/appointments/category/{id}
//      */
//     .get(controller.getByCategoryId);

module.exports = router;