import React from 'react';
import { Route, Switch , Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
export default class Apps extends React.Component{

  clickHandler(){

  	console.log('Hello');
    alert('Hello');

  }
  render(){
    return(<div><h1>Spa server rendering</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
    	</div>);
  }
}
