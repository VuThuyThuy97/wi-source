const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use("/", express.static(__dirname));

app.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, 'client', 'index.html'));
});

let plotRouter = require('./source/plot/plot.router');
let plantRouter = require('./source/plant/plant.router');
let productRouter = require('./source/product/product.router');
let speciesRouter = require('./source/species/species.router');
let harvestRouter = require('./source/harvest/harvest.router');
let fertRouter = require('./source/fertilizer/fertilizer.router');
let pesRouter = require('./source/pestiside/pestiside.router');
let producerRouter = require('./source/producer/producer.router');
let classRouter = require('./source/class/class.router');

app.use('/plot', plotRouter);
app.use('/plant', plantRouter);
app.use('/product', productRouter);
app.use('/species', speciesRouter);
app.use('/harvest', harvestRouter);
app.use('/fertilizer', fertRouter);
app.use('/pestiside', pesRouter);
app.use('/producer', producerRouter);
app.use('/class', classRouter);


app.listen('4000', function () {
    console.log('Listening on port 4000');
})