const mongoose = require('mongoose');
//Vamos a crear un Schema (nuestra base de datos)

let Schema = mongoose.Schema;

//Crear la colección
let LibrosSchema = new Schema({
  titulo:{
    type: String,
    required: [true, 'Requerimos el titulo']
  },
  autor:{
    type: String,
    required: [true, 'Requerimos el autor']
  },
  year:{
    type: String
  },
  genero:{
    type: String
  },
  pais:{
    type: String
  },
  imagen:{
    type: String
  }
});

module.exports = mongoose.model('Libros', LibrosSchema);