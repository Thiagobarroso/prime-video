const express = require('express');
const morgran = require('morgan')
const bodyparse = require('body-parser')
const mongoose = require('mongoose')
const app = express();

const routes = require('./src/routes/filmes.routes.js')
mongoose.connect('mongodb://localhost:27017/prime-video')

app.use(morgran('dev'));
app.use(bodyparse.json())
app.use('/', routes );

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});