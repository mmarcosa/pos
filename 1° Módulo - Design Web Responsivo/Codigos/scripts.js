

var soma = function soma(x, y) {
    return x+y;
}

console.log(soma(3, 5));

var frutas = new Array('maçã', 'laranja', 'banana');
console.log(frutas);


var frutas1 = ['maçã', 'laranja', 'banana'];
console.log(frutas1);

var frutas2=[];
frutas2[0] = 'banana';
frutas2[1] = 'maçã';
frutas2[2] = 'laranja';
frutas2[3] = 'uva';

console.log(frutas2);


console.log(frutas2.join(', ' ));


var fn = function(f){
    console.log(f)
}
frutas.forEach(fn);


frutas2.forEach(function(f){
    console.log(f)
})

var pessoa = {
    nome: 'joao',
    sobrenome: 'silva',
    idade: 35,
    casado: false,
    contatos: ['(11)12345-0987', 'email@teste.com'],
    nomeCompleto: function(){
        return this.nome+ '' + this.sobrenome;
    },
    endereco: {
        rua: 'Rua 10',
        numero: 1100
    }

}

console.log(pessoa);
console.log(pessoa.nomeCompleto);

// Função construtora
function Pessoa (n, s, i){
    this.nome = n;
    this.sobrenome = s;
    this.nomeCompleto = function(){
        return this.nome + " " + this.sobrenome;
    };
    self.idade = i;
}

var joao = new Pessoa('João', 'Silva', 35);
console.log(joao);

//Prototipos
var pessoa2 = {
    nome: 'Fulano',
    sobrenome: 'de Tal'
}


var joao = Object.create(pessoa2);

var maria = Object.create(pessoa2);
maria.nome = "Maria";



var ranking = {
    pos: 0,
    get getPos(){
        return ("0" + this.pos).substr(-2);
    },
    set setPos(n) {
        if(n > 0 && n < 100)
            this.pos = n;
        else
            console.log('erro: n fora da faixa');
        
    }
};
console.log(ranking.getPos);
ranking.setPos = 7;
console.log(ranking.getPos);
ranking.setPos = 8;
console.log(ranking.getPos);
ranking.setPos = 11;
console.log(ranking.getPos);
ranking.setPos = 12;
console.log(ranking.getPos);


    var produtos =
    {
        "listaProdutos":[
        {
            "código":1,
            "nome": "produto1",
            "preço": 120.00
        },            
    
        {
            "código":2,
            "nome": "produto2",
            "preço": 110.00
        },      
            
        {
            "código":3,
            "nome": "produto3",
            "preço": 130.00
        }]        
    };


console.log(produtos);
console.log(JSON.stringify(produtos));


        class Poligono {
            constructor(largura, altura){
                this.largura = largura;
                this.altura = altura;
            }
            get area(){
                return this.altura*this.largura;
            }
        }
        
        
        class Ponto{
            constructor(x,y){
                this.x = x;
                this.y = y;
            }
            static distancia(a,b){
                const dx = a.x-b.x;
                const dy = a.y-b.y;
                return Math.sqrt(dx*dx + dy*dy);
            }
            toString(){
                return '(' + this.x+','+this.y+')';
            }
            
        }

const p1 = new Ponto(5,5);
const p2 = new Ponto(10,10);
console.log(Ponto.distancia(p1,p2));



class PontoColorido extends Ponto{
    constructor(x,y, cor){
        super(x,y);
        this.cor = cor;
    }
    toString(){
        return super.toString() + ' em ' + this.cor;
    }
    
}

const pc = new PontoColorido(10,10, 'verde');
console.log(pc.toString());



//NUMBER

var valores = [10, 11, 5, 8, 13];
var maiorValor = 0;

for(let n of valores){
    if(n>maiorValor)
        maiorValor = n;
}
console.log(maiorValor);

console.log(Number.EPSILON);

//MATH


console.log(Math.pow(2,3));
console.log(Math.min(3,2,4,3,1));
console.log(Math.round(3.67));

//DATE

var agora = new Date();
var natal = new Date(2015,11,25);
var reuniao1 = new Date(2016,03,12,11,30,00,00);
console.log(agora);
console.log(natal);
console.log(reuniao1);
console.log(reuniao1.toLocaleString());


console.log(agora.getFullYear());
console.log(agora.getDay());
console.log(reuniao1.getHours());
console.log(reuniao1.getMinutes());



// STRING </p>
        
var s1 = "Olá Mundo";
var s2 = new String ("Olá Mundo");
        

console.log(s2.indexOf("n"));
console.log(s2.startsWith("n"));
console.log(s2.toLocaleLowerCase());
console.log(s2.substring(-5, 2));
            
            
//REGULAR EXPRESSIONS - REGEXp
            
var reTelefone = /\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}/g;

var fone1 = "(31)12345-1234";
var fone2 = "12345-1234";

console.log(reTelefone.test(fone1));
console.log(reTelefone.test(fone2));



//COLEÇÔES - MAP, SET, WEAKMAP, WEAKSET

//MAP

var veiculos = new Map();
veiculos.set("HMG0248", "Honda Civic");
veiculos.set("HMG0247", "Toyota Corolla");
veiculos.set("HMG0246", "Chevrolet Corsa");

console.log(veiculos.size);

console.log(veiculos.get("HMG0248"));
console.log(veiculos.get("HMG032324e234"));
console.log(veiculos.has("HMG0248"));

for(var [placa,carro] of veiculos) {
    console.log(`A placa do ${carro} é ${placa}`);
}

//SET

 var novosVeiculos = new Set();
 novosVeiculos.add("Honda Civic");
 novosVeiculos.add("Toyota Corolla");
 novosVeiculos.add("Fiat Uno");
        
 console.log(novosVeiculos.has("Honda Civic"));
console.log(novosVeiculos.has("Fusca"));


function carregaDados(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        /* 
        readyState
        0 - requisição não foi iniciada
        1 - conexão com o servidor estabelecida
        2 - requisição recebida
        3 - requisição em processamento
        4 - resposta pronta
        
        
        status
        200 - resposta OK
        404 - página/url não foi encontrada
        */
        
        if(xhr.readyState==4 && xhr.status==200){
            document.getElementById('dados').innerHTML = formata(xhr.responseText);
        }

    }
    
    xhr.open("GET", "produtos.json", true);
    xhr.send();
    
}


function formata(strDados){
    var objDados = JSON.parse(strDados);
    var linhasTabela = '';
    for(lp of objDados['lista de produtos']){
        linhasTabela += '<tr><td>' + lp['código']+
        '</td><td>'+lp['nome']+
        '</td><td>'+lp['preco']+'</td></tr>';
    }
    return linhasTabela;
}