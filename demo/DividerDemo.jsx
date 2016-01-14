import React, { Component } from 'react'
import { Divider, Segment, Message } from '../src/index'
import { Grid, Row, Column } from '../src/index'

export default class ButtonDemo extends Component {

  render() {
    return (
      <div>
        <h3>Simple horizontal divider</h3>
        <Segment>
          <p>Divder Demo</p>
          <Divider />
          <p>Divider Demo</p>
        </Segment>

        <h3>Simple vertical divider</h3>
        <Segment>
          <Grid columns={2} className='very relaxed'>
            <Column>
              <p>
                left side
              </p>
              <p>
                left side
              </p>
              <p>
                left side
              </p>
            </Column>
            <Divider vertical>or</Divider>
            <Column>
              <p>
                right side
              </p>
              <p>
                right side
              </p>
              <p>
                right side
              </p>
            </Column>
          </Grid>
        </Segment>
        <Segment>
          <Divider horizontal header element='h4'>
            <i className='tag icon' />
            <span className='content'>Header divider</span>
          </Divider>
          <Message warning>
            <p>
              You need to wrap the text inside the header with {"<span class='content'>"} element otherwise React's inserted span wrappers would break Semantic UI's css.
            </p>

            Take a look at <a href='https://github.com/Semantic-Org/Semantic-UI/issues/2918'>issue 2918</a>
          </Message>
        </Segment>
      </div>
    )
  }
}
