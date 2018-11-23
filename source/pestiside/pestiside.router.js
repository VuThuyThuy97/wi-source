let express = require('express');
let router = express.Router();
// const models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let response = require('../response');
let Pes = models.BuyingPesticide;
let PesModel = require('./pestiside.model');

router.get('/list', function (req, res) {
    Pes.findAll(function () {
        res.status(200).send('found');
    })
})
router.post('/new', function (req, res) {
    Pes.create(Object.assign(req.body, {userName: req.decoded.username})).then(function (pes){
        res.send(response(200, 'SUCCESSFULLY', pes));
    }).catch(err=>{
        res.send(response(512, 'ERROR CREATE PESTISIDE', err));
    })
})
module.exports = router;
