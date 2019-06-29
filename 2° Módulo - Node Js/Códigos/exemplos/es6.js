const name = 'Marcos';
const age = 27;
const country = 'Brasil'

/* se a variavel tem o mesmo nome da variavel que tem o valor a ser associado, podemos tirá-la
* o exemplo abaixo ficaria:
const pessoa = {
    name: name,
    age: age,
    country: country
}
*/

const pessoa = {
    nome: name,
    idade: age,
    país: country
}


console.log(pessoa);

const {nome, idade} = pessoa
console.log(nome)
console.log(idade)

//criar um CLI usando yargs
//vai receber i, parâmetro de entrada que vai ser o código ativo na bolsa de valores
//se não receber o ativo, retornar um erro
//se receber, deve consultar o ativo usando request
//devolver o valor de abertura, valor de fechamento, maikor alta do dia, menor baixa do dia
//mostra os valores de baixa em vermelho com chalk
//mostrar valores de altra em azul
//utilizar arrow function
//utilizar as variaveis do es6
//utilizar destruct
