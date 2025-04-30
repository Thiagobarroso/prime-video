const express = require('express')
const router = express.Router()
const Filme = require('../models/filme')

router.get('/',  (req, res) => {
    //regra de negocio
  // RECURPERAR TODOS OS REGISTROS
    res.json({ mensagem: 'PEGAR TODOS OS REGISTROS'})
})

  // PEGAR SOMENTE O REGISTRO COM ID
  router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({ mensagem: `PEGAR O REGISTRO COM ID${id}`})
} )

  // CRIAR UM REGISTRO
  router.post('/', async(req,res) => {
    const filme = req.body
    try {
        const response = await new Filme(filme).save();
        res.json({error: false, filme: response})   
    } catch (error) {
        res.json({error: true, message: error.message})
    }

  });

  // ATUALIZAR SOMENTE O REGISTRO COM ID

  router.put('/:id', (req, res) => {
    const id = req.params.id
    res.json({mensagem:  `ATUALIZAR O REGISTRO COM ID ${id}`})
  })

  // DELETAR SOEMENTE REGISTRO COM ID
  router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({mensagem: `DELETAR O REGISTRO COM ID ${id}`})
  })


  module.exports = router;