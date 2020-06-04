const express = require('express');
//Vamos a routear los libros
let libro = require('../controllers/LibrosController.js');

//Creamos nuestras rutas
let router = express.Router();

router.get('/', libro.list);

module.exports = router;