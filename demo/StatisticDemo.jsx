import React, { Component } from 'react'
import { Statistic, Segment } from '../src/index'

export default class StatisticDemo extends Component {

  render() {
    return (
      <div>
        <Segment>
          <Statistic label='Favorites' value='1000' />
        </Segment>
        <Segment>
          <Statistic label='Likes' value='999' labelPosition='top' />
        </Segment>
      </div>
    )
  }
}
