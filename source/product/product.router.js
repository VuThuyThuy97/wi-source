let express = require('express');
let router = express.Router();
let response = require('../response');
const productModel = require('./product.model');

router.get('/info/:idProduct', function (req, res) {
    productModel.getProductFullInfo(req.params.idProduct, (err, product) => {
        if (err) res.send(response(404, 'PRODUCT NOT FOUND', err));
        else res.send(response(200, 'SUCCESSFULLY', product));
    })
})
router.post('/new', function (req, res) {
    productModel.createProduct(req.body, (err, product)=>{
        if(err) res.send(response(512, 'ERROR CREATE PRODUCT', err));
        else res.send(response(200, 'SUCCESSFULLY', product));
    })
})
router.get('/list', function (req, res) {
    productModel.getAllProduct(function(err, products) {
        if(err) res.send(response(512, 'ERROR GET PRODUCT', err));
        else res.send(response(200, 'SUCCESSFULLY', products));
    })
})
module.exports = router;
