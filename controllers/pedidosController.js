let {pizzas} = require('../models/Pizzas')
const server = require('express')
const Pizzas = require('../models/Pizzas')
const Pedidos = require('../models/Pedidos')
let {pedidos, id} = require('../models/Clientes')
const Detalles_Pedido = require('../models/Detalles_Pedidos')
const {Clientes} = require('../models/Clientes')
const Detalles_Pedidos = require('../models/Detalles_Pedidos')
//const saludo = (req,res) => res.send(pizzas)

/// pedido = {pedido: [ [margarita x 2 $5 c/u] ] --- , total: ---}
/// capaz que asi se vean los pedidos? 


///////// solo puedo ver mi pedido si soy usuario, y si soy empleado puedo ver todos
const verPedido = async function(req,res){
    let id = req.params.id || undefined
    pedidos =  await Pedidos.findAll()
    if (id != undefined){
        return (pedidos.find((x) => x['IdPedido'] == id) != undefined ? res.json(pedidos.find((x) => x['IdPedido'] == req.params.id)) : res.status(400).json('no hay pedidos con ese id')  )  
    }
    if (pedidos.length == 0){
        return res.status(402).json('no hay pedidos para mostrar')
    }
    const wen = await Detalles_Pedidos.findAll({include: [{model:Clientes}]})
    return res.json(wen)
}

const hacerPedido = async function(req,res){
    console.log(req.body.pedido)
    var direccion = req.body.direccion || 'debenedetti'
    console.log(direccion)
    const cliente = await Clientes.findOne({where:{direccion}}) || await Clientes.create({direccion}) 

    var pedido = {}
    let total = 0

    for (p of req.body.pedido){ /// voy borrando del pedido y agregando a la lista {}
        if (!pedido.hasOwnProperty(p)){
            pedido[p] = {cantidad: 1}}
            else pedido[p].cantidad = pedido[p].cantidad+1
    }

        const pedidos = await Pedidos.create({clienteId : cliente.id})    
        console.log(pedido)
    for (p in pedido){
        console.log(p)
        const s = (await Pizzas.findOne({where: {nombre : p}}))
        let precio = s.precio
        pedido[p]['precio unitario'] = precio
        let cantidad = pedido[p]['cantidad']
        let subtotal = precio * cantidad
        pedido[p]['subtotal'] =  subtotal
        total = total + subtotal
        pedidos.addPizzas(s, { through: { cantidad,subtotal }})
        console.log(cantidad,'cantidad')
        // const modificar = await Detalles_Pedido.findOne({where:{pedidoOrden:1} })
        // console.log(modificar)
        // modificar.update({cantidad:cantidad})
        // modificar.update({subtotal})
      //  await modificar.save()
       
        
    }
        pedidos.total = total
        await pedidos.save()
        
    pedido['total'] = total
    pedido['IdPedido'] = id++

    //pedidos.push(pedido)

    console.log(pedido)
    for (f in pedido){
        console.log(pedido[f])
    }

    return res.json(pedido)

    // {cliente: -- , idpedido: -- pedido: [ [margarita x 2 $5 c/u] ] --- , total: ---}
}

const eliminarPedido = async function(req,res) {
    await Pedidos.destroy({where:{id: req.body.id}})
}

module.exports = {hacerPedido , verPedido, eliminarPedido}
    