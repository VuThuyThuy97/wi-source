let express = require('express');
let router = express.Router();
// const models = require('../models')
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let response = require('../response');
let Class = models.Class;
let classModel = require('./class.model');

router.get('/list', function (req, res) {
    Class.findAll({}).then(function (c) {
        res.send(response(200, 'SUCCESSFULLY', c));        
    }).catch(err=>{
        res.send(response(512, 'ERROR', err));
    })
})
router.post('/new', function (req, res) {
    Class.create(req.body).then(function (c){
        res.send(response(200, 'SUCCESSFULLY', c));        
    }).catch(err=>{
        res.send(response(512, 'ERROR CREATE CLASS', err));
    })
})
module.exports = router;
