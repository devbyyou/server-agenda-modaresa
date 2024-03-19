const express = require('express');

const { buyersControllers: controller } = require('../../controllers/api');
const router = express.Router();

router
    .route('/')
    /**
     * GET /api/buyers
     */
    .get(controller.getAll)
    /*
     * POST /api/buyers
     */
    .post(controller.createBuyers);

router
    .route('/:id(\\d+)')
    /**
     * GET /api/buyers/{id}
     */
    .get(controller.getById)
    /**
     * PATCH /api/buyers/{id}
     */
    .patch(controller.updateBuyers)
    /**
     * DELETE /api/buyers/{id}
     */
    .delete(controller.deleteBuyers);

// router
//     .route('/category/:id(\\d+)')
//     /**
//      * GET /api/buyers/category/{id}
//      */
//     .get(controller.getByCategoryId);

module.exports = router;