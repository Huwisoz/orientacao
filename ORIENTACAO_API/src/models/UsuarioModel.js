const db = require("../db");

module.exports = {
    findUser: (idTipo) => {
        return new Promise ((resolve, reject)=>{
            db.query('SELECT * FROM usuario WHERE tipo_usuario_idtipo_usuario=?', [idTipo], (error, results)=>{
                console.log(results);
                if(error){reject(error); return;}
                if(results.length > 0){
                    resolve(results[0]);
                }else{
                    resolve(false);
                }
            })
        })
    },
    add: (nome, matricula, senha, tipo_usuario_idtipo_usuario)=>{
        return new Promise((resolve, reject)=>{
            db.query('INSERT INTO usuario (nome, matricula,  senha, tipo_usuario_idtipo_usuario) VALUES (?,?,?,?,?,?)',[nome, matricula, senha,tipo_usuario_idtipo_usuario],
            (error, results) =>{
                if(error) { reject(error); return; }
                resolve(results.insertId);
            })
        });
    }
}