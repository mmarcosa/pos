const request = require('request');

//key: oyci0xoKBOjGEebyzAptpooFfhVBm0KoDoGIIp4ZFCMDz0Z1LJxClZnnqpJE

const url = 'https://api.worldtradingdata.com/api/v1/stock?symbol=PETR4.SA&api_token=oyci0xoKBOjGEebyzAptpooFfhVBm0KoDoGIIp4ZFCMDz0Z1LJxClZnnqpJE';

/*
request({url : url}, (err, response) => {
    const parsedJSON = JSON.parse(response.body);
    //console.log(parsedJSON.data)
    console.log(parsedJSON.data[0].symbol)
    console.log(parsedJSON.data[0].name)
    console.log(parsedJSON.data[0].price)
})
*/

request({url : url, json : true}, (err, response) => {
    if(err){
        console.error(err);
    }
    const parsedJSON = response.body;
    console.log(parsedJSON.data[0].symbol)
    console.log(parsedJSON.data[0].name)
    console.log(parsedJSON.data[0].price)
})