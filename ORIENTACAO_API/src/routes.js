//Rotas da API

const express = require("express");
const router = express.Router();

const RelatorioController = require("./controllers/RelatoriosController");
const UsuarioController = require("./controllers/UsuarioController");

router.post("/usuario/login", UsuarioController.one);
router.get("/usuario", UsuarioController.all);
router.post("/usuario",async (req,res) => await UsuarioController.new(req,res));




module.exports = router;