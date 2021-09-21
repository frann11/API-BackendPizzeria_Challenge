/// usuario {rol: cliente/empleado, pedidos: [{}] (si es cliente), usuario: , password: , pago:}
// por el momento cliente tiene: pedidos [{}]

///// se hace pedido -----> se confirma pedido -----> se agrega a pedidos del cliente [{}]
//// pedidos se muestran por orden

const Sequelize = require('sequelize');
const db = require('../config/db');
const Pedidos = require('./Pedidos')

let pedidos = []
let id = 1

const Clientes = db.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    direccion:{
        type: Sequelize.STRING,
        unique: {
            args: true   
        }
    }
})


module.exports = {Clientes, pedidos, id}
