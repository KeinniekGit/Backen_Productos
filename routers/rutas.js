const express = require("express");
const routers = express.Router();
const productosController = require("../controllers/prod_controllers");

// Estas son las rutas de nuestro Crud.

routers.get("/", productosController.buscarProductos);
routers.get('/:id', productosController.buscarProductoPorId);
routers.post("/", productosController.agregarProductos);
routers.put('/:id',productosController.editarProductos);
routers.delete("/:id", productosController.eliminarProductoPorId);

module.exports = routers