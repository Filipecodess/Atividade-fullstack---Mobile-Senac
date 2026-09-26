const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    { //um livro deve ter essas atrinuições
    titulo: {
      type: String,
      required: true,
      trim: true
    },

    autor: {
      type: String,
      required: true,
      trim: true
    },

    genero: {
      type: String,
      required: true,
      trim: true
    },

    anoPublicacao: {
      type: Number,
      required: true
    },

    disponivel: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  });

  module.exports = mongoose.model("Book", bookSchema);