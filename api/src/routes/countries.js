// const { Router } = require('express');
// const router = Router();
const router = require('express').Router();
const { Country } = require('../db');

const { getCountriesApi, getAllCountriesBD } = require("../controllers/Countries");


// [ ] GET /countries:
// GET https://restcountries.com/v3/all
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.
router.get('/', async function (req, res, next) {
    const name = req.query.name;
    try {
        let allCountries = await getAllCountriesBD();
        // [ ] GET /countries?name="...":
        // GET https://restcountries.com/v3/name/{name}
        // Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
        // Si no existe ningún país mostrar un mensaje adecuado
        if (name) {
            let nameCountry = await allCountries.filter((country) =>
                country.name.toLowerCase().includes(name.toLowerCase()));
            nameCountry.length ? res.send(nameCountry) : res.send("El país ingresado no existe");
        } else {
            return res.json(allCountries);
        }
    } catch (error) {
        next(error, "El país ingresado no existe");
    }
});


// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
router.get('/:idPais', async function (req, res) {
    try {
        const { idPais } = req.params;
        const country = await Country.findByPk(idPais)
        return res.json(country);
    } catch (error) {
        res.json(error);
    }
})


module.exports = router;