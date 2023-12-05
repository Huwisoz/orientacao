## Nome do Projeto
Guidance Records

## Descrição
Aplicativo criado com o intuito de armazenar registros de orientação sobre o TCC entre alunos e professor.

## Instalação

```
#clone o repositorio

git clone https://github.com/Huwisoz/orientacao.git

#importar o banco de dados

no mysql workbench importar os schemas e configurar a conexão

#entre na pasta da api

cd ORIENTACAO_API

#instale as dependecias

npm install

#rode o projeto

npm start

#abra um novo terminal e entre na pasta do app.

cd ORIENTACAO_APP

#instale as dependencias

npm install

#rode o projeto

npm start
```

## Uso

![Tela_Inicial](assets/tela_inicial.png)

O usuario poderá acessar o aplicativo e realizar o cadastro na plataforma como estudante ou orientador.

![Tela_Cadastro_Aluno](assets/tela_cadastro_aluno.png)

![Tela_Cadastro_Orientador](assets/tela_cadastro_orientador.png)

Uma vez cadastrado, o usuario orientador poderá acessar o aplicativo e terá a opção de criar um relatorio de orientação e designar para o aluno alvo. O registro é armazenado ficando disponivel para leitura para ambas as partes.

![Tela_Principal](assets/tela_principal.png)

![Tela_Registrar](assets/tela_registrar.png)

O usuario aluno poderá acessar o aplicativo e terá a opção de visualizar os relatorios criados por seu orientador.

![Tela_Registro](assets/tela_registro.png)
