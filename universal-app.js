import express from 'express';

var route = express.Router();

import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import { StaticRouter as Router } from 'react-router-dom';

import App  from './client/App' ;


var renderStatic = true;

route.get('*',function(req,res){

  let html = '';

  let context = {};

  var htmlHead = '<html><body><div id="app">';

  var htmlTail = '</div><script src="static/bundle.js"></script></body></html>'

  var renderMethod = renderStatic ? renderToStaticMarkup :  renderToString;

   html = renderMethod(
     <Router location={req.baseUrl} context={context}>
        <App></App>
     </Router>
   );


  res.send(htmlHead+html+htmlTail);



})

module.exports = route;
