import express from 'express';

var route = express.Router();

import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import { StaticRouter as Router } from 'react-router-dom';

import App  from './client/App' ;
import axios from 'axios';

var renderStatic = true;

route.get('/',function(req,res){

  let html = '';

  let context = {};

  var htmlHead = '<html><body><div id="app">';

  var htmlTail = '</div><script src="static/bundle.js"></script></body></html>'

  var renderMethod = renderStatic ? renderToStaticMarkup :  renderToString;

  axios.get('https://api.github.com/users/saratonite')
        .then(function(response){

          console.log('Data fetch from server--',req.url);

          let context = {data:response.data};

           html = renderMethod(
              <Router location={req.baseUrl} context={context}>
                  <App></App>
              </Router>
            );

            var initialdataScript = `<script>window.data = ${JSON.stringify(response.data)}</script>`


            res.send(htmlHead+html+initialdataScript+htmlTail);

        })


  



})

module.exports = route;
