Backend
=======

[Requerimientos](https://github.com/AmbulnzLLC/fullstack-challenge/tree/master/backend)
-------------

* Git
* MySQL
* Nodejs

Modelo DB relacional
-------------------
![alt text](https://github.com/frann11/backendChallenge-Pizzeria/blob/main/ERD%20model1.png?raw=true)

Relaciones
-------------------
* *clientes* - un cliente puede tener uno o varios pedidos
* *pedidos* - cada pedido va a poseer un importe total (total) y una determinada cantidad de pizzas 
* *Pizzas* - cada Pizza va a tener un precio y uno o mas ingredientes
* *Detalle_Pedidos* - Tabla auxiliar relaciones M:M entre el pedido y las distintas cantidades de pizzas (asi mismo tiene un subtotal y una cantidad por cada tipo de pizza pedida)
* *Pizza_Ingredientes* - Tabla auxiliar relaciones M:M entre las pizzas y los ingredientes (varias pizzas pueden tener los mismos ingredientes)


Endpoints
-------------------

* `/api/orders` 
* `/api/orders/:id` 
* `/api/pizzas` 
