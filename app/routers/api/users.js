const express = require('express');

const { usersControllers: controller } = require('../../controllers/api');
const router = express.Router();

router
    .route('/')
    /**
     * GET /api/users
     */
    .get(controller.getAll);

    module.exports = router;