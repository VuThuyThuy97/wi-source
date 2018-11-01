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
module.exports = router;
