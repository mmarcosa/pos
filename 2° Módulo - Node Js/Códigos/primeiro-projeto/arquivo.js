//isso importa o pacote
const fs = require('fs');
const fileName = 'arquivo.txt';
//fs.writeFileSync('arquivo.txt', 'novo conteudo a ser gravado ..');
fs.appendFileSync(fileName, 'novo conteudo a ser gravado 444 ..');
fs.appendFileSync(fileName, 'novo conteudo a ser gravado 555 ..');
//desafio:
//manter o conteúdo do arquivo existente e adicionar o novo conteudo

