//Modelo Unidade

const db = require('../db');
const { format } = require('date-fns');

module.exports = {
    getAll: ()=>{
        return new Promise((resolve, reject)=>{

            db.query('SELECT * FROM orientacao', (error, results)=>{
                if(error) { reject(error); return; }
                resolve(results);
            });

        });
    },
    findById: (id)=>{
        return new Promise((resolve, reject)=>{

            db.query('SELECT * FROM orientacao WHERE id = ?', [id], (error, results)=>{
                if(error) { reject(error); return; }
                if(results.length > 0){
                    resolve(results[0]);
                }else{
                    resolve(false);
                }
            })

        });
    },
    add: (titulo, texto, idAluno)=>{
        return new Promise((resolve, reject)=>{
            db.query('INSERT INTO orientacao (titulo, text, data, usuario_idusuario) VALUES (?,?,?,?)',[titulo, texto, format(new Date(), 'yyyy-MM-dd HH:mm:ss'), idAluno],
            (error, results) =>{
                if(error) { reject(error); return; }
                resolve(results.insertId);
            })
        });
    },
    delete: (id)=>{
        return new Promise((resolve, reject)=>{
            db.query('DELETE FROM orientacao WHERE id = ?', [id], (error, results)=>{
                if(error) { reject(error); return; }
                resolve(results);
            })
        });
    }
}