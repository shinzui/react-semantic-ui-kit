import React, { Component } from 'react'
import { Button, ButtonGroup, Segment } from '../src/index'

export default class ButtonDemo extends Component {

  render() {
    return (
      <div>
        <Segment>
          <h3>Simple button</h3>
          <Button>Simple Button</Button>
        </Segment>
        <Segment>
          <h3>Basic button</h3>
          <Button basic>Basic Button</Button>
        </Segment>
        <Segment>
          <h3>Primary and secondary buttons</h3>
          <Button primary>Primary Button</Button>
          <Button secondary>Secondary Button</Button>
        </Segment>

        <Segment>
          <h3>Labeled icon</h3>
          <Button primary labeledIcon>
            <i className='pause icon' />
            Pause
          </Button>
        </Segment>

        <Segment>
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Segment>

        <Segment>
          <ButtonGroup icon>
            <Button><i className='align left icon'/></Button>
            <Button><i className='align center icon'/></Button>
            <Button><i className='align right icon'/></Button>
            <Button><i className='align justify icon'/></Button>
          </ButtonGroup>
        </Segment>
      </div>
    )
  }
}
