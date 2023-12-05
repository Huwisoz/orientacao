const UsuarioModel = require("../models/UsuarioModel");

module.exports = {
    all: async (req, res) => {
        let json = {error: '', result:[]};

        let usuario = await UsuarioModel.getAll();
        for(let i in usuario){
            json.result.push({
                id: usuario[i].id,
                nome: usuario[i].nome,
                matricula: usuario[i].matricula,
                senha: usuario[i].senha,
                tipo_usuario: usuario[i].tipo_usuario_idtipo_usuario,
                e_mail: usuario[i].email,
            })
        }
        res.json(json);
    },
    one: async (req, res) => {
        let json = {error:'', result:{}};
        let email = req.body.email;
        let senha = req.body.senha;
        
        let user = await UsuarioModel.findEmail(email, senha);
        console.log("test:",user);
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
        let email = req.body.email;
        let senha = req.body.senha;
        let tipoUsuario = req.body.tipoUsuario


        if(nome && email && senha && matricula && tipoUsuario){
            await UsuarioModel.add(nome, matricula, email, senha, tipoUsuario);
            json.result = {
                nome,
                matricula,
                email,
                senha,
                tipoUsuario

            }
        }else{
            json.error = "Registro não inserido!"
        }

        res.json(json);
    },
    edit: async (req, res)=>{
        let json= {error: '', result:{}};



        let id = req.params.id;
        let nome = req.body.nome;
        let matricula = req.body.matricula;
        let email = req.body.email;
        let senha = req.body.senha
        
        if(id && nome && matricula) {
            await UsuarioModel.update(id, nome, matricula, email, senha);
            
            json.result = {
                id,
                nome,
                email,
                senha
            }
        }else{
            json.error = "Campos não enviados!";
        }
        
        
        res.json(json);
    },
    delete: async (req, res)=>{
        let json= {error: '', result:{}};

        await UsuarioModel.delete(req.params.id);

        res.json(json);
    }
}
