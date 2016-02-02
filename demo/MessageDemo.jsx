import React, { Component } from 'react'

import { Segment, Message } from '../src/index'

const MessageDemo = (props) => {
  return (
    <div>
      <Segment>
        <Message>
          <div className='header'>
            A basic message
          </div>
          
          We are going to be closed for the holiday.
        </Message>
      </Segment>

      <Segment>
        <Message>
          <div className='header'>New Features</div>
          <ul className='list'>
            <li>You can now create swimlanes</li>
            <li>You can upload attachments to cards</li>
          </ul>
        </Message>
      </Segment>

      <Segment>
        <Message icon>
          <i className='inbox icon' />
          <div className='content'>
            <div className='header'>Do you need help with continuous improvement?</div>
            <p>Join our mailing list and get tips from the best practitioners.</p>
          </div>
        </Message>
      </Segment>

      <Segment>
        <Message dismissible>
          <div className='header'>New Features</div>
          <ul className='list'>
            <li>You can now create swimlanes</li>
            <li>You can upload attachments to cards</li>
          </ul>
        </Message>
      </Segment>

      <Segment>
        <Message compact>
          A compact message
        </Message>
      </Segment>
    </div>
  )
}

export default MessageDemo


