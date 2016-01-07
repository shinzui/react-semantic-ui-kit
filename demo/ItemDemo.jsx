import React, { Component } from 'react'
import { ItemGroup, Image, Item, Segment } from '../src/index'

import bomi from './bomi.jpg'

export default class ItemDemo extends Component {

  render() {
    return (
      <div>
        <Segment>
          <ItemGroup>
            <Item>
              <div className='image'>
                <img src={bomi} width='400px' />
              </div>
            </Item>
            <Item>
              <div className='image'>
                <img src={bomi} width='400px' />
              </div>
            </Item>
            <Item>
              <div className='image'>
                <img src={bomi} width='400px' />
              </div>
            </Item>
          </ItemGroup>
        </Segment>

        <Segment>
          <h3>Link Item</h3>
          <ItemGroup link>
            <Item>
              <Image wrapper size='tiny' src={bomi}/>
              <div className='content'>
                <div className='header'>
                  Bomi
                </div>
                <div className='description'>
                  Some description
                </div>
              </div>
            </Item>
            <Item>
              <Image wrapper size='tiny' src={bomi}/>
              <div className='content'>
                <div className='header'>
                  Bomi
                </div>
                <div className='description'>
                  Some description
                </div>
              </div>
            </Item>
          </ItemGroup>
        </Segment>
      </div>
    )
  }
}
