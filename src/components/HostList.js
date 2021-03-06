import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
      {props.hosts.map(host => {
        return <Host key={host.id} host={host} onClickHost={props.onClickHost} detailHost={host.detailHost} />
        })}
    </Card.Group>
  )
}

HostList.defaultProps = {
  hosts: [],
}

export default HostList
