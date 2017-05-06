import express from 'express';

var route = express.Router();

import React from 'react'
import { renderToString } from 'react-dom/server';

import App  from './client/App' ;


route.get('/',function(req,res){

  console.log(App);
  let html = '';

  var htmlHead = '<html><body><div id="app">';

  var htmlTail = '</div><script src="static/bundle.js"></script></body></html>'

   html = renderToString(
     <App></App>
   );


  res.send(htmlHead+html+htmlTail);



})

module.exports = route;
