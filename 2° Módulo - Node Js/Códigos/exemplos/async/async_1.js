console.log('primeiro');

setTimeout(() =>{
    console.log('Depois de 2 segundos');

    setTimeout(() => {
        console.log('Depois de 1 segundos');
    }, 1)

    console.log('Outra mensagem depois do tempo');
}, 2000)

setTimeout(() => {
    console.log('Depois de 0 segundos');
}, 0)

console.log('segundo');

console.log('terceiro');