const express = require('express')
const router = express.Router()
const Usuario = require('../models/usuario');

//login
router.post('/login', async(req, res) => {
    try {
        const credenciais = req.body;
        const usuario = await Usuario.findOne(credenciais)
        
        if (usuario) {
            res.json({ err: false, usuario})
        } else {
            res.json({err: true, message: 'nenhum usuario encontrado'})
        }

    }
    catch (err){
        res.json({ err: true, message: err.message })
    }
})

// criar usuario 
  router.post('/criar', async(req,res) => {
    const usuario = req.body
    try {
        const response = await new Usuario(usuario).save();
        res.json({error: false, filme: response})   
    } catch (error) {
        res.json({error: true, message: error.message})
    }

  });

module.exports =  router;