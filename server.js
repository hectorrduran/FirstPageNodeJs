const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//express hbs 
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//helpers




app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'fernando',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

/*app.get('/', (req, res) => {
    res.send('Hello World')
});
*/
app.listen(port), () => {
    console.log("server iniciado");
};