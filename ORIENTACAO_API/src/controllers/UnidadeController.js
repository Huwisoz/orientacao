//Controller da Unidade

const UnidadeModel = require("../models/UnidadeModel");


module.exports = {
    ping:(req, res) => {
        res.json({pong:true});
    },
    all: async (req, res) => {
        let json = {error: '', result:[]};

        let unidades = await UnidadeModel.getAll();
        for(let i in unidades){
            json.result.push({
                id: unidades[i].id,
                nome: unidades[i].nome,
                area: unidades[i].area,
                volume: unidades[i].volume,
                datacriacao: unidades[i].datacriacao,
                usuario: unidades[i].usuario,
                isactive: unidades[i].isactive
            })
        }
        res.json(json);
    },
    one: async (req, res) => {
        let json = {error: '', result:[]};

        let id = req.param.id;
        let unidade = await UnidadeModel.findById(id);


        res.json(json);
    },
    new:async (req, res) =>{
        let json = {error: '', result:[]};

        let nome = req.body.nome;
        let area = req.body.area;
        let volume = req.body.volume;
        let datacriacao = req.body.datacriacao;
        let usuario = req.body.usuario;
        let isactive = req.body.isactive;

        if(nome && area && volume){
            let unidadeId = await UnidadeModel.add(nome, area, volume, datacriacao, usuario, isactive);
            json.result = {
                id: unidadeId,
                nome,
                area,
                volume,
                datacriacao,
                usuario,
                isactive
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

        if(id && nome && area && volume){
            await UnidadeModel.update(id, nome, area, volume, datacriacao, usuario, isactive);
            json.result = {
                id: unidadeId,
                nome,
                area,
                volume,
                datacriacao,
                usuario,
                isactive
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
        let area = req.body.area;
        let volume = req.body.volume;
        let datacriacao = req.body.datacriacao;
        let usuario = req.body.usuario;
        let isactive = req.body.isactive;

        if(id && nome){
            await UnidadeModel.delete(id, nome, area, volume, datacriacao, usuario, isactive);
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