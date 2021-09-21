// ver menu
const express = require('express')
const server = express()
const {pizzas} = require('../models/Pizzas')
const {verPizzas} = require('../controllers/pizzasController')

module.exports = () => {
    server.get('/', verPizzas)
    return server
    }
    
    