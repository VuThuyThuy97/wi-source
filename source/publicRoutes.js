let express = require('express');
let router = express.Router();
var path = require('path');
const models = require(path.join(__dirname, 'models', 'Index.js'));
let response = require('./response');
let productModel = require(path.join(__dirname, 'product', 'product.model'));


router.get('/product/info/:idProduct', function (req, res) {
    productModel.getProductFullInfo(req.params.idProduct, (err, product) => {
        if (err) res.send(response(404, 'PRODUCT NOT FOUND', err));
        else res.send(response(200, 'SUCCESSFULLY', product));
    })
})
router.get('/product/list', function (req, res) {
    console.log('/dcm');
    productModel.getAllProduct(function(err, products) {
        if(err) res.send(response(512, 'ERROR GET PRODUCT', err));
        else res.send(response(200, 'SUCCESSFULLY', products));
    })
})

module.exports = router;
