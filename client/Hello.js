import React from 'react';
export default class Hello extends React.Component{
 
  clickHandler(){

  	console.log('Hello');

  }
  render(){
    return(<div><h1>Hello React Servers</h1>
    		<button onClick={this.clickHandler}>Click me</button>
    	</div>);
  }
}
