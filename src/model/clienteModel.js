import dao from '../DAO/clienteDAO.js'

class Cliente {
    constructor(id, nome, email, cpf, telefone, senha, cep) {
        this.id = id
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.telefone = telefone
        this.senha = senha
        this.cep = cep
    }

    inserirCliente = async (cliente) => {
        try { 
        const data = await dao.insereCliente(cliente)
        return {
            "dados" : data,
            "status" : 200
        }
    } catch (error) {
        return {
            "mensagem" : error.message,
            "status" : 400
        }
    }
        }

    removerCliente = async (id) => {
        try {
            const data = await dao.removeCliente(id)
            return {
                "dados" : data,
                "status" : 200
            }
        } catch (error) {
            return {
                "mensagem" : error.message,
                "status" : 400
            }
        }
    }

    buscarClientesTodos = async () => {
        try {
            const data = await dao.pegaTodosClientes()
            return {
                "dados" : data,
                "tamanho" : data.length,
                "status" : 200
            }
        } catch (error) {
            return {
                "mensagem" : error.message,
                "status" : 400
            }
        }
    }

    buscarClienteId = async (id) => {
        try {
            const data = await dao.pegaClientePeloId(id)
            if (data) {
                return {
                    "dados" : data,
                    "status" : 200
                }
            } else {
                return {
                    "mensagem": `Usuário de ID ${id} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    buscarClienteNome =  async (nome) => {
        try {
            const data = await dao.pegaClientePeloNome(nome)
            if (data) {
                return {
                    "dados" : data,
                    "status" : 200
                }
            } else {
                return {
                    "mensagem": `Usuário de nome ${nome} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }   

    buscarClienteEmail = async (email) => {
        try {
            const data = await dao.pegaClientePeloEmail(email)
            if (data) {
                return {
                    "dados" : data,
                    "status" : 200
                }
            } else {
                return {
                    "mensagem": `Usuário de email ${email} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    buscarClienteCPF = async (cpf) => {
        try {
            const data = await dao.pegaClientePeloCPF(cpf)
            if (data) {
                return {
                    "dados" : data,
                    "status" : 200
                }
            } else {
                return {
                    "mensagem": `Usuário de CPF ${cpf} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    atualizarCliente = async (id, novoCliente) => {
        try {
            const clienteAtual = await this.buscarClienteId(id)
            if (clienteAtual) {
                const clienteAtualizado = {
                    "nome": novoCliente.nome || clienteAtual.nome,
                    "email": novoCliente.email || clienteAtual.email,
                    "cpf": novoCliente.cpf || clienteAtual.cpf,
                    "telefone": novoCliente.telefone || clienteAtual.telefone,
                    "cep": novoCliente.cep || clienteAtual.cep,
                    "senha": novoCliente.senha || clienteAtual.senha
                }
                const data = await dao.atualizarCliente(id, clienteAtualizado)
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                throw new Error("Cliente não encontrado")
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }
}

export default Cliente