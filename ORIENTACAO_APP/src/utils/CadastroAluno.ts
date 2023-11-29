// Criação de um array de seções para o formulário de cadastro de aluno
const usuarios = [
    {
        id: 1,
        titulo: "Informe os dados do Aluno", // Título da primeira seção
        checkbox: [], // Nenhum checkbox nesta seção
        entradaTexto: [ // Entradas de texto nesta seção
            {
                id: 1,
                label: "Nome:", // Rótulo da entrada de texto
                placeholder: "Informe o nome do aluno.", // Texto de exemplo dentro da entrada
                name: "nome"
            },
            {
                id: 2,
                label: "E-mail Institucional:", // Rótulo da entrada de texto
                placeholder: "Informe e-mail institucional do aluno.", // Texto de exemplo dentro da entrada
                name: "email"
            },
            {
                id: 3,
                label: "GRR:", // Rótulo da entrada de texto
                placeholder: "Informe seu GRR", // Texto de exemplo dentro da entrada
                name: "grr"
            },
            {
                id: 4,
                label: "Senha:", // Rótulo da entrada de texto
                placeholder: "Informe sua senha", // Texto de exemplo dentro da entrada
                name: "senha"
            },
        ]
    },
    {
        id: 2,
        titulo: "Informe os dado complementares", // Título da segunda seção
        checkbox: [], // Nenhum checkbox nesta seção
        entradaTexto: [ // Entradas de texto nesta seção
            {
                id: 1,
                label: "Disciplina", // Rótulo da entrada de texto
                placeholder: "Informe a disciplina do orientador.", // Texto de exemplo dentro da entrada
                name: "disciplina"
            },
            {
                id: 2,
                label: "Código da disciplina", // Rótulo da entrada de texto
                placeholder: "Informe o código da disciplina", // Texto de exemplo dentro da entrada
                name: "codigodisciplina"
            },
        ]
    },
    {
        id: 3,
        titulo: "Informe o período da disciplina", // Título da terceira seção
        entradaTexto: [], // Nenhuma entrada de texto nesta seção
        checkbox: [ // Checkboxes nesta seção
            {
                id: 1,
                value: "Primeiro Período", // Valor do primeiro checkbox
                name: "primeiroperiodo"
            },
            {
                id: 2,
                value: "Segundo Período", // Valor do segundo checkbox
                name: "segundoperiodo"
            },
            {
                id: 3,
                value: "Terceiro Período", // Valor do terceiro checkbox
                name: "terceiroperiodo"
            },
            {
                id: 4,
                value: "Quarto Período",// Valor do quarto checkbox
                name: "partoperiodo"
            }
        ]
    }
]

// Exporta o array 'secoes' para que ele possa ser usado em outros arquivos
export {usuarios}
