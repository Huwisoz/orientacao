const usuario = 
    {
        id: 1,
        titulo: "Informe os dados do Orientador",
        entradaTexto:[
        {
            id:1,
            label:"Nome",
            placeholder:"Informe o nome do orientador.",
            name:"nome"
        },
        {
            id:2,
            label:"E-mail Institucional",
            placeholder:"Informe e-mail institucional do orientador.",
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
            placeholder:"Informe a matricula do orientador.",
            name:"matricula"
        },
        ]
    }
 
export{usuario}