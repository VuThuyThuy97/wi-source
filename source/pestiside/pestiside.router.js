let express = require('express');
let router = express.Router();
const models = require('../models');
let response = require('../response');
let Pes = models.BuyingPesticide;
let PesModel = require('./pestiside.model');

router.get('/all', function (req, res) {
    Pes.findAll(function () {
        res.status(200).send('found');
    })
})
router.post('/new', function (req, res) {
    Pes.create(req.body).then(function (pes){
        res.send(response(200, 'SUCCESSFULLY', pes));
    }).catch(err=>{
        res.send(response(512, 'ERROR CREATE PESTISIDE', err));
    })
})
module.exports = router;
