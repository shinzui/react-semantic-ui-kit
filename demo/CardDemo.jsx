import React from 'react'

import { Segment, Card, Meta,
        Content, ContentDescription, ContentHeader } from '../src/index'

import bomi from './bomi.jpg'

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
        
      </Segment>
    </div>
  )
}

export default CardDemo
