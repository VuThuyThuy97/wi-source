let express = require('express');
let router = express.Router();
const models = require('../models');
let Plot = models.Plot;

router.get('/all', function (req, res) {
    Plot.findAll(function () {
        res.status(200).send('found');
    })
})
module.exports = router;
