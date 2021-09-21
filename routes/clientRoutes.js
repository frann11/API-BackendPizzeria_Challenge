
///hacer pedido
/// hacer pago de pedidos
/// ver pedidos propios
// eliminar o editar pedido segun estado

///
const express = require('express')
var server = express();
var clienteController = require('../controllers/pedidosController')


////{"name":"Pizza Bianca","price":5,"ingredients":["mozzarella","oregano"]}]///
module.exports = () => {


    server.get('/', clienteController.verPedido)
    server.get('/:id', clienteController.verPedido)
    server.post('/', clienteController.hacerPedido) // muestra pedidos por el momento
    
    return server
    }
    
    
