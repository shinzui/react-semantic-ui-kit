import React, { Component } from 'react'
import { Divider, Segment } from '../src/index'
import { Grid, Row, Column } from '../src/index'

export default class ButtonDemo extends Component {

  render() {
    return (
      <div>
        <h3>Simple horizontal divider</h3>
        <Segment>
          <p>Divder Demo</p>
          <Divider />
          <p>Divider Demo</p>
        </Segment>

        <h3>Simple vertical divider</h3>
        <Segment>
          <Grid columns={2} className='very relaxed'>
            <Column>
              <p>
                left side
              </p>
              <p>
                left side
              </p>
              <p>
                left side
              </p>
            </Column>
            <Divider vertical>or</Divider>
            <Column>
              <p>
                right side
              </p>
              <p>
                right side
              </p>
              <p>
                right side
              </p>
            </Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}
