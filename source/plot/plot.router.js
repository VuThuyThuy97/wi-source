let express = require('express');
let router = express.Router();
const models = require('../models');
let response = require('../response');
let Plot = models.Plot;
let plotModel = require('./plot.model');

router.get('/list', function (req, res) {
    Plot.findAll({}).then(function (plot) {
        res.send(response(200, 'SUCCESSFULLY', plot));        
    }).catch(err=>{
        res.send(response(512, 'ERROR', err));
    })
})
router.post('/new', function (req, res) {
    Plot.create(req.body).then(function (plot){
        res.send(response(200, 'SUCCESSFULLY', plot));        
    }).catch(err=>{
        res.send(response(512, 'ERROR CREATE PLOT', err));
    })
})
module.exports = router;
