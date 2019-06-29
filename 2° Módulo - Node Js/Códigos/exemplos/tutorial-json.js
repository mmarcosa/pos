const pessoa = {
    nome : "Marcos",
    sobrenome : "Barbosa",
    idade : 27
}

console.log('Objeto JS');
console.log(pessoa);

const pessoaJSON = JSON.stringify(pessoa);

console.log('JSON');
console.log(pessoaJSON);
console.log(pessoaJSON.nome);   //depois de convertido não é possível acessar o atributo nome 

const pessoaJSONToParse = JSON.parse(pessoaJSON);
console.log(pessoaJSONToParse.nome);