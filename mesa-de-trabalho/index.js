/*
    Atividade I: Inicialize um projeto npm;
    (x) Preencha nome do projeto;
    (x) Preencha o nome de todos os integrantes do grupo;
    (x) Preencha a licença como UNLICENSED;
    (x) Preencha a versão como 1.0.

    Atividade II: Instale o Nodemon globalmente em sua máquina. Link com a instrução de instalação: https://www.npmjs.com/package/nodemon.
    
    Atividade III: Ignore a pasta node_modules
    (x) Configure o git, utilizando o arquivo .gitignore, para que ele ignore as alterações realizas na pasta node_modules.

    Atividade IV: Crie o projeto 
    (x) Instale o Express no projeto (https://expressjs.com/pt-br/),
    (x) Implemente a aplicação como as seguintes rotas:
        (x) Rota http://localhost:1234/
            (x) Insira o texto: Seja bem-vindo ao [nome_do_projeto].
        (x) Rota http://localhost:1234/sobre/
            (x) Insire o texto: Sobre o projeto


    Comandos npm
        npm init -> para inicializar o projeto.
        npm install [nome_do_modulo] -> para instalar um módulo de terceiros.
        npm install -> para instalar o projeto quando esta sem a pasta node_modules.
        npm uninstall [nome_do_modulo] -> para desinstalar um módulo de terceiros.
        npm start -> para executar o projeto. 
*/

const express = require ('express')

const aplicativo = new express();

aplicativo.get('/', function(requisicaoAoServidor, respostaDoServidor){
    respostaDoServidor.send('Seja bem-vindo a Mesa de Trabalho da Aula 17 de Imperativa!');
});

aplicativo.get('/sobre', function(requisicaoAoServidor, respostaDoServidor){
    respostaDoServidor.send('Esta é a mesa de trabalho do aluno Thomas Breno. Nessa aula aprendemos sobre instalar módulos via NPM, configurar o Gitignore e usar o express.');
});

aplicativo.listen(1234);