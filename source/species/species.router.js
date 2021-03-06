let express = require('express');
let router = express.Router();
let response = require('../response');
// const models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let historyModel = require('../createHistory');
let Species = models.Species;
// let SpeciesModel = require('./pestiside.model');

router.get('/list', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Species.findAll({
            where: {
                idUser: user.idUser,
            }
        }).then(function (list) {
            res.send(response(200, 'SUCCESSFULLY', list));
        }).catch(err => {
            res.send(response(512, 'ERROR', err));
        })
    }).catch(err => {
        res.send(response(512, 'ERROR', err));
    })
})
router.post('/new', async function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Species.create(Object.assign(req.body, { idUser: user.idUser })).then(species => {
            historyModel.createHistory(req.decoded.username, 'species', 'create', req.body, function (err) {
                res.send(response(200, 'SUCCESSFULLY', species));
            })
        }).catch(err => {
            console.log('errrrrrrrrrrrrr', err);
            res.send(response(512, 'ERROR CREATE SPECIES', err));
        })
    }).catch(err => {
        console.log('errrrrrrrrrrrrr', err);
        res.send(response(512, 'ERROR CREATE SPECIES', err));
    })
})
module.exports = router;
