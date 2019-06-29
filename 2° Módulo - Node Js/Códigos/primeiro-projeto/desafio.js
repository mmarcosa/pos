//Imprimir o tempo em que um processo demora pra realizar determinada ação
//ação: for de 0 a 1000
//passos: 
// - contar o tempo inicial 
// - contra o tempo final
now = new Date;
cronometro = new Date;
h = now.getHours();
m = now.getMinutes();
s = now.getMilliseconds();
//console.log(h + ":" + m + ":" + s);

console.time(cronometro);
for(let i = 0; i < 1000; i++){
    
}
console.timeEnd(cronometro);
//s2 = now.getMilliseconds();
////console.time();
//console.log(h + ":" + m + ":" + (s2));
//aux = s2 - s;
//console.log("O processamento do for levou: " + aux + " segundos");
