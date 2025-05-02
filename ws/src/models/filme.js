const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
    titulo: {
        type: String,
        required: true,
    },
    atores: {
        type: [Object],
        required: true,
    }, 
    ano: {
        type: Number,
        required: true,
    }
});

module.exports = Filme;