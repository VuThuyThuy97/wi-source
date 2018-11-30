let express = require('express');
let router = express.Router();
// const models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let response = require('../response');
let Producer = models.Producer;
// let ProducerModel = require('./pestiside.model');

router.get('/list', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Producer.findAll({
            where: {
                idUser: user.idUser,
            }
        }).then(function (producer) {
            res.status(200).send(response(200, 'SUCCESSFULLY', producer));
        }).catch(err => {
            res.send(response(512, 'ERROR CREATE PRODUCER', err));
        });
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE ', err));
    })
})
router.post('/new', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Producer.create(Object.assign(req.body, { idUser: user.idUser })).then((producer) => {
            res.send(response(200, 'SUCCESSFULLY', producer));
        }).catch(err => {
            res.send(response(512, 'ERROR CREATE PRODUCER', err));
        })
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE ', err));
    })
})
module.exports = router;
