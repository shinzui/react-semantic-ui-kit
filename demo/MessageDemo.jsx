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
        <h3>Icon message</h3>
        <Message icon>
          <i className='inbox icon' />
          <div className='content'>
            <div className='header'>Do you need help with continuous improvement?</div>
            <p>Join our mailing list and get tips from the best practitioners.</p>
          </div>
        </Message>
      </Segment>

      <Segment>
        <h3>Dismissible message</h3>
        <Message dismissible>
          <div className='header'>New Features</div>
          <ul className='list'>
            <li>You can now create swimlanes</li>
            <li>You can upload attachments to cards</li>
          </ul>
        </Message>
      </Segment>

      <Segment>
        <h3>Floating message</h3>
        <Message floating>
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

      <Segment>
        <h3>Warning message</h3>
        <Message warning dismissible> 
          <div className='header'>
            You must register in order to view this.
          </div>
          Register, then try again.
        </Message>
      </Segment>

      <Segment>
        <h3>Info message</h3>
        <Message info>
          <div className='header'>New Features</div>
          <ul className='list'>
            <li>You can now create swimlanes</li>
            <li>You can upload attachments to cards</li>
          </ul>
        </Message>
      </Segment>

      <Segment>
        <h3>Positive message</h3>
        <Message positive dismissible>
          <div className='header'>
            You are eligible for a 30% discount
          </div>
          <p>Visit our deals page now.</p>
        </Message>
      </Segment>

      <Segment>
        <h3>Success message</h3>
        <Message success dismissible>
          <div className='header'>You've successfully registered</div>
          <p>You can now enjoy all the benefits of membership.</p>
        </Message>
      </Segment>

      <Segment>
        <h3>Negative message</h3>
        <Message negative dismissible>
          <div className='header'>We're sorry you're not eligible for registration</div>
          <p>Please apply again when you meet the requirement</p>
        </Message>
      </Segment>

      <Segment>
        <h3>Error message</h3>
        <Message error dismissible>
          <div className='header'>Please fix the following errors:</div>
          <ul className='list'>
            <li>Your password is too short.</li>
            <li>Your username is already taken.</li>
          </ul>
        </Message>
      </Segment>



    </div>
  )
}

export default MessageDemo


