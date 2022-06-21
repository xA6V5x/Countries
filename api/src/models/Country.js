const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    //ID (Código de 3 letras) *
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      unique: true,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Imagen de la bandera *
    flags: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Continente *
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Capital *
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Subregión
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Área
    area: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    // Población
    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lat:{
      type: DataTypes.FLOAT,
    },
    lng:{
      type: DataTypes.FLOAT,
    }
  },{
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });;
};
