import api from "./api";



export async function buscarUsuario() {
    try{
        const resultado = await api.get(`/api/usuario/aluno`);
        console.log("test:", resultado);
        return resultado.data;
        
    }
    catch(error){
        console.log(error);
        return null;
    }
}