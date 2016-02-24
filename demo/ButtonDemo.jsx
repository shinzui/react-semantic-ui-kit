import React, { Component } from 'react'
import { Button, ButtonGroup, Segment, Label } from '../src/index'

export default class ButtonDemo extends Component {

  render() {
    const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                            'violet', 'purple', 'pink', 'brown', 'grey', 'black']
    return (
      <div>
        <Segment>
          <h3>Simple button</h3>
          <Button>Simple Button</Button>
        </Segment>
        <Segment>
          <h3>Basic buttons</h3>
          <Button basic>Basic Button</Button>

          {colors.map( color => {
            return <Button key={color} color={color} basic>Basic {color} button</Button>
          })}
        </Segment>

        <Segment>
          <h3>Primary and secondary buttons</h3>
          <Button primary>Primary Button</Button>
          <Button secondary>Secondary Button</Button>
        </Segment>

        <Segment>
          <Button icon>
            <i className='cloud icon' />
          </Button>
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

        <Segment>
          <ButtonGroup>
            <Button>Cancel</Button>
            <div className='or' />
            <Button positive>Save</Button>
          </ButtonGroup>
        </Segment>

        <Segment>
          <Button positive>Positive button</Button>
          <Button negative>Negative button</Button>
        </Segment>

        <Segment>
          <Button compact>Compact</Button>
          <Button compact><i className='pause icon'/></Button>
          <Button compact labeledIcon><i className='pause icon'/>Pause</Button>
        </Segment>

        <Segment>
          {colors.map( color => {
            return <Button key={color} color={color}>{color} button</Button>
          })}
        </Segment>

        <Segment inverted>
          {colors.map( color => {
            return <Button key={color} color={color} inverted>Inverted {color} button</Button>
          })}
        </Segment>

        <Segment inverted>
          {colors.map( color => {
            return <Button key={color} color={color} inverted basic>Inverted basic {color} button</Button>
          })}
        </Segment>

        <Segment>
          <ButtonGroup color='red'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Segment>

        <Segment>
          <Button circular icon>
            <i className='icon settings' />
          </Button>
        </Segment>

        <Segment>
          <Button labeled>
            <Button>
              <i className='heart icon' /> Like
            </Button>
            <Label basic>2049</Label>
          </Button>
          <Button labeled labelPosition='left'>
            <Label basic>2049</Label>
            <Button>
              <i className='heart icon' /> Like
            </Button>
          </Button>
          <Button labeled>
            <Button color='red'>
              <i className='heart icon' /> Like
            </Button>
            <Label basic color='red' pointing pointingDirection='left'>2049</Label>
          </Button>
          <Button labeled>
            <Button basic color='blue'>
              <i className='heart icon' /> Like
            </Button>
            <Label basic color='blue' pointing pointingDirection='left'>2049</Label>
          </Button>
        </Segment>
      </div>
    )
  }
}
