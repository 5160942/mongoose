var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username : {type: String, unique: true},
    password : String,
    email : String,
    test :[String]
});

var User = mongoose.model('test', userSchema);

module.exports = User;