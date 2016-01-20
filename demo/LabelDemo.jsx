import React, { Component } from 'react'
import { Label , Header, Segment, Image } from '../src/index'

import bomi from './bomi.jpg'

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
      </div>
    )
  }
}
