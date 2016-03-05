import React from 'react'

import { Feed, FeedEvent, Image,
        Content, ContentSummary, Meta,
        Date, Segment, Label } from '../src/index'

import bomi from './bomi_square.jpg'

const FeedDemo = (props) => {
  return (
    <div>
      <Segment>
        <h3>Feed</h3>
        <Feed>
          <FeedEvent>
            <Label generic><Image src={bomi} /></Label>
            <Content>
              <ContentSummary>
                <a href='#'>Go Joon Hee</a> added you as friend. <Date>1 Hour ago</Date>
              </ContentSummary>
              <Meta>
                <a href='#' className='like'>
                  <i className='like icon' />23 likes
                </a>
              </Meta>
            </Content>
          </FeedEvent>
        </Feed>
      </Segment>

      <Segment>
        <h3>Small feed</h3>
        <Feed size='small'>
          <FeedEvent>
            <Label generic><Image src={bomi} /></Label>
            <Content>
              <ContentSummary>
                <a href='#'>Go Joon Hee</a> added you as friend. <Date>1 Hour ago</Date>
              </ContentSummary>
              <Meta>
                <a href='#' className='like'>
                  <i className='like icon' />23 likes
                </a>
              </Meta>
            </Content>
          </FeedEvent>
        </Feed>
      </Segment>

      <Segment>
        <h3>Large feed</h3>
        <Feed size='large'>
          <FeedEvent>
            <Label generic><Image src={bomi} /></Label>
            <Content>
              <ContentSummary>
                <a href='#'>Go Joon Hee</a> added you as friend. <Date>1 Hour ago</Date>
              </ContentSummary>
              <Meta>
                <a href='#' className='like'>
                  <i className='like icon' />23 likes
                </a>
              </Meta>
            </Content>
          </FeedEvent>
        </Feed>
      </Segment>
    </div>
  )
}

export default FeedDemo
