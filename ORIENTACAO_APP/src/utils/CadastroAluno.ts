// Criação de um array de seções para o formulário de cadastro de aluno
const usuarios = 
    {
        id: 1,
        titulo: "Informe os dados do Aluno",
        entradaTexto:[
        {
            id:1,
            label:"Nome",
            placeholder:"Informe o nome do aluno.",
            name:"nome"
        },
        {
            id:2,
            label:"E-mail Institucional",
            placeholder:"Informe e-mail institucional do aluno.",
            secureTextEntry:true,
            name:"email"
        },
        {
            id:3,
            label:"Senha",
            placeholder:"Informe sua senha.",
            secureTextEntry:true,
            name:"senha"
        },
        {
            id:4,
            label:"Matricula",
            placeholder:"Informe a matricula do aluno.",
            name:"matricula"
        },
        ]
    }
 
export{usuarios}