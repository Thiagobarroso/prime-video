const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', { 
    titulo: String,
    atores: Array,
    ano: Number,
    Detalhes: Object,
    premiacoes: [Object],
});

module.exports = Filme;