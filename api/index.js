const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const roteador = require('./rotas/fornecedores')
const NaoEncontrado = require('./erros/NaoEncontrado')
app.use('/api/fornecedores', roteador)

app.use((erro, req, res, proximo) => {
  if(erro instanceof NaoEncontrado){
    res.status(404)
  } else{
    res.status(400)
  }
  res.send(
    JSON.stringify({
      mensagem: erro.message,
      id: erro.idErro,
    })
  )
})

app.listen(config.get('api.porta'), () => console.log('API está funcionando'))
