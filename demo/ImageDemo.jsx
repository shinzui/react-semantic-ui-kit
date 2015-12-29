import React, { Component } from 'react'
import { Image , Segment } from '../src/index'
import { Grid, Row, Column } from '../src/index'

import bomi from './bomi.jpg'


export default class ImageDemo extends Component {

  render() {
    return (
      <div>
      <Segment>
        <h3>Centered Image</h3>
        <Image src={bomi} size='small' centered/>
      </Segment>
      <Segment>
        <h3>Circular Image</h3>
        <Image src={bomi} size='small' circular/>
      </Segment>
      <Segment>
        <h3>Rounded Image</h3>
        <Image src={bomi} size='small' rounded/>
      </Segment>
      </div>
    )
  }
}
