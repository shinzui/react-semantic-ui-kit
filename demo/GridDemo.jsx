import React, { Component } from 'react'

import { Segment, Header, Grid, Column, Row } from '../src/index'

export default class GridDemo extends Component {

  render() {
    return (
      <div className='gridExample'>

        <Segment>
          <Header element='h2'>Grid container example</Header>
          <Grid container>
            <Column width={4} />
            <Column width={4} />
            <Column width={4} />
            <Column width={4} />
            <Column width={4} />
            <Column width={4} />
            <Column width={4} />
            <Column width={4} />
          </Grid>
        </Segment>

        <Segment>
        <h2>Relaxed grid</h2>
        <Grid>
          <Row columns={3}>
            <Column />
            <Column />
            <Column />
          </Row>

          <Row columns={8}>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
          </Row>

        </Grid>
        <Grid relaxed>
          <Row columns={3}>
            <Column />
            <Column />
            <Column />
          </Row>

          <Row columns={8}>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
          </Row>
        </Grid>
      </Segment>
      </div>
    )
  }
}
