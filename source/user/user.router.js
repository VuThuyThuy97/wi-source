let express = require('express');
let router = express.Router();
let response = require('../response');
// const models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let User = models.User;
// let SpeciesModel = require('./pestiside.model');

router.get('/list', function (req, res) {
    models.User.findAll({
        where: {
            role: 2
        }
    }).then(users => {
        res.send(response(200, 'SUCCESSFULLY', users));
    }).catch(err => {
        res.send(response(512, 'ERROR GET USERS', err));
    })
})

router.post('/edit', function (req, res) {
    User.update(req.body,
        { where: { username: req.body.username } }
    ).then(() => {
        res.send(response(200, 'SUCCESSFULLY'));
    }).catch(err => {
        res.send(response(512, 'ERROR', err));
    })
})

router.post('/delete', function (req, res) {
    User.destroy(
        { where: { username: req.body.username } }
    ).then(() => {
        res.send(response(200, 'SUCCESSFULLY'));
    }).catch(err => {
        res.send(response(512, 'ERROR', err));
    })
})

module.exports = router;
