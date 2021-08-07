const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')

roteador.get('/', async (req, res) => {
  const resultados = await TabelaFornecedor.listar()
  res.send(
    resultados
  )
})

roteador.post('/', (req, res) => {

})

module.exports = roteador
