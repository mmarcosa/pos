const gravarLog = require('./util');
const _ = require('lodash');
const chalk = require('chalk');

//const nome = 'Marcos';
    //console.log(`${nome} ${sobreNome}`);
    //console.log(`${nome} ${sobreNome}`);

//for(let c = 0; c < 100; c++){
//    const resultado = gravarLog('teste ..' + c);
//    console.log('app.js');
//    console.log(gravarLog);
//}

const meuArray = [1,2,3,4,5,6]
console.log('Array 1: ');
const array1 = [1,2,3,4,5,6]
console.log(chalk.bgGreen(array1));
console.log(chalk.red(array1));
console.log('Array 2: ');
const array2 = [1,8,3,4,5,6]
console.log(chalk.bgBlue(array2));
console.log(chalk.gray.inverse(array2));

const meuNovoArray = _.chunk(meuArray, 2)


const diferenca = _.difference(array1, array2);

console.log('testes com o chunk: ')
console.log(meuNovoArray);
console.log('diferença: ')
console.log(diferenca);
console.log(_.indexOf(meuArray, 9));

console.log('Hello')
console.log(process.argv)

//adicionar a uma ocnstante o comando enviado por parametro:
const command = process.argv[2].toUpperCase();
console.log(command)
if(command === 'ADD'){
    console.log(chalk.green.inverse('adding new task'));
}
else if(command === 'REMOVE'){
    console.log(chalk.blue.inverse('removing new task'));
}
else{
    console.log(chalk.red.inverse('command not found'));
}