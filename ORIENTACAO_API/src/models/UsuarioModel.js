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
    findEmail: (email, senha) => {
        return new Promise ((resolve, reject)=>{
            db.query('SELECT * FROM usuario WHERE email = ? AND senha = ?', [email, senha], (error, results)=>{
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
    add: (nome, matricula, email, senha, tipo_usuario_idtipo_usuario)=>{
        return new Promise((resolve, reject)=>{
            db.query('INSERT INTO usuario (nome, matricula, email, senha, tipo_usuario_idtipo_usuario) VALUES (?,?,?,?,?)',[nome, matricula, email, senha, tipo_usuario_idtipo_usuario],
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
    },
    getAluno: ()=>{
        return new Promise((resolve, reject)=>{

            db.query('SELECT * FROM usuario WHERE tipo_usuario_idtipo_usuario = ?',[2], (error, results)=>{
                if(error) { reject(error); return; }
                resolve(results);
            });

        });
    },
    
}
