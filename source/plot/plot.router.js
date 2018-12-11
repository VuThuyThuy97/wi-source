let express = require('express');
let router = express.Router();
// const models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let response = require('../response');
let Plot = models.Plot;
let historyModel = require('../createHistory');
let plotModel = require('./plot.model');

router.get('/list', function (req, res) {
    console.log('----------');
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Plot.findAll({
            where: {
                idUser: user.idUser,
            }
        }).then(function (plot) {
            res.send(response(200, 'SUCCESSFULLY', plot));
        }).catch(err => {
            res.send(response(512, 'ERROR', err));
        })
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE ', err));
    })
})
router.post('/new', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Plot.create(Object.assign(req.body, { idUser: user.idUser })).then(function (plot) {
            historyModel.createHistory(req.decoded.username, 'plot', 'create', req.body, function (err) {
                res.send(response(200, 'SUCCESSFULLY', plot));
            })
        }).catch(err => {
            res.send(response(512, 'ERROR CREATE PLOT', err));
        })
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE ', err));
    })
})
module.exports = router;
