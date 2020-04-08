import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';

const HOSTS_URL = "http://localhost:4000/hosts"
const AREA_URL = "http://localhost:4000/areas";

class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  state = {
    hosts: [],
    areas: [],
    activated: false,
  }

  hostsActive = () => {
    return this.state.hosts.filter(host => host.active)
  }

  componentDidMount() {
    fetch(HOSTS_URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      hosts: data.map(host => ({...host, detailHost: false}))
    }))

    fetch(AREA_URL)
    .then(resp => resp.json())
    .then(data => this.setState({areas: data}))
  }

  hasAreaReachedLimit = (areaToCheck) => {
    const hostLength = this.state.hosts.filter(host => host.area === areaToCheck).length;
    const areaLimit = this.state.areas.filter(area => area.name === areaToCheck)[0].limit;
    return hostLength === areaLimit ? true : false
  }

  changeArea = (newArea) => {
    if (this.hasAreaReachedLimit(newArea)) {
      console.log(`reached limit on ${newArea}`)
    } else {
      this.setState(prev => {
        return ({
          hosts: prev.hosts.map(host => {
            return (host.detailHost === true ? {...host, area: newArea} : host )}),
        })
      })
    }
  }

  clickHost = (clickedHost) => {
    this.setState(prev => {
      return ({
        hosts: prev.hosts.map(host => {
          return (host === clickedHost ? {...host, detailHost: true} : {...host, detailHost: false})}),
      })
    })
  }

  toggleActive = () => {
    this.setState(prev => {
      return ({
        hosts: prev.hosts.map(host => {
          return (host.detailHost === true ? {...host, active: !host.active} : host)}),
        })
    })
  }

  clickActivateAll = () => {
    this.setState(prev => {
      return ({
        activated: !prev.activated,
        hosts: prev.hosts.map(host => ({...host, active: !prev.activated})),
      })
    })
  }

  render(){
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap hosts={this.hostsActive()} areas={this.state.areas} onClickHost={this.clickHost} />
        <Headquarters hosts={this.state.hosts} areas={this.state.areas} onClickHost={this.clickHost} onChangeArea={this.changeArea} onToggleActive={this.toggleActive} activated={this.state.activated} onClickActivateAll={this.clickActivateAll} />
      </Segment>
    )
  }
}

export default App;
