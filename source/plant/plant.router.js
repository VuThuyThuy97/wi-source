let express = require('express');
let router = express.Router();
const models = require('../models');
let response = require('../response');
let Plant = models.Plant;
let plantModel = require('./plant.model');

router.get('/list', function (req, res) {
    Plant.findAll({
        include: [{
            model: models.Species
        }, {
            model: models.Plot,
            include: {
                model: models.Harvest,
                include: models.Class
            }
        }]
    }).then(function (plant){
        res.send(response(200, 'SUCCESSFULLY', plant));        
    }).catch(err=>{
        res.send(response(512, 'ERROR CREATE PLANT', err));
    })
})
router.post('/new', function (req, res) {
    Plant.create(req.body).then(function (plant){
        res.send(response(200, 'SUCCESSFULLY', plant));        
    }).catch(err=>{
        res.send(response(512, 'ERROR CREATE PLANT', err));
    })
})
module.exports = router;
