import React,{ Component } from 'react';

import axios from 'axios';

export default class About extends Component {

  constructor(props) {

    super(props);

    if(props.staticContext) {

      this.state = { profile : props.staticContext.data}

      console.log('YEP-------------------');
      console.log(props.staticContext.data.name)


    }
    else {

      if(window.data) {
        this.state = { profile : JSON.parse(JSON.stringify(window.data)) }
      }
      else {
        this.state = { profile : null};
      }

      console.log('Nope ------------------',window.data)

      window.data = null;


    }


  }

  componentDidMount() {

    let self = this;

    if(!this.state.profile) {

      this.initialData()
        .then(function(response){
          console.log('Initial data loaded');

          self.setState({'profile':response.data})

          console.log(self.state);

        })

    }
    
  }

initialData() {
  return axios.get('https://api.github.com/users/saratonite');
}

  render(){

    return(

        <div>
          <h1>About</h1>
          { this.state.profile && 
            <div>
              { this.state.profile.name }
              <p>{ this.state.profile.bio }</p>
            </div>
          }
        </div>
    )

  }
}
