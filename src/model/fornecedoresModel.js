import db from '../database/connect.js'
import dao from '../DAO/fornecedoresDAO.js'

class Fornecedores {
  constructor(id, nome, cnpj, produto, email, telefone, endereco) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.cnpj = cnpj;
    this.produto = produto;
    this.telefone = telefone;
    this.endereco = endereco;
    this.cep = cep
  }
  
  insereFornecedores = async(fornecedor) => {
    return await dao.insereFornecedor(fornecedor)
  }

  totalDeFornecedores = async()=>{
    return await dao.totalFornecedores()
  }
}

export default Fornecedores;
