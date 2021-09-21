// id, usuario qque hizo el pedido, pizzas [varias] , total
// pedido puede tener varias pizzas

const Sequelize  = require('sequelize');
const db = require('../config/db');


const Detalles_Pedidos = db.define('detalles_pedido', {
    cantidad: {
        type: Sequelize.INTEGER,
    }
    ,
    // total: {
    //     type: Sequelize.INTEGER,
        
    // },
    // cantidad: {
    //     type: Sequelize.INTEGER
    // },
    subtotal: {
        type: Sequelize.INTEGER
    },

})
    



module.exports = Detalles_Pedidos;