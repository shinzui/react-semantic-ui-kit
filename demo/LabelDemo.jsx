import React, { Component } from 'react'
import { Label , LabelGroup, List, ListItem, 
        Grid, Column,
        Header, Segment, Image } from '../src/index'

import bomi from './bomi.jpg'
import image from './image.png'

export default class LabelDemo extends Component {

  render() {
    const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                            'violet', 'purple', 'pink', 'brown', 'grey', 'black']
    const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']

    return (
      <div>
        <Segment>
          <Label pointing pointingDirection='right'>Pointing label</Label> Some text.
          <Label pointing pointingDirection='below'>Bottom pointing label</Label> 
          <Label pointing pointingDirection='left'>Left pointing label</Label>
          <Label pointing>Top pointing label</Label>
        </Segment>
        <Segment>
          <Label pointing pointingDirection='left' basic color='red'>Left pointing red basic label</Label>
        </Segment>
        <Segment>
          <Header element='h3'>Image label</Header> 
          <Label image>
            <Image src={bomi} size='tiny' />
            Bomi
          </Label>
        </Segment>
        <Segment>
          <Header element='h3'>Horizontal label</Header>
          <List divided>
            <ListItem>
              <Label color='green' horizontal>Node</Label>
              Hapi
            </ListItem>
            <ListItem>
              <Label color='red' horizontal>Ruby</Label>
              Rails
            </ListItem>
          </List>
        </Segment>
        <Segment>
          <h3>Tags</h3>
          <Label tag>JavaScript</Label>
          <Label tag>React</Label>
          <Label tag>ES2015</Label>
        </Segment>
        <Segment>
          <h3>Circular</h3>
          <Label circular>Circular Label</Label>
          <Label circular>1</Label>
          <Label color='red' circular>2</Label>
        </Segment>

        <Segment>
          <Grid columns={2}>
            <Column>
              <Image wrapper fluid >
                <Label leftCorner>
                  <i className='heart icon' />
                </Label>
                <img src={image} />
              </Image>
            </Column>
            <Column>
              <Image wrapper fluid >
                <Label rightCorner color='red'>
                  <i className='heart icon' />
                </Label>
                <img src={image} />
              </Image>
            </Column>
          </Grid>
        </Segment>

        <Segment>
          <Header element='h3'>Sizes</Header>

          {sizes.map( size => {
            return <Label size={size} key={size}>{size} label</Label>
          })}
        </Segment>

        <Segment>
          <Header element='h3'>Colored labels</Header>

          {colors.map( color => {
            return <Label key={color} color={color}>{color} label</Label>
          })}
        </Segment>

        <Segment>
          <Header element='h3'>Huge label group</Header>
          <LabelGroup size='huge'>
            <Label>First</Label>
            <Label>Second</Label>
            <Label>Third</Label>
          </LabelGroup>
        </Segment>

        <Segment>
          <Header element='h3'>Colored label group</Header>
          <LabelGroup color='green'>
            <Label>First</Label>
            <Label>Second</Label>
            <Label>Third</Label>
          </LabelGroup>
        </Segment>

        <Segment>
          <Header element='h3'>Tag group</Header>
          <LabelGroup tag>
            <Label>javascript</Label>
            <Label>node</Label>
            <Label>react</Label>
          </LabelGroup>
        </Segment>

        <Segment>
          <Header element='h3'>Circular group</Header>
          <LabelGroup circular>
            <Label>1</Label>
            <Label>2</Label>
            <Label>3</Label>
          </LabelGroup>
        </Segment>
      </div>
    )
  }
}
