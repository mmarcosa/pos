const cotacao = require('./cotacao');

/*
cotacao('PETR4.SA', (data) => {
    console.log(data)
})
*/

//criar um CLI usando yargs  OK
//vai receber i, parâmetro de entrada que vai ser o código ativo na bolsa de valores OK
const chalk = require('chalk');
const yargs = require('yargs');

yargs.command({
    command: 'pesquisar',
    describe: 'Recebe um código de um ativo na bolsa e pesquisa suas informações',
    builder:{
        ativo:{
            describe : 'Nome do ativo',
            demandOption : true,
            type : 'string',
        },
    },
    handler: (argv) => {
        cotacao(argv.ativo.toUpperCase(), (data) => {
            console.log(chalk.green.bold.inverse(data.symbol));
            console.log(chalk.red.bold(`Menor valor do dia: ${data.day_low}`));
            console.log(chalk.green.bold(`MAior valor do dia: ${data.day_high}`));
            console.log(chalk.blue.bold(`Fechamento: ${data.price}`))
        })
    }
})

yargs.parse();


//se não receber o ativo, retornar um erro OK
//se receber, deve consultar o ativo usando request OK
//devolver o valor de abertura, valor de fechamento, maior alta do dia, menor baixa do dia OK
//mostra os valores de baixa em vermelho com chalk OK
//mostrar valores de altra em azul OK
//utilizar arrow function  OK
//utilizar as variaveis do es6 OK
//utilizar destruct OK