const secoes = [
    {
        id: 1,
        titulo: "Informe os dados do Orientador",
        checkbox:[],
        entradaTexto: [{
            id:1,
            label:"Nome",
            placeholder:"Informe o nome do orientador."
        },
        {
            id:2,
            label:"E-mail Institucional",
            placeholder:"Informe e-mail institucional do orientador."
        },
    ]
    },
    {
        id:2,
        titulo: "Informe os dado complementares do orientador",
        checkbox:[],
        entradaTexto:[
            {
                id:1,
                label:"Disciplina",
                placeholder:"Informe a disciplina do orientador."
            },
            {
                id:2,
                label:"Código da disciplina",
                placeholder:"Informe o código da disciplina"
            },
            
        ]
    },
    {
        id:3,
        titulo: "Informe o período da disciplina",
        entradaTexto:[],
        checkbox:[
            {
                id:1,
                value: "Primeiro Período"
            },
            {
                id:2,
                value: "Segundo Período"
            },
            {
                id:3,
                value: "Terceiro Período"
            },
            {
                id:4,
                value: "Quarto Período"
            }
            
        ]
    }
]
export{secoes}