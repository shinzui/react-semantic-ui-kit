import React, { Component } from 'react'
import { List, ListItem, Segment } from '../src/index'

export default class ListDemo extends Component {

  render() {
    return (
      <div>
        <Segment>
          <List>
            <ListItem>JavaScript</ListItem>
            <ListItem>React</ListItem>
            <ListItem>GraphQL</ListItem>
          </List>
        </Segment>

        <Segment>
          <List relaxed divided>
            <ListItem>
              <div className='content'>
                <a className='header'>
                  Tokyo
                </a>
                <div className='description'>
                  Visited 3 months ago
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div className='content'>
                <a className='header'>
                  Seoul
                </a>
                <div className='description'>
                  Visited 7 months ago
                </div>
              </div>
            </ListItem>
            <ListItem>
              <div className='content'>
                <a className='header'>
                  New York
                </a>
                <div className='description'>
                  Visited last year
                </div>
              </div>
            </ListItem>
          </List>
        </Segment>

        <Segment>
          <h3>Bulleted List</h3>
          <List bulleted>
            <ListItem>HTML</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>CSS</ListItem>
          </List>
        </Segment>

      </div>
    )
  }
}
