let express = require('express');
let router = express.Router();
const models = require('../models');
let response = require('../response');
let Fert = models.BuyingFertilizer;
let fertModel = require('./fertilizer.model');

router.get('/all', function (req, res) {
    Fert.findAll(function () {
        res.status(200).send('found');
    })
})
router.post('/new', function (req, res) {
    Fert.create(req.body).then(function (fert){
        res.send(response(200, 'SUCCESSFULLY', fert));
    }).catch(err=>{
        res.send(response(512, 'ERROR CREATE FERTILIZER', err));
    })
})
module.exports = router;
