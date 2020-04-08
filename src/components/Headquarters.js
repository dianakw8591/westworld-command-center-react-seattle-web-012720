import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
  
  hostsInStorage = () => {
    return this.props.hosts.filter(host => !host.active)
  }

  getDetailHost = () => {
    return this.props.hosts.filter(host => host.detailHost === true)[0];
  }

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>
          <ColdStorage hosts={this.hostsInStorage()} onClickHost={this.props.onClickHost} />
        </Grid.Column>
        <Grid.Column width={5}>
          <Details host={this.getDetailHost()} areas={this.props.areas} onChangeArea={this.props.onChangeArea} onToggleActive={this.props.onToggleActive} />
        </Grid.Column>
        <Grid.Column width={3}>
          <LogPanel activated={this.props.activated} onClickActivateAll={this.props.onClickActivateAll}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
