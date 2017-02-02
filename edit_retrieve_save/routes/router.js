var express = require('express');
var router = express.Router();
var User = require('../model/user');

var username;

router.get('/', function (req, res) {
    if((typeof(username) != "undefined"))
        User.findOne({ username: username}, function(err, user) {
        if(err) console.log(err);
        res.send(user.email);
    })
    else {
        res.send("log in first");
    }
})

router.post('/', function (req, res) {
    username = req.body.username;
    var newUser = new User();
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    newUser.email = req.body.email;
    newUser.test = [1,2,3,5];
    User.findOne({ username: req.body.username }, function (err, user) {
        if (err) return console.log(err);
        if (user) return res.send("user exists");
        newUser.save(function (err, saved) {
            if (err) return console.log(err);
            res.status(200).send("user saved");
        });
    })
});

router.post('/edit', function (req, res) {
    username = req.body.username;
    var testarray = [1,2,4,5];
    User.findOne({ username: req.body.username }, function (err, foundUser) {
        if (err) return console.log(err);
        foundUser.email = req.body.email;
        foundUser.test.push(testarray);
        foundUser.save(function (err) {
            if (err) return console.log(err);
            res.send(foundUser);
        });
    })
});
    
module.exports = router;