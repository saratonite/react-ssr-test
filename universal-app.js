import express from 'express';

var route = express.Router();

import React from 'react'
import { renderToString } from 'react-dom/server';

import { StaticRouter as Router } from 'react-router-dom';

import App  from './client/App' ;


route.get('*',function(req,res){

  console.log(req);
  let html = '';

  let context = {};

  var htmlHead = '<html><body><div id="app">';

  var htmlTail = '</div><script src="static/bundle.js"></script></body></html>'

   html = renderToString(
     <Router location={req.baseUrl} context={context}>
        <App></App>
     </Router>
   );


  res.send(htmlHead+html+htmlTail);



})

module.exports = route;
