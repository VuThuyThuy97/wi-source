// let models = require('../models');
var path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
let Product = models.Product
module.exports.getProductFullInfo = function (idProduct, callback) {
    console.log('idProduct', idProduct);
    Product.findById(idProduct, {
        include: [{
            model: models.Species,
        }, {
            model: models.Class,
            include: {
                model: models.Harvest,
                include: {
                    model: models.Plot,
                    include: [{
                        model: models.UsingFertilizer,
                        include: {
                            model: models.BuyingFertilizer
                        }
                    }, {
                        model: models.UsingPesticide,
                        include: models.BuyingPesticide
                    }, {
                        model: models.Producer
                    }]
                }
            }
        },  {
            model: models.Plant,
        }]
    }).then(product => {
        console.log('found');
        callback(null, product);
    }).catch(err => {
        console.log('not found', err);
        callback(err)
    })
}
module.exports.createProduct = function (product, callback) {
    Product.create(product).then(product => {
        callback(null, product);
    }).catch(err => {
        callback(err);
    })
}
module.exports.getAllProduct = function (callback) {
    Product.findAll().then(products => {
        callback(null, products);
    }).catch(err => {
        callback(err);
    })
}