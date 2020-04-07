import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';

const HOSTS_URL = "http://localhost:4000/hosts"

class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  state = {
    hosts: [],
  }

  componentDidMount() {
    fetch(HOSTS_URL)
    .then(resp => resp.json())
    .then(data => this.setState({hosts: data}))
  }

  render(){
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap />
        <Headquarters hosts={this.state.hosts}/>
      </Segment>
    )
  }
}

export default App;
