const fs = require('fs');

const pessoa = {
    nome : "Marcos",
    sobrenome : "Barbosa",
    idade : 27
}


//converter o objeto js em json
const pessoaJSON = JSON.stringify(pessoa);

//gravar em um arquivo
fs.writeFileSync('pessoa.json', pessoaJSON);

//recuperar o conteudo do arquivo json
const pessoaContent = fs.readFileSync('pessoa.json');
console.log(pessoaContent.toString());

//transformar em objeto de novo
const pessoaComoObjeto = JSON.parse(pessoaContent.toString());
console.log(pessoaComoObjeto);