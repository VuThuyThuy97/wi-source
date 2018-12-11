let express = require('express');
let router = express.Router();
let response = require('../response');
let path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let historyModel = require('../createHistory');
const productModel = require('./product.model');

// router.get('/info/:idProduct', function (req, res) {
//     productModel.getProductFullInfo(req.params.idProduct, (err, product) => {
//         if (err) res.send(response(404, 'PRODUCT NOT FOUND', err));
//         else res.send(response(200, 'SUCCESSFULLY', product));
//     })
// })
router.post('/new', function (req, res) {
    models.User.findOne({ username: req.decoded.username }).then(user => {
        productModel.createProduct(Object.assign(req.body, { idUser: user.idUser }), (err, product) => {
            if (err) res.send(response(512, 'ERROR CREATE PRODUCT', err));
            else {
                historyModel.createHistory(req.decoded.username, 'product', 'create', req.body, function (err) {
                    res.send(response(200, 'SUCCESSFULLY', product));
                })
            }
        })
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE ', err));
    })
})
// router.get('/list', function (req, res) {
//     productModel.getAllProduct(function(err, products) {
//         if(err) res.send(response(512, 'ERROR GET PRODUCT', err));
//         else res.send(response(200, 'SUCCESSFULLY', products));
//     })
// })
module.exports = router;
