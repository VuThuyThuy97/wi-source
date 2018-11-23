let express = require('express');
let router = express.Router();
let response = require('../response');
// const models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let Species = models.Species;
// let SpeciesModel = require('./pestiside.model');

router.get('/list', function (req, res) {
    Species.findAll({}).then(function (list) {
        res.send(response(200, 'SUCCESSFULLY', list));
    }).catch(err=> {
        res.send(response(512, 'ERROR', err));
    })
})
router.post('/new', function (req, res) {
    Species.create(Object.assign(req.body, {userName: req.decoded.username})).then(species =>{
        res.send(response(200, 'SUCCESSFULLY', species));
    }).catch(err=>{
        res.send(response(512, 'ERROR CREATE SPECIES', err));
    })
})
module.exports = router;
