let mongoose = require('mongoose');
//Vamos a unirlo al modelo
let Libros = require('../models/Libros');

let librosController = {};

/*LISTAR -> FIND()*/ 
librosController.list = (req, res)=>{
  Libros.find({})
  .limit(12)
  .skip(0)
  .exec((err, libro)=>{
    if(err){
      console.log('Error: ', err)
    }
    res.render('../views/index',{
      libros: libro,
      titulo: "Lista de libros",
      year: new Date().getDate()
    })
  })
};

module.exports = librosController;