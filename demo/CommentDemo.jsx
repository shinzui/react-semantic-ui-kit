import React from 'react'

import { Comment, CommentGroup, Segment, Header,
  Content, MetaData, Avatar, Date, Author,
  Text, Actions, Form, Button } from '../src/index'

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
          <Form reply>
            <div className='field'>
              <textarea />
            </div>
            <Button primary labeledIcon>
              <i className='icon edit' />Add Reply
            </Button>

          </Form>
        </CommentGroup>
      </Segment>

      <Segment>
        <h3>Minimal comments</h3>
        <CommentGroup minimal>
          <Header element='h3' dividing>Comments</Header>
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
          <Form reply>
            <div className='field'>
              <textarea />
            </div>
            <Button primary labeledIcon>
              <i className='icon edit' />Add Reply
            </Button>
          </Form>
        </CommentGroup>
      </Segment>

      <Segment>
        <h3>Collapsed (hidden) comments</h3>
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
          <CommentGroup collapsed>
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
        </CommentGroup>
      </Segment>

      <Segment>
        <CommentGroup threaded>
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
            <CommentGroup>
              <Comment>
                <Avatar src={bomi} href='#'/>
                <Content>
                  <Author href='#'>Bomi</Author>
                  <MetaData>
                    <Date>Today at 5:42PM</Date>
                  </MetaData>
                  <Text>
                    I agree. 
                  </Text>
                  <Actions>
                    <a href='#'>Reply</a>
                  </Actions>
                </Content>
              </Comment>
            </CommentGroup>
            </Comment>
            <Comment>
              <Avatar src={bomi} href='#'/>
              <Content>
                <Author href='#'>Bomi</Author>
                <MetaData>
                  <Date>Today at 5:42PM</Date>
                </MetaData>
                <Text>
                  Redux is also nice.
                </Text>
                <Actions>
                  <a href='#'>Reply</a>
                </Actions>
              </Content>
            </Comment>
            <Form reply>
              <div className='field'>
                <textarea />
              </div>
              <Button primary labeledIcon>
                <i className='icon edit' />Add Reply
              </Button>

            </Form>
          </CommentGroup>
      </Segment>
    </div>
  )
}

export default CommentDemo
