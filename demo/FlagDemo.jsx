import React, { Component } from 'react'
import { Flag, Segment } from '../src/index'

export default class FlagDemo extends Component {

  render() {
    return (
      <div>
        <Segment>
          <h3>Flags by country name</h3>
          <Flag countryName='japan' />
          <Flag countryName='south korea' />
        </Segment>

        <Segment>
          <h3>Flags by country code</h3>
          <Flag countryCode='jp' />
          <Flag countryCode='kr' />
        </Segment>
      </div>
    )
  }
}
