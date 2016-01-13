import React, { Component } from 'react'

import { Segment, SegmentGroup, Header} from '../src/index'

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

      <SegmentGroup>
        <Segment>
          First segment in a group
        </Segment>
        <Segment>
          Second segment in a group
        </Segment>
        <Segment>
          Third segment in a group
        </Segment>
      </SegmentGroup>

      <SegmentGroup raised>
        <Segment>
          First segment in a raised group
        </Segment>
        <Segment>
          Second segment in a group
        </Segment>
        <Segment>
          Third segment in a group
        </Segment>
      </SegmentGroup>

      <SegmentGroup stacked>
        <Segment>
          First segment in a stacked group
        </Segment>
        <Segment>
          Second segment in a group
        </Segment>
        <Segment>
          Third segment in a group
        </Segment>
      </SegmentGroup>

      <SegmentGroup piled>
        <Segment>
          First segment in a piled group
        </Segment>
        <Segment>
          Second segment in a group
        </Segment>
        <Segment>
          Third segment in a group
        </Segment>
      </SegmentGroup>

      <SegmentGroup horizontal>
        <Segment>
          First segment in a horizontal group
        </Segment>
        <Segment>
          Second segment in a group
        </Segment>
        <Segment>
          Third segment in a group
        </Segment>
      </SegmentGroup>

    </div>
  )
}

export default SegmentDemo
