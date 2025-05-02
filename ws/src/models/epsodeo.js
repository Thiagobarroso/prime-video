const mongoose = require('mongoose');

const Epsodeo = mongoose.model('Epsodeo', {
    Temporada_id: {
        type: mongoose.Types.ObjectId,
        ref:'Temporada',
    
    },
        titulo: String,
        descricao: String,
        numero: Number, 
        capa: String
    
});

module.exports = Epsodeo;