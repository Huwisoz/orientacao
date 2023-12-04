//Rotas da API

const express = require("express");
const router = express.Router();

const RelatorioController = require("./controllers/RelatoriosController");
const UsuarioController = require("./controllers/UsuarioController");

router.get("/usuario/:matricula", UsuarioController.one);
router.post("/usuario", UsuarioController.new);
router.all("/usuario", UsuarioController.all);



module.exports = router;