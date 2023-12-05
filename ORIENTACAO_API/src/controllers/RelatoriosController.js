//Controller da Unidade

const { format } = require("date-fns");
const RelatorioModel = require("../models/RelatorioModel");


module.exports = {
    all: async (req, res) => {
        let json = {error: '', result:[]};

        let orientacao = await RelatorioModel.getAll();

        for(let i in orientacao){
            json.result.push({
                ...orientacao[i],
                data: format(new Date(orientacao[i].data),"d MMM yyyy 'às' HH:mm")
                
            })
        }
        res.json(json);
    },
    one: async (req, res) => {
        let json = {error: '', result:[]};

        let id = req.param.id;
        let orientacao = await RelatorioModel.findById(id);


        res.json(json);
    },
    new:async (req, res) =>{
        let json = {error: '', result:[]};

        let titulo= req.body.titulo;
        let texto = req.body.texto;
        let idAluno= req.body.idAluno;

        const createRes = await RelatorioModel.add(titulo, texto, idAluno)

        if(titulo && idAluno){
            json.result = {
                ...createRes
            }
        }else{
            json.error = "Registro não inserido!"
        }

        res.json(json);
    },


}