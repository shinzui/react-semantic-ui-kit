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
        <Segment>
          <h3>Various Sizes</h3>
          <Statistic label='Views' value='1000' size='mini' />
          <Statistic label='Views' value='1500' size='tiny' />
          <Statistic label='Views' value='2000' size='small' />
          <Statistic label='Views' value='5000' size='large' />
          <Statistic label='Views' value='90000' size='huge' />
        </Segment>
      </div>
    )
  }
}
