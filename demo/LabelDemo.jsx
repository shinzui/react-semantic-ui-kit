import React, { Component } from 'react'
import { Label , Segment } from '../src/index'

export default class LabelDemo extends Component {

  render() {
    return (
      <div>
        <Segment>
          <Label pointing pointingDirection='right'>Pointing label</Label> Some text.
          <Label pointing pointingDirection='below'>Bottom pointing label</Label> 
          <Label pointing pointingDirection='left'>Left pointing label</Label>
          <Label pointing>Top pointing label</Label>
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
        </Segment>
      </div>
    )
  }
}
