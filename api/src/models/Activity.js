const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        // ID(dejo que sequelize lo genere por defecto)
        //Nombre
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // Dificultad (Entre 1 y 5)
        difficulty: {
            type: DataTypes.INTEGER,
        },
        // Duración
        length: {
            type: DataTypes.STRING,
        },
        // Temporada (Verano, Otoño, Invierno o Primavera)
        season: {
            type: DataTypes.STRING,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
      });
};