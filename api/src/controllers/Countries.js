const axios = require('axios');
const { Country } = require('../db');

const getCountriesApi = async () => {
    const getApi = await axios.get('https://restcountries.com/v3/all');
    const countries = getApi.data.map(async (data) => {
        return {
            id: data.cca3,
            name: data.name.common,
            flags: data.flags[1] ? data.flags[1] : data.flags[0],
            continents: data.continents[0],
            capital: data.capital ? data.capital[0] : "This country don't Capital",
            subregion: data.subregion ? data.subregion[0] : "This country don't have subregion",
            area: data.area,
            population: data.population,
            lat: data.latlng[0],
            lng: data.latlng[1]
        }
    });
    const result = await Promise.all(countries);
    return result;
};

const getAllCountriesBD = async () => {
    const getApi = await axios.get('https://restcountries.com/v3/all');
    const countries = getApi.data.map(async (data) => {
        const [findCountrys, create] = 
        await Country.findOrCreate({
            where: {
                id: data.cca3,
                name: data.name.common,
                flags: data.flags[1] ? data.flags[1] : data.flags[0],
                continents: data.continents[0],
                capital: data.capital ? data.capital[0] : "This country don't Capital",
                subregion: data.subregion ? data.subregion[0] : "This country don't have subregion",
                area: data.area,
                population: data.population,
                lat: data.latlng[0],
                lng: data.latlng[1]
            }
        });
        return findCountrys;
    });
    const result = await Promise.all(countries);
    return result;
};

module.exports = {
    getCountriesApi,
    getAllCountriesBD,
};