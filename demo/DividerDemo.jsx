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

        <Segment inverted>
          <h3>Inverted dividers</h3>
          <p>
            First paragraph
          </p>
          <Divider inverted />
          <Divider element='h4' horizontal inverted>Horizontal</Divider>
        </Segment>

        <Segment fitted>
          <h3>Fitted Divider</h3>
          <span className='content'>
            Genji was famous and life was secure and peaceful. His ladies had in their several ways made their own lives and were happy.
            There was an exception, Tamakazura, who faced a new crisis and was wondering what to do next.
          <Divider fitted/>
            She was not as genuinely frightened of him, of course, as she had been of the Higo man; but since few people could possibly know what had happened,
            she must keep her disquiet to herself, and her growing sense of isolation. Old enough to know a little of the world, she saw more than ever what a
            handicap it was not to have a mother.
          </span>

          <Message warning>
            <p>
              You need to wrap the text inside the header with {"<span class='content'>"} element otherwise React's inserted span wrappers would break Semantic UI's css.
            </p>

            Take a look at <a href='https://github.com/Semantic-Org/Semantic-UI/issues/2918'>issue 2918</a>
          </Message>
        </Segment>

        <Segment section>
          <h3>Section Divider</h3>
          <p>
            Genji was famous and life was secure and peaceful. His ladies had in their several ways made their own lives and were happy.
            There was an exception, Tamakazura, who faced a new crisis and was wondering what to do next.
          </p>
          <Divider section/>
          <h3>Section two</h3>
          <p>
            She was not as genuinely frightened of him, of course, as she had been of the Higo man; but since few people could possibly know what had happened,
            she must keep her disquiet to herself, and her growing sense of isolation. Old enough to know a little of the world, she saw more than ever what a
            handicap it was not to have a mother.
          </p>
        </Segment>

      </div>
    )
  }
}
