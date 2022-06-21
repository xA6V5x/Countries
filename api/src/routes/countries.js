// const { Router } = require('express');
// const router = Router();
const router = require('express').Router();
const axios = require('axios');
const { Country } = require('../db');

const { getAllCountries } = require("../controllers/Countries");
// GET https://restcountries.com/v3/alpha/{code}

// [ ] GET /countries:
// GET https://restcountries.com/v3/all
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.
router.get('/', async function (req, res, next) {
    const name = req.query.name;
    try {
        let allCountries = await getAllCountries();
        //return res.json(allCountries);
        if (name) {
            let nameCountry = await allCountries.filter((country) =>
                country.name.toLowerCase().includes(name.toLowerCase())
            );
            nameCountry.length ? res.send(nameCountry) : res.send("No se encuentra el país requerido");
        } else {
            res.json(allCountries);
        }
    } catch (error) {
        res.json(error, "El país ingresado no existe");
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



// [ ] GET /countries?name="...":
// GET https://restcountries.com/v3/name/{name}
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado
router.get('/', async function (req, res) {
    const name = req.query.name;
    console.log(name)
    try {
        const country = await Country.findAll({ where: { name: name } })
        return res.json(country)
    } catch (error) {
        console.log(error)
    }
    //  const name = req.query.name;
    //  try {
    //     const getApi = await axios.get(`https://restcountries.com/v3/name/${name}`);
    //     const country = getApi.data.map(async (data) => {
    //         const [findCountry, create] = await Country.findOrCreate({
    //             where: {
    //                 id: data.cca3,
    //                 name: data.name.common,
    //                 flags: data.flags[1] ? data.flags[1] : data.flags[0],
    //                 continents: data.continents[0],
    //                 capital: data.capital ? data.capital[0] : "This country don't Capital",
    //                 subregion: data.subregion ? data.subregion[0] : "This country don't have subregion",
    //                 area: data.area,
    //                 population: data.population,
    //                 lat: data.latlng[0],
    //                 lng: data.latlng[1]
    //             }
    //         });
    //         return findCountry;
    //     });
    //     const result = await Promise.all(country);
    //     return res.json(result)
    //  }catch (error) {
    //     res.json(error, "El país ingresado no existe")
    //  }
})


module.exports = router;