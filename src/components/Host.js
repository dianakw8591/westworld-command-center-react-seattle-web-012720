import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  const {imageUrl} = props.host;
  return(
    <Card
      className="host selected"
      // onClick={handleClick}
      image={imageUrl}
      raised
    />
  )
}

export default Host
