let express = require('express');
let router = express.Router();
// const models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let response = require('../response');
let Fert = models.BuyingFertilizer;
let fertModel = require('./fertilizer.model');
let historyModel = require('../createHistory');

router.get('/list', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Fert.findAll({
            where: {
                idUser: user.idUser
            }
        }, function () {
            res.status(200).send('found');
        })
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE', err));
    })
})
router.post('/new', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Fert.create(Object.assign(req.body, { idUser: user.idUser })).then(function (fert) {
            historyModel.createHistory(req.decoded.username, 'buying_fertilizer', 'create', req.body, function (err) {
                res.send(response(200, 'SUCCESSFULLY', fert));
            })
        }).catch(err => {
            res.send(response(512, 'ERROR CREATE FERTILIZER', err));
        })
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE', err));
    })
})
router.post('/use/new', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        models.UsingFertilizer.create(Object.assign(req.body, { idUser: user.idUser })).then(function (pes) {
            historyModel.createHistory(req.decoded.username, 'using_fertilizer', 'create', req.body, function (err) {
                res.send(response(200, 'SUCCESSFULLY', pes));
            })
            res.send(response(200, 'SUCCESSFULLY', pes));
        }).catch(err => {
            res.send(response(512, 'ERROR CREATE ', err));
        })
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE ', err));
    })
})
module.exports = router;
