var express = require('express');

/*Babel Register */
require('babel-register')({
  presets:['react','es2015']
});

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var Hello = require('./client/Hello');

var app = express();

app.get('/',function(req,res){

  console.log(Hello);

  var html = ReactDOMServer.renderToString(
    React.createElement(Hello.default)
  );

   //html ="Hpoo";

  res.send(html);

});



app.listen(3000);
console.log("App listening on port 3000");
