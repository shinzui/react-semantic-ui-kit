import React from 'react'

import { Comment, CommentGroup, Segment, Header,
  Content, MetaData, Avatar, Date, Author,
  Text, Actions } from '../src/index'

import bomi from './bomi_square.jpg'

const CommentDemo = (props) => {
  return (
    <div>
      <Segment>
        <CommentGroup>
          <Header element='h3' dividing>Comment</Header>
          <Comment>
            <Avatar src={bomi} href='#'/>
            <Content>
              <Author href='#'>Bomi</Author>
              <MetaData>
                <Date>Today at 5:42PM</Date>
              </MetaData>
              <Text>
                React is a great library.
              </Text>
              <Actions>
                <a href='#'>Reply</a>
              </Actions>
            </Content>
          </Comment>
        </CommentGroup>
        
      </Segment>
    </div>
  )
}

export default CommentDemo
