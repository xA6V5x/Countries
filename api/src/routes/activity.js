const { Activity } = require('../db')

// const { Router } = require('express');
// const router = Router();
const router = require('express').Router();

// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos
router.post('/', async function (req, res, next){
    const {name, difficulty, length, season } = req.body;
    try {
        const newActivity = await Activity.create({
            name: name,
            difficulty: difficulty,
            length: length,
            season: season,
        })
        res.json(newActivity.name)
    } catch (error) {
        next(error);
    }
})

module.exports = router;
