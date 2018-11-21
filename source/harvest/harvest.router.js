let express = require('express');
let router = express.Router();
// const models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let response = require('../response');
let Harvest = models.Harvest;
let harvestModel = require('./harvest.model');

router.get('/list', function (req, res) {
    Harvest.findAll({}).then(function (harvest) {
        res.send(response(200, 'SUCCESSFULLY', harvest));
    }).catch(err=>{
        res.send(response(512, 'ERROR', err));
    })
})
router.post('/new', function (req, res) {
    Harvest.create(req.body).then(function (harvest){
        res.send(response(200, 'SUCCESSFULLY', harvest));
    }).catch(err=>{
        res.send(response(512, 'ERROR CREATE HARVEST', err));
    })
})
module.exports = router;
