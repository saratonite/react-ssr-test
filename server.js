var path = require("path")
var express = require('express');

var webpack = require('webpack');

var port = process.env.PORT || 8080;

/*Babel Register */
require('babel-register')({
  presets:['react','es2015']
});

var universalApp = require('./universal-app');


var app = express();

app.use('/static',express.static(path.join(__dirname,'static')));

app.use('*',universalApp);



app.listen(port,function(){
  console.log("App listening on port "+port);
});
