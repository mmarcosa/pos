const request = require('request');

const cotacao = (symbol, callback) => {
    const path = 'https://api.worldtradingdata.com/api/v1/stock?symbol';
    const apiToken = 'oyci0xoKBOjGEebyzAptpooFfhVBm0KoDoGIIp4ZFCMDz0Z1LJxClZnnqpJE';    
    const url = `${path}=${symbol}&api_token=${apiToken}`;

    request({url : url, json : true}, (err, response) => {
        if(err){
            throw new Error(`Something went wrong: ' ${err}`)
        }else if(response.body.Error){
            throw new Error(`Business Error: ${response.body.Error}`)
        }
        const parsedJSON = response.body.data[0]
        const {symbol, price_open, price, day_high, day_low} =  parsedJSON
        const data = {symbol, price_open, price, day_high, day_low}

        callback(data)
    })
}

module.exports = cotacao