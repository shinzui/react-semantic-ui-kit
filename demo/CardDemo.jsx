import React from 'react'

import { Segment, Card, Meta, Image,
        Content, ContentDescription, ContentHeader } from '../src/index'

import bomi from './bomi_square.jpg'
import bomi2 from './bomi.jpg'

const CardDemo = (props) => {
  return (
    <div>
      <Segment>
        <Card>
          <div className='image'>
            <img src={bomi} />
          </div>
          <Content>
            <ContentHeader href='#'>Bomi</ContentHeader>
            <Meta>
              <span className='date'>Born in 2015</span>
            </Meta>
            <ContentDescription>
              Bomi is a bengal cat.
            </ContentDescription>
          </Content>
          <Content extra>
            <i className='heart icon'/>
            323 Likes
          </Content>
        </Card>

        <Card>
          <Content>
            <Meta floated='right'>
              14h
            </Meta>
            <Image src={bomi2} avatar /> Bomi
          </Content>
          <div className='image'>
            <img src={bomi} />
          </div>

          <Content>
            <span className='right floated'>
              <i className='heart outline like icon' />
              317 likes
            </span>
            <i className='comment icon'/>
            39 comments
          </Content>
          <Content extra>
            <div className='ui large transparent left icon input'>
              <i className='heart outline icon' />
              <input type='text' placeholder='Add Comment...' />
            </div>
          </Content>
        </Card>
        
      </Segment>
    </div>
  )
}

export default CardDemo
