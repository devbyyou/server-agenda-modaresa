const express = require('express');

const vendorsRouter = require('./vendors');
const buyersRouter = require('./buyers');
const appointmentsRouter = require('./appointments');
const usersRouter = require('./users');
const { apiController } = require('../../controllers/api');

// const { ApiError } = require('../../helpers/errorHandler');

const router = express.Router();

// Route par défaut de l'API, ici on la configure pour toutes les méthodes
// afin de donner l'information en cas d'oubli de spéfication de la route par l'utilisateur
router.all('/', apiController.home);

// On préfixe les routers de l'API
router.use('/vendors', vendorsRouter);
router.use('/buyers', buyersRouter);
router.use('/appointments', appointmentsRouter);
router.use('/users', usersRouter);


router.use((err) => {
    // throw new ApiError('API Route not found', { statusCode: 404 });
    console.error(err);
});

module.exports = router;