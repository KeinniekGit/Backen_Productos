const productos = require("../models/productos");
const ProductoModel = require("../models/productos");

// Funcion para buscar los productos que estén en la base de datos.
exports.buscarProductos = async (req, res) => {
    try {
        const productos = await ProductoModel.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al buscar los Productos");
    }
};

// Funcion para buscar un producto por su ID.
exports.buscarProductoPorId = async (req, res) => {
    try {
        const { id } = req.params; 
        const producto = await ProductoModel.findById(id);

        if (!producto) {
            return res.status(404).send("Producto no encontrado");
        }

        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al buscar el Producto");
    }
};

// Funcion para agregar productos.
exports.agregarProductos = async (req, res) => {
    try {
        const nuevoProducto = new ProductoModel(req.body);
        await nuevoProducto.save();
        res.json(nuevoProducto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al agregar los Productos");
    }
};

//funcion editar utilizando patch
exports.editarProductos=async(req,res)=> {
    try{
        const producto=await productos.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!producto){
            res.status(404).send({msg:"El cliente no existe"});
        }else{
            res.json(producto);
        }
    }catch(error){
        console.log("error al mostrar un cliente")
        res.status(500).send("error al mostrar un cliente");
    }   
}

// Funcion para eliminar un productos.
exports.eliminarProductoPorId = async (req, res) => {
    try {
        const { id } = req.params; 
        const productoEliminado = await ProductoModel.findByIdAndDelete(id);

        if (!productoEliminado) {
            return res.status(404).send("Producto no encontrado");
        }

        res.json({ mensaje: "Producto eliminado", producto: productoEliminado });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar el Producto");
    }
};