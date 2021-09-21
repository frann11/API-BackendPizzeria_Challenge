// pizzas tienen {nombre: , precio:, ingredientes:[]}
// varias pizzas pueden estar en distintos pedidos
const Sequelize  = require('sequelize');
const db = require('../config/db');
const Ingredientes = require('./Ingredientes');
const Pedidos = require('./Pedidos');


const Pizzas = db.define('pizza', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    nombre: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.INTEGER
    },
    // total: {
    //     type: Sequelize.INTEGER,
        
    // },
    
})
    



module.exports = Pizzas;


// let pedidos = []

// // pedidos {usuario tanto:, pidio tanto:, monto:}
// const pizzas =[
//     {
//       "name": "Margherita",
//       "price": 5,
//       "ingredients": [
//         "tomato",
//         "mozzarella"
//       ]
//     },
//     {
//       "name": "Bufala",
//       "price": 6,
//       "ingredients": [
//         "tomato",
//         "mozarella di bufala"
//       ]
//     },
//     {
//       "name": "Romana",
//       "price": 5,
//       "ingredients": [
//         "tomato",
//         "mozzarella",
//         "anchovies",
//         "oregano",
//         "oil"
//       ]
//     },
//     {
//       "name": "Diavola",
//       "price": 7.5,
//       "ingredients": [
//         "tomato",
//         "mozzarella",
//         "spicy salami"
//       ]
//     },
//     {
//       "name": "Pizza Bianca",
//       "price": 5,
//       "ingredients": [
//         "mozzarella",
//         "oregano"
//       ]
//     }
//   ]
  
//   module.exports = {pizzas, pedidos}
  