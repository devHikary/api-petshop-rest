const roteador = require('express').Router()
const SerializadorFornecedor= require('../../Serializador').SerializadorFornecedor
const Fornecedor = require('./Fornecedor')
const TabelaFornecedor = require('./TabelaFornecedor')

roteador.get('/', async (req, res) => {
  const resultados = await TabelaFornecedor.listar()
  const serializador = new SerializadorFornecedor(
    res.getHeader('Content-Type')
  )
  res.status(200).send(
    serializador.serializar(resultados)
  )
})

roteador.post('/', async (req, res, proximo) => {
  try {
    const dadosRecebidos = req.body;
    const fornecedor = new Fornecedor(dadosRecebidos);
    await fornecedor.criar()
    const serializador = new SerializadorFornecedor(
      res.getHeader('Content-Type')
    )
    res.status(201).send(
      serializador.serializar(fornecedor)
    )
  } catch (erro) {
    proximo(erro)
  }
})

roteador.get('/:id', async (req, res, proximo) => {
  try {
    const id = req.params.id;
    const fornecedor = new Fornecedor({ id: id });
    await fornecedor.carregar()
    res.status(200)
    const serializador = new SerializadorFornecedor(
      res.getHeader('Content-Type'),
      ['email', 'dataCriacao', 'dataAtualização', 'versao']
    )
    res.send(
      serializador.serializar(fornecedor)
    )
  } catch (erro) {
    proximo(erro)
  }
})

roteador.put('/:id', async (req, res, proximo) => {
  try {
    const id = req.params.id;
    const dadosRecebidos = req.body;
    const dados = Object.assign({}, dadosRecebidos, { id: id })
    const fornecedor = new Fornecedor(dados)
    await fornecedor.atualizar()
    
    res.status(204).end()
  } catch (erro) {
    proximo(erro)
  }
})

roteador.delete('/:id', async (req, res, proximo) => {
  try {
    const id = req.params.id;
    const fornecedor = new Fornecedor({ id: id })
    await fornecedor.carregar()
    await fornecedor.remover()
    res.status(204).end()

  } catch (erro) {
    proximo(erro)
  }
})


module.exports = roteador
