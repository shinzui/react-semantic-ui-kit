import React, { Component } from 'react'
import { Button, ButtonGroup, Header,
         Divider, Segment, Label } from '../src/index'

import ParagrahExample from './ParagraphExample'

export default class ButtonDemo extends Component {

  render() {
    const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                            'violet', 'purple', 'pink', 'brown', 'grey', 'black']

    const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']

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
          <h3>Active button</h3>
          <Button active>
            <i className='user icon' />Follow
          </Button>
        </Segment>

        <Segment>
          <h3>Disabled button</h3>
          <Button disabled>
            <i className='user icon' />Follow
          </Button>
        </Segment>

        <Segment>
          <h3>Loading buttons</h3>
          <Button loading>Loading</Button>
          <Button basic loading>Loading</Button>
          <Button primary loading>Loading</Button>
          <Button secondary loading>Loading</Button>
        </Segment>

        <Segment>
          <h3>Fluid buttons</h3>
          <Button fluid>Fluid buttons</Button>
        </Segment>

        <Segment clearing>
          <h3>Floated buttons</h3>

          <Button floated='right'>Right floated</Button>
          <Button floated='left'>Left floated</Button>

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

        <Segment>
          <Header element='h3'>Sizes</Header>

          {sizes.map( size => {
            return <Button size={size} key={size}>{size} button</Button>
          })}
        </Segment>

        <Segment>
          <h3>Vertical attachment</h3>
          <Button attached='top'>Top</Button>
          <Segment attached='both'>
            <ParagrahExample />
          </Segment>
          <Button attached='bottom'>Bottom</Button>
        </Segment>

        <Segment>
          <h3>Horizontal attachment</h3>
          <Button attached='left'>Left </Button>
          <Button attached='right'>Right</Button>
        </Segment>

        <Segment>
          <h3>Vertical button group</h3>
          <ButtonGroup vertical>
            <Button>Feed</Button>
            <Button>Messages</Button>
            <Button>Events</Button>
            <Button>Photos</Button>
          </ButtonGroup>
        </Segment>

        <Segment>
          <h3>Basic vertical button group</h3>
          <ButtonGroup basic vertical>
            <Button>Feed</Button>
            <Button>Messages</Button>
            <Button>Events</Button>
            <Button>Photos</Button>
          </ButtonGroup>
        </Segment>

        <Segment>
          <h3>Basic button group</h3>
          <ButtonGroup basic>
            <Button>Feed</Button>
            <Button>Messages</Button>
            <Button>Events</Button>
            <Button>Photos</Button>
          </ButtonGroup>
        </Segment>

        <Segment>
          <h3>Vertical labeled icon buttons</h3>
          <ButtonGroup vertical labeledIcon>
            <Button>
              <i className='pause icon' />
              Pause
            </Button>
            <Button>
              <i className='play icon' />
              Play
            </Button>
            <Button>
              <i className='shuffle icon' />
              Shuffle
            </Button>
          </ButtonGroup>
        </Segment>

        <Segment>
          <Header element='h3'>Button group sizes</Header>

          {sizes.map( size => {
            return <div key={size}>
              <ButtonGroup size={size}>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              <Divider />
            </div>
          })}

        </Segment>
      </div>
    )
  }
}
