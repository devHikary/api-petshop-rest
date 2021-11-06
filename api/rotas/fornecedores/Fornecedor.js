const TabelaFornecedor = require('./TabelaFornecedor');


class Fornecedor {
  constructor({ id, empresa, email, categoria, dataCriação, dataAtualização, versao }) {
    this.id = id;
    this.empresa = empresa;
    this.email = email;
    this.categoria = categoria;
    this.dataCriação = dataCriação;
    this.dataAtualização = dataAtualização;
    this.versao = versao;
  }

  async criar() {
    const resultado = await TabelaFornecedor.inserir({
      empresa: this.empresa,
      email: this.email,
      categoria: this.categoria
    })

    this.id = resultado.id;
    this.dataCriação = resultado.dataCriação;
    this.dataAtualização = resultado.dataAtualização;
    this.versao = resultado.versao
  }

  async carregar() {
    const encontrado = await TabelaFornecedor.pegarPorId(this.id)
    this.empresa = encontrado.empresa,
    this.email = encontrado.email,
    this.categoria = encontrado.categoria,
    this.dataCriação = encontrado.dataCriação,
    this.dataAtualização = encontrado.dataAtualização,
    this.versao = encontrado.versao

  }
}

module.exports = Fornecedor