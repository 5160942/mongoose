var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var User = require('./model/user');
var routes = require('./routes/router');

var app = express();

mongoose.connect('mongodb://localhost:27017/test', function(err) {
    if(err) return console.log(err);
    console.log("db connected");
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', routes);

app.listen(3000, function() {
    console.log("port 3000 listening");
});