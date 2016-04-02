import React, { Component } from 'react'
import { Statistic, Segment, StatisticGroup } from '../src/index'

export default class StatisticDemo extends Component {

  render() {
    const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                            'violet', 'purple', 'pink', 'brown', 'grey', 'black']
    const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']

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
          <h3>Size</h3>
          {sizes.map( size => {
            return <Statistic key={size} size={size} label={size} value={Math.floor(Math.random() * 10)} />
          })}
        </Segment>

        <Segment>
          <h3>Horizontal sizes</h3>
          {sizes.map( size => {
            return <Statistic horizontal key={size} size={size} label={size} value={Math.floor(Math.random() * 10)} />
          })}
        </Segment>
      </div>
    )
  }
}
