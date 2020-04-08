import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = props => {
    return (
      <Segment id="map" >
        {props.areas.map(thisArea => {
        return <Area key={thisArea.id} area={thisArea} hosts={props.hosts.filter(host => host.area === thisArea.name)} onClickHost={props.onClickHost} />})}
      </Segment>
    )
}

export default WestworldMap
