import React, { Component } from 'react'
import { Rail, Segment } from '../src/index'

export default class RailDemo extends Component {

  render() {
    return (
      <div>
        <Segment style={{minHeight: '100px'}}>
          <Rail position='right'>
            <Segment>
              Right Rail
            </Segment>
          </Rail>
          <p>
            Main content.
          </p>
        </Segment>

        <Segment style={{minHeight: '100px'}}>
          <Rail position='right' close>
            <Segment>
              A close Rail
            </Segment>
          </Rail>
          <p>
            Main content.
          </p>
        </Segment>

        <Segment style={{minHeight: '100px'}}>
          <Rail position='right' dividing>
            <Segment>
              A right dividing Rail.
            </Segment>
          </Rail>
          <p>
            Content.
          </p>
        </Segment>

        <Segment style={{minHeight: '200px'}}>
          <Rail position='left' internal>
            <Segment>
              Left internal rail.
            </Segment>
          </Rail>
          <Rail position='right' internal>
            <Segment>
              Right internal rail.
            </Segment>
          </Rail>
        </Segment>

        <Segment style={{minHeight: '100px'}}>
          <Rail position='right' attached>
            <Segment>
              An attached Rail.
            </Segment>
          </Rail>

          <p>
            Main content.
          </p>
        </Segment>

      </div>
    )
  }
}
