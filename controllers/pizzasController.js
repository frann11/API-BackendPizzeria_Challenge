///// ver pizzas
///// modificar pizza
///// agregar pizza
///// eliminar pizza

const Pizzas = require('../models/Pizzas')
const Ingredientes = require('../models/Ingredientes')
const pizzas = require ('../example-pizzas')

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



    ////// leo JSON
    //// hago un set con los ingredientes --> creo ingredientes en tabla
    //// creo pizzas y le 
    ///////////

const crearPizzas = async (req,res) => {
    const pizzasActuales = await Pizzas.findAll()
    console.log(pizzasActuales,'pizzas.leng')
    if (pizzasActuales.length == 0 ){
            for (nombre of pizzas){
        
                const pizza = await Pizzas.create({nombre: nombre.name, precio:nombre.price})
                for (ingredient of nombre.ingredients){
            
                    let ingrediente = await Ingredientes.findOne({where:{nombre:ingredient}})
                    if (ingrediente){
                        await pizza.addIngredientes(ingrediente.id,pizza.id)
                    }
                    else {
                        ingrediente = await Ingredientes.create({nombre:ingredient})
                        await pizza.addIngredientes(ingrediente)
                    }

                }
            }
        }
    }

    const verPizzas = async function(req,res) {
        const pizzas = await Pizzas.findAll({attributes:['nombre','precio'], include:[{model:Ingredientes, attributes:['nombre']}], raw:true, nested:true })

        let mostrar = []
        var id

        for (pizza of pizzas){
            
            if (id != pizza['ingredientes.Pizza_Ingredientes.pizzaId']){
                if (objeto != undefined){
                    mostrar.push(objeto)
                }
                var objeto = {nombre: pizza.nombre, precio: pizza.precio, ingredientes: []}
                id = pizza['ingredientes.Pizza_Ingredientes.pizzaId']
            }
          
            objeto.ingredientes.push(pizza['ingredientes.nombre'])

        }

        res.json(mostrar)

    }

    // for (nombre in nombre){
    //     const pizza = await Pizzas.create({nombre: 'Romana',precio:5})
    //     for (ingrediente in ingrediente){
    //         const ingrediente = await Ingredientes.create({nombre:ingrediente})
    //         await pizza.setIngredientes(ingrediente)
    //     }
    // }
   
    
   //console.log(pizza)
   
    


module.exports = {verPizzas,crearPizzas}