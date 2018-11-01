const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.status(200).send('wi-source!');
});

let plotRouter = require('./source/plot/plot.router');
let productRouter = require('./source/product/product.router');
app.use('/plot', plotRouter);
app.use('/product', productRouter);

app.listen('4000', function () {
    console.log('Listening on port 4000');
})