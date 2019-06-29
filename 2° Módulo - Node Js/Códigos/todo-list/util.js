//criar uma função que recebe um parâmetro
// gravar em um arquilo log
//adicionar arquivos em uma nova linha;
//adicionar data e hora em que a função foi chamada

 
const fs = require('fs');
const fileName = 'log.txt';
//const _ = require('lodash');

now = new Date;
cronometro = new Date;
h = now.getHours();
m = now.getMinutes();
s = now.getMilliseconds();
const gravarLog = (texto) =>{
    return fs.appendFileSync(fileName, texto + '-->' + h + ":" + m + ":" + s + '\n');
}
module.exports = gravarLog;

