const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor')

ModeloTabela
  .sync()
  .then(() => console.log('Tabelas criada com sucesso'))
  .catch(console.log)