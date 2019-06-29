setTimeout(() =>{
    console.log('durante');
    console.log('olá');
}, 2000)

console.log('depois');

const getPrice = (symbol, callback) => {
    setTimeout(() => {
        const data = {
            symbol : 'PETR4.SA',
            price : 38
        }
        callback(data)
    }, 2000)
}
//const price = getPrice('PETR4.SA');
//console.log(price);

getPrice('PETR4.SA', (data) =>{
    console.log(data)
})

//criar uma função acima de soma
//usar o setTimeout dentro da função de soma
//depois de 3 segundos dentro do método de soma, retornar o resultado da soma


const somaDoisNumeros = (numero1, numero2, callback) => {
    setTimeout(() => {
        aux = numero1 + numero2;
        const data = {
            numero1 : numero1,
            numero2 : numero2,
            soma: aux
        }
        callback(data)
    }, 3000)
}

somaDoisNumeros(17, 4, (data) =>{
    console.log(data)
})

