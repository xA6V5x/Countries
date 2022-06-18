const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./countries')
const activity = require('./activity')

const axios = require('axios');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countries)
router.use('/activity', activity)

router.get("/", async (req, res) => {
    const api = await axios("https://restcountries.com/v3/all")
    res.json(api.data);
});

module.exports = router;
 