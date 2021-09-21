const {Clientes} = require('./Clientes')
const Pedidos = require('./Pedidos')
const Pizzas = require('./Pizzas')
const Ingredientes = require('./Ingredientes')

const relacionesDB = () => { Clientes.hasMany(Pedidos)
Pedidos.belongsTo(Clientes)
//Pedidos.hasMany(Pizzas)
Pedidos.belongsToMany(Pizzas, {as:'pedido', through: 'Pedido_Pizzas' })
Pizzas.belongsToMany(Pedidos, {as:'pizza', through: 'Pedido_Pizzas' })
//Pizzas.hasMany(Ingredientes)
const Pizza_Ingredientes = sequelize.define('Pizza_Ingredientes', { timestamps: false });
Pizzas.belongsToMany(Ingredientes, {as:'pizza', through: Pizza_Ingredientes  }) 
Ingredientes.belongsToMany(Pizzas, {as:'ingrediente', through: Pizza_Ingredientes  }) 

}

module.exports= relacionesDB
