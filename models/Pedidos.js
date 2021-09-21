// id, usuario qque hizo el pedido, pizzas [varias] , total
// pedido puede tener varias pizzas

const Sequelize  = require('sequelize');
const db = require('../config/db');
const {Clientes} = require('./Clientes')
const Pizzas = require('./Pizzas')


const Pedidos = db.define('pedido', {
    orden: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    }
    ,
  
    total: {
        type: Sequelize.INTEGER
    }
})
    



module.exports = Pedidos;