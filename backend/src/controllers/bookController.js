const Book = require("../models/Book");

async function criarLivro(req, res) {
  try {
    const livro = await Book.create(req.body);

    return res.status(201).json(livro);
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message
    });
  }
}

async function listarLivros(req, res) {
  try {
    const livros = await Book.find();

    return res.status(200).json(livros);
  } catch (error) {
    return res.status(500).json({
      mensagem: error.message
    });
  }
}

async function buscarLivro(req, res) {
  try {
    const livro = await Book.findById(req.params.id);

    if (!livro) {
      return res.status(404).json({
        mensagem: "Livro não encontrado"
      });
    }

    return res.status(200).json(livro);
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message
    });
  }
}

async function atualizarLivro(req, res) {
  try {
    const livro = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!livro) {
      return res.status(404).json({
        mensagem: "Livro não encontrado"
      });
    }

    return res.status(200).json(livro);
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message
    });
  }
}

async function excluirLivro(req, res) {
  try {
    const livro = await Book.findByIdAndDelete(req.params.id);

    if (!livro) {
      return res.status(404).json({
        mensagem: "Livro não encontrado"
      });
    }

    return res.status(200).json({
      mensagem: "Livro excluído com sucesso"
    });
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message
    });
  }
}

module.exports = {
  criarLivro,
  listarLivros,
  buscarLivro,
  atualizarLivro,
  excluirLivro
};