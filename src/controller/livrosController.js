import Livro from '../model/livrosModels.js';
import LivrosValidacao from '../services/validacaoLivro.js';

const modelLivros = new Livro();

const livroController = {
  cadastroNovoLivro: async (req, res) => {
    const body = req.body;

    try {
      const resposta = await modelLivros.cadastroLivro(
        body.imagem,
        body.titulo,
        body.autor,
        body.genero,
        body.formato,
        body.valor,
        body.qtdEstoque,
        body.idioma,
        body.numeroPaginas,
      );

      res.status(resposta.status).json({
        msg: 'Cadastro do livro realizado com sucesso',
        livro: resposta.dados,
        erro: false,
      });
    } catch (error) {
      res.status(resposta.status).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  listarLivros: async (req, res) => {
    try {
      const resposta = await modelLivros.listaDeLivros();

      res.status(resposta.status).json({
        livros: resposta.dados,
        erro: false,
      });
    } catch (error) {
      res.status(resposta.status).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  buscaLivro: async (req, res) => {
    try {
      const titulo = req.params.titulo;
      const resposta = await modelLivros.buscaLivro(titulo);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          titulo: resposta.dados,
          erro: false,
        });
      } else {
        res
          .status(resposta.status)
          .json({ mensagem: resposta.mensagem, erro: true });
      }
    } catch (error) {
      res.status(resposta.status).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  buscaLivroId: async (req, res) => {
    try {
      const idLivro = req.params.idLivro;
      const resposta = await modelLivros.buscaLivroId(idLivro);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          titulo: resposta.dados,
          erro: false,
        });
      } else {
        res
          .status(resposta.status)
          .json({ mensagem: resposta.mensagem, erro: true });
      }
    } catch (error) {
      res.status(resposta.status).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  buscaGenero: async (req, res) => {
    try {
      const genero = req.params.genero;
      const resposta = await modelLivros.buscaGenero(genero);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          titulo: resposta.dados,
          erro: false,
        });
      } else {
        res
          .status(resposta.status)
          .json({ mensagem: resposta.mensagem, erro: true });
      }
    } catch (error) {
      res.status(resposta.status).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  buscaAutor: async (req, res) => {
    try {
      const autor = req.params.autor;
      const resposta = await modelLivros.buscaAutor(autor);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          titulo: resposta.dados,
          erro: false,
        });
      } else {
        res
          .status(resposta.status)
          .json({ mensagem: resposta.mensagem, erro: true });
      }
    } catch (error) {
      res.status(resposta.status).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  buscaIdioma: async (req, res) => {
    try {
      const idioma = req.params.idioma;
      const resposta = await modelLivros.buscaIdioma(idioma);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          titulo: resposta.dados,
          erro: false,
        });
      } else {
        res
          .status(resposta.status)
          .json({ mensagem: resposta.mensagem, erro: true });
      }
    } catch (error) {
      res.status(resposta.status).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  removeLivro: async (req, res) => {
    const idLivro = req.params.idLivro;
    try {
      await LivrosValidacao._validaDeleteLivros(
        idLivro,
        modelLivros.removeLivro,
      );

      res.json({
        msg: 'Livro deletado com sucesso',
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  atualizaLivro: async (req, res) => {
    const idLivro = req.params.idLivro;
    const body = req.body;
    try {
      const resposta = await modelLivros.atualizaLivro(
        idLivro,
        body.imagem,
        body.titulo,
        body.autor,
        body.genero,
        body.formato,
        body.valor,
        body.qtdEstoque,
        body.idioma,
        body.numeroPaginas,
      );
      console.log(resposta.status);
      if (resposta.status !== 200) throw resposta;
      res.status(resposta.status).json({
        msg: 'O livro foi atualizado com sucesso',
        livro: resposta.dados,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        msg: error.mensagem,
        erro: true,
      });
    }
  },
};

export default livroController;
