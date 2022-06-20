require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();

// Configuracion
const port = process.env.PORT;

// Handlebars - __dirname -> indica el path donde esta desplegada la aplicacion
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); // Implementamos parciales de handlebars


// Middleware
// Servir contenido estatico
app.use(express.static('./public'));

// Rutas
// app.get('/', (req, res) => {
//     res.send('Home Page');
// });

// Home
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'William Chávez',
        titulo: 'Curso de Node'
    }); // Renderizado de la vista con hbs, {} -> mandamos argumentos
});

// Tarea
app.get('/generic', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html');

    res.render('generic', {
        nombre: 'William Chávez',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + '/public/elements.html');

    res.render('elements', {
        nombre: 'William Chávez',
        titulo: 'Curso de Node'
    });
});


// * Practica 
app.get('/hola-mundo', (req, res) => {
    res.send('Hello World en su ruta');
});

// Cualquier ruta (*)
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
    // res.send('404 | Page not found');
});


// Puerto
app.listen(port, () => {
    console.log(`Server listo, puerto: ${port}`);
});










// Express busca por default el archivo html para servirce en la carpeta publica
// handlebars -> npm i hbs -> para express