const mongoose = require('mongoose');

const Temporada = mongoose.model('Temporada', {
    Temporada_id: {
        type: mongoose.Types.ObjectId,
        ref:'Filme',
    
    }, titulo: String
});

module.exports = Temporada;