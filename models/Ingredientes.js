/// [id, ingrediente] no mucho mas

const Sequelize  = require('sequelize');
const db = require('../config/db');
const Pizzas = require('../models/Pizzas')


const Ingredientes = db.define('ingrediente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    nombre: {
        type: Sequelize.STRING
    }
    // total: {
    //     type: Sequelize.INTEGER,
        
    // },
    
})
    


module.exports = Ingredientes;
