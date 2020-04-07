import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const AREA_URL = "http://localhost:4000/areas";


class WestworldMap extends React.Component {
  state = {
    areas: [],
  }

  componentDidMount() {
    fetch(AREA_URL)
    .then(resp => resp.json())
    .then(data => this.setState({areas: data}))
  }

  render() {
    return (
      <Segment id="map" >
        {this.state.areas.map(area => {
        return <Area key={area.id} area={area} />})}
      </Segment>
    )
  }
}

export default WestworldMap
