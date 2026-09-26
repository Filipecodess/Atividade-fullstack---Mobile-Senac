const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.post("/", bookController.criarLivro);

router.get("/", bookController.listarLivros);

router.get("/:id", bookController.buscarLivro);

router.put("/:id", bookController.atualizarLivro);

router.delete("/:id", bookController.excluirLivro);

module.exports = router;