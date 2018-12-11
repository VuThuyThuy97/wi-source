var md5 = require('md5');
var jwt = require('jsonwebtoken');
var path = require('path');
var response = require('../response');
const models = require(path.join(__dirname, '..', 'models', 'Index.js'));
var User = models.User;

module.exports.register = function(req, res) {
    req.body.password = md5(req.body.password);
    User.create(req.body).then(function(result){
        var token = jwt.sign(req.body,'secretKey');
        console.log('----------', token);
        res.send(response(200, 'SUCCESSFULLY', token));
    }).catch(function(){
        res.send(response(512, 'Username existed'));
    })
}

module.exports.login = function(req, res) {
    req.body.password = md5(req.body.password);
    User.findOne({where: {username: req.body.username}})
        .then(function(user){
            if(!user) {
                res.send(response(404, 'User not existed'));
            } else {
                if(user.password !== req.body.password){
                    res.send(response(512, 'Wrong password'));
                    // res.status(400).send("WRONG PASS");
                } else if(user.status == 'Inactive') {
                    res.send(response(512, 'Your account is Incative.'));
                } else {
                    var responseUser = {
                        "username": req.body.username,
                        "password": req.body.password
                        // "is_active": user.is_active
                    };
                    var token = jwt.sign(responseUser, 'secretKey');
                    res.send(response(200, 'Successfully', {
                        token: token, 
                        role: user.role
                    }));
                }
            }
        })
}