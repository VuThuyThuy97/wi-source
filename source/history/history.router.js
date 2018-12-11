let express = require('express');
let router = express.Router();
let async = require('async');
// const models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let response = require('../response');
var key = 'thisismyreallysecret';
var encryptor = require('simple-encryptor')(key);

router.get('/list', function (req, res) {
    models.History.findAll().then(function (histories) {
        async.each(histories, function (h, next) {
            h.action = encryptor.decrypt(h.action);
            h.time = encryptor.decrypt(h.time);
            h.username = encryptor.decrypt(h.username);
            console.log('aaaaaaaaaaaaaa', h.description, 'bbbbbbb', encryptor.decrypt(h.description) )

            // h.description = encryptor.decrypt(h.description);
            h.table = encryptor.decrypt(h.table);
            next();
        }, function () {
            res.send(response(200, 'SUCCESSFULLY', histories));
        })
    }).catch(err => {
        console.log('FFFFFFFFFFFFFFF', err)
        res.send(response(512, 'ERROR', err));
    })
})
module.exports = router;
