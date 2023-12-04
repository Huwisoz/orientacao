const db = require("../db");

module.exports = {
    getAll: ()=>{
        return new Promise((resolve, reject)=>{

            db.query('SELECT * FROM usuario', (error, results)=>{
                if(error) { reject(error); return; }
                resolve(results);
            });

        });
    },
    findUser: (matricula) => {
        console.log(matricula);
        return new Promise ((resolve, reject)=>{
            db.query('SELECT * FROM usuario WHERE matricula = ?', [matricula], (error, results)=>{
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
    add: (nome, matricula, senha, tipo_usuario_idtipo_usuario, email)=>{
        return new Promise((resolve, reject)=>{
            db.query('INSERT INTO usuario (nome, matricula, senha, tipo_usuario_idtipo_usuario, email) VALUES (?,?,?,?,?)',[nome, matricula, senha,tipo_usuario_idtipo_usuario, email],
            (error, results) =>{
                if(error) { reject(error); return; }
                resolve(results.insertId);
            })
        });
    }, update: (id, nome, matricula, email, senha) =>{
        return new Promise((resolve, reject) => {
            
            db.query('UPDATE usuario SET nome = ?, matricula = ?, email = ?, senha =? WHERE id = ?', [nome, matricula, email, senha, id], (error, results)=> {
                if(error) {reject(error); return;}
                
                resolve(results);
            })
        });
    },
    delete: (matricula) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM usuario WHERE matricula = ?', [matricula], (error, results)=>{
                if(error) {reject(error); return;}
                resolve(results);
            });
        });
    }
}
