const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Stagiaires extends Model {}
Stagiaires.init( 
 {
 id_stagiaires: { 
 type: DataTypes.INTEGER,
 primaryKey: true, 
 autoIncrement: true,
 },
 nom: {
 type: DataTypes.STRING(255),
 allowNull: false,
 },
 prenom: {
 type: DataTypes.STRING(255),
 allowNull: false,
 },
 age : {
 type: DataTypes.INTEGER,
 allowNull: false,
 },
 },
 {
 sequelize, 
 tableName: 'stagiaires', 
 timestamps: false,
 }
);
module.exports = Stagiaires;
