'use strict'
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const saludos = require('./routes/saludos');
const index = require('./routes/index');

app.use('/', index); // ruta princial
app.use('/saludo', saludos);


app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});