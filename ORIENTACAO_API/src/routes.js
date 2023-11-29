//Rotas da API

const express = require("express");
const router = express.Router();

const UnidadeController = require("./controllers/UnidadeController");
const UsuarioController = require("./controllers/UsuarioController");

router.get("/usuario/:id", UsuarioController.one);
router.post("/usuario", UsuarioController.new)



module.exports = router;