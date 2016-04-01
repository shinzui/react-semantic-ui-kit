import React, { Component } from 'react'
import { Statistic, Segment, StatisticGroup } from '../src/index'

export default class StatisticDemo extends Component {

  render() {
    const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                            'violet', 'purple', 'pink', 'brown', 'grey', 'black']

    return (
      <div>
        <Segment>
          <Statistic label='Favorites' value='1000' />
        </Segment>
        <Segment>
          <Statistic label='Likes' value='999' labelPosition='top' />
        </Segment>

        <Segment>
          <h3>Statistic group</h3>
          <StatisticGroup>
            <Statistic label='Favorites' value='1000' />
            <Statistic label='Views' value='99000' />
            <Statistic label='Members' value='7000' />
          </StatisticGroup>
        </Segment>

        <Segment>
          <h3>Horizontal statistic</h3>
          <Statistic label='Likes' value='999' horizontal />
        </Segment>

        <Segment>
          <h3>Horizontal statistic group</h3>
          <StatisticGroup horizontal>
            <Statistic label='Favorites' value='1000' />
            <Statistic label='Views' value='99000' />
            <Statistic label='Members' value='7000' />
          </StatisticGroup>
        </Segment>

        <Segment>
          <h3>Evenly divided</h3>
          <StatisticGroup stats={3}>
            <Statistic label='Favorites' value='1000' />
            <Statistic label='Views' value='99000' />
            <Statistic label='Members' value='7000' />
          </StatisticGroup>
        </Segment>

        <Segment>
          <h3>Color</h3>
          <StatisticGroup>
            {colors.map( color => {
              return <Statistic key={color} color={color} label={color} value={Math.floor(Math.random() * 10)} />
            })}
          </StatisticGroup>
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
