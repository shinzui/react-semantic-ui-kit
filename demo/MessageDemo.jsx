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
        <Message compact>
          A compact message
        </Message>
      </Segment>
    </div>
  )
}

export default MessageDemo


