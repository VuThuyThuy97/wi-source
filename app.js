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
let userRouter = require('./source/authentication/authentication.router');
let publicRouter = require('./source/publicRoutes');
let verifyAuthen = require('./source/verify-authentication');

console.log('publicRoutes', typeof publicRoutes);

app.use('/public', publicRouter);
app.use('/plot', verifyAuthen, plotRouter);
app.use('/plant', verifyAuthen, plantRouter);
app.use('/product', verifyAuthen, productRouter);
app.use('/species', verifyAuthen, speciesRouter);
app.use('/harvest', verifyAuthen, harvestRouter);
app.use('/fertilizer', verifyAuthen, fertRouter);
app.use('/pestiside', verifyAuthen, pesRouter);
app.use('/producer', verifyAuthen, producerRouter);
app.use('/class', verifyAuthen, classRouter);
app.use('/auth', userRouter);


app.listen('4000', function () {
    console.log('Listening on port 4000');
})