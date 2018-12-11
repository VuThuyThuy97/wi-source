let express = require('express');
let router = express.Router();
// const models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let response = require('../response');
let Harvest = models.Harvest;
let harvestModel = require('./harvest.model');
let md5 = require('md5')

router.get('/list', function (req, res) {
    History.findAll().then(function (histories) {
        async.each(histories, function (h) {
            h
        })
        res.send(response(200, 'SUCCESSFULLY', harvest));
    }).catch(err => {
        res.send(response(512, 'ERROR', err));
    })
})
