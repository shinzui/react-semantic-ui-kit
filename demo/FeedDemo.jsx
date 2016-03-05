import React from 'react'

import { Feed, FeedEvent, Image, Text,
        Content, ContentSummary, ContentImages, Meta,
        Date, Segment, Label } from '../src/index'

import bomi from './bomi_square.jpg'
import bomi2 from './bomi.jpg'

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

      <Segment>
        <Feed>
          <FeedEvent>
            <Label generic><Image src={bomi} /></Label>
            <Content>
              <Date>3 days ago</Date>
              <ContentSummary>You added <a href='#'>Bomi</a> to your favorites group.</ContentSummary>
            </Content>
          </FeedEvent>
        </Feed>
      </Segment>

      <Segment>
        <Feed>
          <FeedEvent>
            <Label generic><Image src={bomi} /></Label>
            <Content>
              <Date>3 days ago</Date>
              <ContentSummary>You created <a href='#'>Bomi's</a> album.</ContentSummary>
              <ContentImages extra>
                <Image href='#' src={bomi2} />
                <Image href='#' src={bomi2} />
              </ContentImages>
            </Content>
          </FeedEvent>
          <FeedEvent>
            <Label generic><Image src={bomi} /></Label>
            <Content>
              <Date>5 days ago</Date>
              <ContentSummary><a href='#'>Bomi's</a> created a post.</ContentSummary>
              <Text extra>
                I am going to have sibblings soon.
              </Text>
            </Content>
          </FeedEvent>
        </Feed>
      </Segment>
    </div>
  )
}

export default FeedDemo
