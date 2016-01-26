import React, { Component } from 'react'

import { Header, Grid, Column, Row } from '../src/index'

export default class GridDemo extends Component {

  render() {
    return (
      <div className='gridExample'>

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
      </div>
    )
  }
}
