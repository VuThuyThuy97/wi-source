let express = require('express');
let path = require('path');
let router = express.Router();
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let response = require('../response');
let Plant = models.Plant;
let historyModel = require('../createHistory');
let plantModel = require('./plant.model');

router.get('/list', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Plant.findAll({
            where: {
                idUser: user.idUser,
            },
            include: [{
                model: models.Species
            }, {
                model: models.Plot,
                include: {
                    model: models.Harvest,
                    include: models.Class
                }
            }]
        }).then(function (plant) {
            res.send(response(200, 'SUCCESSFULLY', plant));
        }).catch(err => {
            res.send(response(512, 'ERROR CREATE PLANT', err));
        })
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE ', err));
    })
})
router.post('/new', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        Plant.create(Object.assign(req.body, { idUser: user.idUser })).then(function (plant) {
            historyModel.createHistory(req.decoded.username, 'plant', 'create', req.body, function (err) {
                res.send(response(200, 'SUCCESSFULLY', plant));
            })
        }).catch(err => {
            res.send(response(512, 'ERROR CREATE PLANT', err));
        })
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE ', err));
    })

})
module.exports = router;
