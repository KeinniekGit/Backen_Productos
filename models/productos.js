const mongoose = require("mongoose");

// El esquema que se crea aca debe ser igual al de la base de datos
const productoSchema = mongoose.Schema({
    Nombre:{
        type: String,
        required: true
    },
    Precio:{
        type: Number,
        required: true
    },
    Categoria:{
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model("Producto", productoSchema);