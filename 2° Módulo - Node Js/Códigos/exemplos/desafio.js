const fs = require('fs');
//criar um objeto carro

const carro = {
    modelo : "Palio",
    cor: "prata",
    qtdePortas : 4,
    ano: 2007,
    maca: 'FIAT'
}

//converter em json
const carroJSON = JSON.stringify(carro);

//gravar em arquivo
fs.writeFileSync('carro.json', carroJSON);
console.log(carroJSON); 
//recuperar esse objeto
const carroContent = fs.readFileSync('carro.json');

//alterar algum atributo
const carroComoObjeto = JSON.parse(carroContent.toString());
carroComoObjeto.modelo = 'celta';

//salvar a alteração
const carroJSON2 = JSON.stringify(carroComoObjeto);
fs.writeFileSync('carro.json', carroJSON2);

//validar o arquivo
console.log(carroJSON2);
