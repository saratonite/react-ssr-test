var express = require('express');

var webpack = require('webpack');

/*Babel Register */
require('babel-register')({
  presets:['react','es2015']
});

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var Hello = require('./client/Hello');

var app = express();

app.use('/static',express.static('./static'));

app.get('/',function(req,res){

  console.log(Hello);

  var htmlHead = '<html><body><div id="app">';

  var htmlTail = '<script src="static/bundle.js"></script></div></div></body></html>'

  var html = ReactDOMServer.renderToString(
    React.createElement(Hello.default)
  );

   //html ="Hpoo";

  res.send(htmlHead+html+htmlTail);

});



app.listen(3000);
console.log("App listening on port 3000");
