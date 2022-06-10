const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('country', {
        // ID
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Dificultad (Entre 1 y 5)
        // Duración
        // Temporada (Verano, Otoño, Invierno o Primavera)
    });
};