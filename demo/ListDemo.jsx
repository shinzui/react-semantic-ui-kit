import React, { Component } from 'react'

import { List, ListItem, Image, Segment } from '../src/index'

import bomi from './bomi.jpg'

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
          <h3>Simple bulleted list</h3>
          <List simple bulleted>
            <ListItem>HTML</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>CSS</ListItem>
          </List>
        </Segment>

        <Segment>
          <h3>Bulleted list</h3>
          <List bulleted>
            <ListItem>
              GraphQL
            </ListItem>
            <ListItem>
              Relay
            </ListItem>
            <ListItem>
              <div>Databases</div>
              <List>
                <ListItem>RethinkDB</ListItem>
                <ListItem>MongoDB</ListItem>
              </List>
            </ListItem>
          </List>
        </Segment>

        <Segment>
          <h3>Simple ordered list</h3>
          <List simple ordered>
            <ListItem>Need to know</ListItem>
            <ListItem>Culture</ListItem>
            <ListItem>Hotels</ListItem>
            <ListItem>Food and drinks
              <List>
                <ListItem>Smart bites</ListItem>
                <ListItem>Top stops</ListItem>
                <ListItem>Coffee</ListItem>
              </List>
            </ListItem>
            <ListItem>Retail</ListItem>
          </List>
        </Segment>

        <Segment>
          <h3>Ordered list</h3>
          <List ordered>
            <ListItem href='#'>Need to know</ListItem>
            <ListItem href='#'>Culture</ListItem>
            <ListItem href='#'>Hotels</ListItem>
            <ListItem>
              <a href='#'>Food and drinks</a>
              <List>
                <ListItem href='#'>Smart bites</ListItem>
                <ListItem href='#'>Top stops</ListItem>
                <ListItem href='#'>Coffee</ListItem>
              </List>
            </ListItem>
            <ListItem href='#'>Retail</ListItem>
          </List>
        </Segment>

        <Segment>
          <h3>Link list</h3>
          <List link>
            <ListItem active>Home</ListItem>
            <ListItem>Product</ListItem>
            <ListItem>Team</ListItem>
            <ListItem>About</ListItem>
          </List>
        </Segment>

        <Segment>
          <h3>Header content</h3>
          <List>
            <ListItem>
              <div className='header'>Tokyo</div>
               Best city in the world
            </ListItem>
            <ListItem>
              <div className='header'>Paris</div>
                Beautiful city
            </ListItem>
          </List>
        </Segment>

        <Segment>
          <h3>List with description</h3>
          <List>
            <ListItem>
              <i className='map marker icon' />
              <div className='content'>
                <a className='header'>Tokyo</a>
                <div className='description'>Best city in the world</div>
              </div>
            </ListItem>
            <ListItem>
              <i className='map marker icon' />
              <div className='content'>
                <a className='header'>Paris</a>
                <div className='description'>
                  Beautiful city
                </div>
              </div>
            </ListItem>
          </List>
        </Segment>

        <Segment>
          <h3>Horizontal list</h3>
          <List horizontal>
            <ListItem>
              <Image avatar src={bomi} />
              <div className='content'>
                <div className='header'>Bomi</div>
                Fabulous cat
              </div>
            </ListItem>
            <ListItem>
              <Image avatar src={bomi} />
              <div className='content'>
                <div className='header'>Bomi</div>
                Fabulous cat
              </div>
            </ListItem>
            <ListItem>
              <Image avatar src={bomi} />
              <div className='content'>
                <div className='header'>Bomi</div>
                Fabulous cat
              </div>
            </ListItem>
          </List>

        </Segment>

        <Segment>
          <h3>Ordered horizontal list</h3>
          <List ordered horizontal>
            <ListItem>
              <Image avatar src={bomi} />
              <div className='content'>
                <div className='header'>Bomi</div>
                Fabulous cat
              </div>
            </ListItem>
            <ListItem>
              <Image avatar src={bomi} />
              <div className='content'>
                <div className='header'>Bomi</div>
                Fabulous cat
              </div>
            </ListItem>
            <ListItem>
              <Image avatar src={bomi} />
              <div className='content'>
                <div className='header'>Bomi</div>
                Fabulous cat
              </div>
            </ListItem>
          </List>
        </Segment>

        <Segment>
          <h3>Horizontal bulleted link list</h3>
          <List bulleted horizontal link>
            <ListItem>
              Home
            </ListItem>
            <ListItem>
              Features
            </ListItem>
            <ListItem>
              About
            </ListItem>
          </List>
        </Segment>

      </div>
    )
  }
}
