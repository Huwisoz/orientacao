import api from "./api";

export async function fazerLogin(email: string, senha: string){
    if(!email || !senha) return null;
    try{
        const resultado = await api.post('/api/usuario/login', {email, senha},{
            headers: {
                'Content-Type': 'application/json'
        }})
        console.log(resultado);
        return resultado.data;
    }catch(error){
        console.log(error);
        return null;
    }
}