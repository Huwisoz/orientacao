//Controller da Unidade

const RelatorioModel = require("../models/RelatorioModel");


module.exports = {
    ping:(req, res) => {
        res.json({pong:true});
    },
    all: async (req, res) => {
        let json = {error: '', result:[]};

        let orientacao = await RelatorioModel.getAll();
        for(let i in orientacao){
            json.result.push({
                id: orientacao[i].id,
                nome: orientacao[i].nome,
                
            })
        }
        res.json(json);
    },
    one: async (req, res) => {
        let json = {error: '', result:[]};

        let id = req.param.id;
        let unidade = await RelatorioModel.findById(id);


        res.json(json);
    },
    new:async (req, res) =>{
        let json = {error: '', result:[]};

        let nome = req.body.nome;


        if(nome && area && volume){
            let unidadeId = await UnidadeModel.add(nome, area, volume, datacriacao, usuario, isactive);
            json.result = {
                id: unidadeId,
                nome,
                
            }
        }else{
            json.error = "Registro não inserido!"
        }

        res.json(json);
    },
    edit:async (req, res) =>{
        let json = {error: '', result:[]};

        let id = req.param.id;
        let nome = req.body.nome;
        let area = req.body.area;
        let volume = req.body.volume;
        let datacriacao = req.body.datacriacao;
        let usuario = req.body.usuario;
        let isactive = req.body.isactive;

        if(id && nome ){
            await UnidadeModel.update(id, nome);
            json.result = {
                id: unidadeId,
                nome,

            }
        }else{
            json.error = "Campos em branco!"
        }

        res.json(json);
    },
    delete:async (req, res) =>{
        let json = {error: '', result:[]};


        let id = req.param.id;
        let nome = req.body.nome;


        if(id && nome){
            await UnidadeModel.delete(id, nome);
            json.result = {
                id: unidadeId
            }
        }else{
            json.error = "Campos em branco!"
        }
        await UnidadeModel.delete(req.params.id);

        res.json(json);
    }
}