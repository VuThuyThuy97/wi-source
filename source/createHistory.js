var key = 'thisismyreallysecret';
var path = require('path');
var encryptor = require('simple-encryptor')(key);
const models = require(path.join(__dirname, 'models', 'Index.js'));

module.exports.createHistory = function (username, table, action, description, callback) {
    console.log('descrt', description);
    description = JSON.stringify(description);
    let time = new Date();
    models.History.create({
        username: encryptor.encrypt(username),
        table: encryptor.encrypt(table),
        action: encryptor.encrypt(action),
        description: description,
        time: encryptor.encrypt(time.toString())       
    }).then(function (){
        console.log('---------------------------------');
        callback();
    }).catch(err=>{
        callback(err);
        console.log('88888888888888888888888', err);
    })
}
