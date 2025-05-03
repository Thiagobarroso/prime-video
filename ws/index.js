const express = require('express');
const morgan = require('morgan')
const bodyparse = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

const filmeRoutes = require('./src/routes/filmes.routes.js')
const usuarioRoutes = require('./src/routes/usuarios.routes.js')
mongoose.connect('mongodb://localhost:27017/prime-video')

//MIDDLEWARES 
app.use(morgan('dev'));
app.use(bodyparse.json());
app.use(cors());

//ROUTES
app.use('/', filmeRoutes );
app.use('/usuario', usuarioRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});