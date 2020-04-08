import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  const {imageUrl} = props.host;
  
  const handleClick = () => {
    props.onClickHost(props.host)
  }

  return(
    <Card
      className={props.detailHost ? "host selected" : "host"}
      onClick={handleClick}
      image={imageUrl}
      raised
    />
  )
}

export default Host

