const express = require('express');

const { vendorsControllers: controller } = require('../../controllers/api');
const router = express.Router();

router
    .route('/')
    /**
     * GET /api/vendors
     */
    .get(controller.getAll)
    /*
     * POST /api/vendors
     */
    .post(controller.createVendors);

router
    .route('/:id(\\d+)')
    /**
     * GET /api/vendors/{id}
     */
    .get(controller.getById)
    /**
     * PATCH /api/vendors/{id}
     */
    .patch(controller.updateVendors)
    /**
     * DELETE /api/vendors/{id}
     */
    .delete(controller.deleteVendors);

// router
//     .route('/category/:id(\\d+)')
//     /**
//      * GET /api/vendors/category/{id}
//      */
//     .get(controller.getByCategoryId);

module.exports = router;