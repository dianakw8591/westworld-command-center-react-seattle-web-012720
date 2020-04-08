import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {
  state = {
    options: [],
    value: null,
    // This state is just to show how the dropdown component works.
    // Options have to be formatted in this way (array of objects with keys of: key, text, value)
    // Value has to match the value in the object to render the right text.

    // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  }

  componentDidMount() {
    this.setState({
      options: this.buildDropdown(),
    })
  }
  

  formatName = name => {
    return name.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }
  buildDropdown = () => {
    return this.props.areas.map(area => {
      return {key: area.name, text: this.formatName(area.name), value: area.name}
    })
  }



  handleChange = (e, {value}) => {
    this.props.onChangeArea(value)
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  toggle = () => {
    this.props.onToggleActive();
  }

  render(){
    const {firstName, imageUrl, gender, area, active} = this.props.host;
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {firstName} | { gender === "Male" ? <Icon name='man' /> : <Icon name='woman' />}
                
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={active ? "Active" : "Decommissiond"}                  
                  checked={active ? true : false}
                  
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
