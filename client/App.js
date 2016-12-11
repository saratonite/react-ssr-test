import React from 'react';
import Home from './components/Home';
export default class Apps extends React.Component{

  clickHandler(){

  	console.log('Hello');
    alert('Hello');

  }
  render(){
    return(<div><h1>Hello React Servers</h1>
      <Home/>
    		<button onClick={this.clickHandler}>Click me</button>
    	</div>);
  }
}
