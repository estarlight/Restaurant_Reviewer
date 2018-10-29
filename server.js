var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/static')));
app.use(express.static( __dirname + '/public/dist/public' ));


mongoose.connect('mongodb://localhost/restaurant_db', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(9000, function () {
    console.log("listening on port 9000");
})