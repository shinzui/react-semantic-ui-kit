import React, { Component } from 'react'

import { Segment, Header} from '../src/index'

const SegmentDemo = (props) => {
  return (
    <div>
      <Segment raised>
        A raised segment
      </Segment>

      <Segment stacked>
        A stacked segment
      </Segment>

      <Segment piled>
        <Header>
          A piled segment
        </Header>

        <p>
          Some text for the piled segment
        </p>
      </Segment>

      <Segment disabled>
        A disabled segment
      </Segment>

      <Segment loading>
        A loading segment
      </Segment>

      <Segment inverted>
        An inverted segment
      </Segment>

      <Segment attached='top'>
        Top attached segment
      </Segment>
      <Segment attached='both'>
        Segment attached on both sides
      </Segment>
      <Segment attached='bottom'>
        Bottom attached segment
      </Segment>

    </div>
  )
}

export default SegmentDemo
