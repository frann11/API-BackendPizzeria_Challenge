const express = require('express')
var server = express();
var pedidosController = require('../controllers/pedidosController')
const pizzasRoutes = require('../routes/pizzasRoutes')
const clientRoutes = require('../routes/clientRoutes')
module.exports = () => {


server.use('/', clientRoutes()) /// pedidos
server.use('/api/pizzas', pizzasRoutes())

return server
}

