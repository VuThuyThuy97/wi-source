let models = require('../models');
let Product = models.Product
module.exports.getProductFullInfo = function (idProduct, callback) {
    console.log('idProduct', idProduct);
    Product.findById(idProduct, {
        include: [{
            model: models.Species
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
                    }]
                }
            }
        }]
    }).then(product => {
        console.log('found');
        callback(null, product);
    }).catch(err => {
        console.log('not found', err);
        callback(err)
    })
}