var express = require('express');

var webpack = require('webpack');

/*Babel Register */
require('babel-register')({
  presets:['react','es2015']
});

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var App = require('./client/App');

var app = express();

app.use('/static',express.static('./static'));

app.get('/',function(req,res){

  console.log(App);

  var htmlHead = '<html><body><div id="app">';

  var htmlTail = '</div><script src="static/bundle.js"></script></body></html>'

  var html = ReactDOMServer.renderToString(
    React.createElement(App.default)
  );

   //html ="Hpoo";

  res.send(htmlHead+html+htmlTail);

});



app.listen(3333);
console.log("App listening on port 3333");
