const UsuarioModel = require("../models/UsuarioModel");

module.exports = {
    one: async (req, res) => {
        let json = {error:'', result:{}};
        let email = req.params.email;
        let senha = req.params.senha;
        let user = await UsuarioModel.findUser(email, senha);
        if(user){
            json.result = user;
        }
        res.json(json);
    }

}