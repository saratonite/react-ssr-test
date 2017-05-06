import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

var rootEl = document.getElementById('app');


window.onload = () => {

  render(
    <Router>
      <App/>
    </Router>
    ,rootEl);

}
