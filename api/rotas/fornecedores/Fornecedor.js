const Tabela = require('./TabelaFornecedor')

class Fornecedor{
  constructor({id, empresa, email, categoria, dataCriação, dataAtualização, versao}){
    this.id = id;
    this.empresa = empresa;
    this.email = email;
    this.categoria = categoria;
    this.dataCriação = dataCriação;
    this.dataAtualização = dataAtualização;
    this.versao = versao;
  }

  async criar (){
    const resultado = await Tabela.inserir({
      empresa: this.empresa,
      email: this.email,
      categoria: this.categoria
    })
    
    this.id = resultado.id;
    this.dataCriação = resultado.dataCriação;
    this.dataAtualização = resultado.dataAtualização;
    this.versao = resultado.versao
  }
}

module.exports = Fornecedor