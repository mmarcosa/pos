//criar um CLI usando yargs
const chalk = require('chalk');
const yargs = require('yargs');
const cotacao = require('./cotacao')

yargs.command({
    command: 'pesquisar',
    describe: 'Recebe um código de um ativo na bolsa e pesquisa suas informações',
    builder:{
        name:{
            describe : 'Nome do ativo',
            demandOption : true,
            type : 'string',
        },
    },
    handler: function(argv){
        const info = chalk.green.bold.inverse('Pesquisando ativo na bolsa');
        console.log(info);
        cotacao.cotacao(argv.name, (data));
    }
})

//vai receber i, parâmetro de entrada que vai ser o código ativo na bolsa de valores
//se não receber o ativo, retornar um erro
//se receber, deve consultar o ativo usando request
//devolver o valor de abertura, valor de fechamento, maior alta do dia, menor baixa do dia
//mostra os valores de baixa em vermelho com chalk
//mostrar valores de altra em azul
//utilizar arrow function
//utilizar as variaveis do es6
//utilizar destruct