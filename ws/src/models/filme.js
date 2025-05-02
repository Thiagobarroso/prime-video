const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
    titulo: {
        type: String,
        required: true,
    },
    tipo: {
        type: [Object],
        required: true,
    }, 
    capa: {
        type: String,
        required: true,
    }, 
    logo: {
        type: String,
        required: true,
    },
    thumb: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    }, 
    genero: {
        type: Array,
        required: true,
    },
    elenco: {
        type: Array,
        required: true,
    },
    cenas_momentos: {
        type: String,
        required: true,
    }

});

module.exports = Filme;