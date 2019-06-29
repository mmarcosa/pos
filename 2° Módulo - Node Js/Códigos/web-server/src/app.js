const path = require('path');
const express = require('express');
const hbs = require('hbs');

//A configuração básica do express é apenas isso:
const app = express();

//aqui estou pegando o diretório public, onde está tudo que deve ser público
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//configuracoa do handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

//aqui estou falando para que o diretório public seja usado pelo framework
app.use(express.static(publicDirectoryPath));

//render do hbs --> Definições das rotas
app.get('', (req, res) => {
    res.render('index', {
        title: 'Welcome to the quotes system',
        author: 'Marcos'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        author: 'Marcos'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'HELP'
    });
})

console.log(__dirname);
console.log(path.join(__dirname, '../public'));


app.get('', (req, res) => {
    res.send('<h1>It works!</h1>');
})

app.get('/help', (req, res) => {
    res.send('Help page');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

app.get('/quotes', (req, res) => {
    const quote = {
        symbol : 'PETR4.SA',
        price : 10,
        price : 12,
        day_high : 13,
        day_low : 9
    }
    
    const quotes = new Array();
    quotes.push(quote);
    quotes.push(quote);

    res.send(quotes);
})

app.get('*', (req, res) =>{
    res.render('404', {
        title : '404',
        errorMessage : 'Page not found ..',
        author: 'Marcos'
    });
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title : '404',
        errorMessage :  'There is nothing after help page ..',
        author: 'Marcos'
    });
})

app.listen(3000, () => {
    console.log('server is up on port 3000');
})
