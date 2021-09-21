const { Sequelize } = require('sequelize');
const express = require('express')

const routes = require('./routes/index')
//importar las variables
require('dotenv').config({ path: 'variables.env'})

//crear conexion a BD
const db = require('./config/db');
const { request } = require('http');

//importar el modelo y sus relaciones
const {Clientes} = require('./models/Clientes')
const Pedidos = require('./models/Pedidos')
const Pizzas = require('./models/Pizzas')
const Ingredientes = require('./models/Ingredientes')
const Detalles_Pedido = require('./models/Detalles_Pedidos')
const {crearPizzas} = require('./controllers/pizzasController')

Pedidos.belongsTo(Clientes)
//Pedidos.hasMany(Pizzas)
Pedidos.belongsToMany(Pizzas, { through: Detalles_Pedido })
Pizzas.belongsToMany(Pedidos, { through: Detalles_Pedido })
//Pizzas.hasMany(Ingredientes)

Pizzas.belongsToMany(Ingredientes, { through: 'Pizza_Ingredientes'  }) 
Ingredientes.belongsToMany(Pizzas, { through: 'Pizza_Ingredientes'  }) 





db.sync({force:true})
//db.sync()
    .then ( () => crearPizzas())
    .then(() => console.log('conectado al servidor'))
    .catch(error => console.log(error))



var server = express();
////{"name":"Pizza Bianca","price":5,"ingredients":["mozzarella","oregano"]}]///

let pedidos = []
let orden = {}
let id = 1

server.use(express.urlencoded({extended: true})); 
server.use(express.json());
server.use('/', routes())
/// ver pedidos

/// cambiar pedido
/// eliminar pedido



server.listen(3000);
module.exports = { server };
