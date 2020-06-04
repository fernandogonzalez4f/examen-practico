//Importamos las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Creamos una constante para el valor del puerto
const PUERTO = process.env.PORT || 3000;

//Emplear las rutas
let librosRouter = require('./routes/libro');

//Sitio web y HBS
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//Vamos a decirle a express la ruta a emplear
app.use('/', librosRouter);

/*La conexión con MongoDB*/
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://fernandoGonzalez:fer524130@gonzalez-fernando-cu2yr.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Conexión establecida con Mongo');
    })
    .catch(err=> console.log(err));

/*Arrancar el servidor web*/
app.listen(PUERTO, ()=>{
  console.log('Escuchando el puerto...');
});

app.get('/', (req, res)=>{
    res.render('index',{
        autor: 'Fernando Gonzalez Gallegos',
        year: 2020
    });
});

app.get('/libros', (req, res)=>{
    res.render('libros',{
        autor: 'Fernando Gonzalez Gallegos',
        year: 2020
    });
});

app.get('/acerca', (req, res)=>{
    res.render('acerca',{
        autor: 'Fernando Gonzalez Gallegos',
        year: 2020
    });
});

app.get('/macario', (req, res)=>{
    res.render('macario',{
        autor: 'Fernando Gonzalez Gallegos',
        year: 2020
    });
});

app.get('/diario_ana_frank', (req, res)=>{
    res.render('diario_ana_frank',{
        autor: 'Fernando Gonzalez Gallegos',
        year: 2020
    });
});

app.get('/cien_soledad', (req, res)=>{
    res.render('cien_soledad',{
        autor: 'Fernando Gonzalez Gallegos',
        year: 2020
    });
});

app.get('/principito', (req, res)=>{
    res.render('principito',{
        autor: 'Fernando Gonzalez Gallegos',
        year: 2020
    });
});

app.get('/historia_dos_ciudades', (req, res)=>{
    res.render('historia_dos_ciudades',{
        autor: 'Fernando Gonzalez Gallegos',
        year: 2020
    });
});