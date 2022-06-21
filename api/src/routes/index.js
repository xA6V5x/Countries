const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./Countries')
const activity = require('./activity')

const axios = require('axios');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/Countries', countries)
router.use('/Activity', activity)

module.exports = router;
 