//Conexão com o Banco de Dados
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME

});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado a ${process.env.DB_NAME} com sucesso !`);
});

module.exports = connection;