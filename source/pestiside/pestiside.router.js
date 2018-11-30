let express = require('express');
let router = express.Router();
// const models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let response = require('../response');
let Pes = models.BuyingPesticide;
let PesModel = require('./pestiside.model');

router.get('/list', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Pes.findAll({
            where: {
                idUser: user.idUser
            }
        }, function () {
            res.status(200).send('found');
        })
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE ', err));
    })
})
router.post('/new', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Pes.create(Object.assign(req.body, { idUser: req.decodedidUser })).then(function (pes) {
            res.send(response(200, 'SUCCESSFULLY', pes));
        }).catch(err => {
            res.send(response(512, 'ERROR CREATE PESTISIDE', err));
        })
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE ', err));
    })
})
module.exports = router;
