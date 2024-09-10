const express = require('express');
const conectarBD = require("../config/db")
const cors = require("cors");

// Creamos nuestro servidor
const app = express();

// Enlazamos la conexion con nuestras bases de datos
conectarBD();
app.use(cors());
app.use(express.json());

// Ruta principal del proyecto
app.use("/api/Productos", require("../routers/rutas"));

// Ruta para verificar el servidor
app.get('/', (req,res) => {
    res.send('Hola mundo desde la web');
});

const puerto = 5000;
app.listen(puerto,() => console.log("Estamos conectados desde el servidor", puerto));









