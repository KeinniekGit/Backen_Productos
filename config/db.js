const mongoose = require('mongoose');
require("dotenv").config();

// Conexion con Mongo DB
const conectarBD = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Estamos conectados con mongo"))
    .catch((err) => console.log("Error"));
    }

module.exports =  conectarBD