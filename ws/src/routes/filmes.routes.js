const express = require('express')
const router = express.Router()
const Filme = require('../models/filme')

router.get('/', async (req, res)=> {
  // RECURPERAR TODOS OS REGISTROS
  try{
    const filmes = await Filme.find({});
    res.json({error: false, filmes});
  }
  catch (err){
    res.json({error: true, message: err.message})
  }

})

  // PEGAR SOMENTE O REGISTRO COM ID
  router.get('/:id', async(req, res) => {
    const id = req.params.id
    try {
      const filme = await Filme.findById(id)
      res.json({error: false, filme})

    }catch (err){
      res.json({err: true, message: err.message})
    }    
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
  router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
      await Filme.findByIdAndDelete(id);
      res.json({error: false})

    }catch (err){
      res.json({error: true, message: err.message})
    }
    res.json({mensagem: `DELETAR O REGISTRO COM ID ${id}`})
  })


  module.exports = router;