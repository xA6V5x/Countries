const { Activity } = require('../db')

// const { Router } = require('express');
// const router = Router();
const router = require('express').Router();


router.post('/', async function (req, res, next){
    // Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
    const {name, difficulty, length, season } = req.body;
    try {
        // Crea una actividad turística en la base de datos
        const newActivity = await Activity.create({
            name: name,
            difficulty: difficulty,
            length: length,
            season: season,
        })
        res.send(`La actividad "${newActivity.name}" a sido creada correctamente.`)
    } catch (error) {
        next(error);
    }
})

module.exports = router;
