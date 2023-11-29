const UsuarioModel = require("../models/UsuarioModel");

module.exports = {
    one: async (req, res) => {
        let json = {error:'', result:{}};
        let tipoUsuario = req.params.tipoUsuario;
        let user = await UsuarioModel.findUser(tipoUsuario);
        if(user){
            json.result = user;
        }
        res.json(json);
    },
    new:async (req, res) =>{
        let json = {error: '', result:[]};
        console.log(req.body);

        let nome = req.body.nome;
        let matricula = req.body.matricula;
        //let email = req.body.email;
        let senha = req.body.senha;
        let tipoUsuario = req.body.tipoUsuario


        if(nome && tipo_usuario_idtipo_usuario && senha && matricula){
            let unidadeId = await UsuarioModel.add(nome, matricula, senha,tipo_usuario_idtipo_usuario);
            json.result = {
                id: unidadeId,
                nome,
                matricula,
                //email,
                senha,
                tipoUsuario

            }
        }else{
            json.error = "Registro não inserido!"
        }

        res.json(json);
    }

}