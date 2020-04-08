import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = (props) => {
  const {name} = props.area;

  const formatName = name => {
    return name.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  return (
  <div className='area' id={name}>
    <h3 className='labels'>{formatName(name)}</h3>

    {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
    <HostList hosts={props.hosts} onClickHost={props.onClickHost} />

  </div>
  )
}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.area.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.area.name}. The limit for that area is ${props.area.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
