import React, { Component } from 'react'

import { Segment, SegmentGroup, Header, Image, Button } from '../src/index'

import paragraph from './paragraph.png'

const SegmentDemo = (props) => {
  const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                          'violet', 'purple', 'pink', 'brown', 'grey', 'black']

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

      <Segment padded>
        <Image src={paragraph} style={{opacity: '0.5'}} />
      </Segment>

      <Segment veryPadded>
        <Image src={paragraph} style={{opacity: '0.5'}} />
      </Segment>

      
      {colors.map( color => {
        return <Segment color={color} key={color}>{color} segment</Segment>
      })}

      {colors.map( color => {
        return <Segment inverted color={color} key={color}>Inverted {color} segment</Segment>
      })}

      <Segment compact>
        <p>Compact segment</p>
      </Segment>

      <Segment secondary>
        Secondary segment
      </Segment>

      <Segment tertiary>
        Tertiary segment
      </Segment>

      <Segment inverted>
        Inverted segment
      </Segment>
      <Segment inverted secondary>
        Inverted secondary segment
      </Segment>

      <Segment inverted tertiary>
        Inveretd tertiary segment
      </Segment>

      <Segment circular style={{width: '175px', height: '175px'}} >
        <Header element='h2' header='Buy Now' subheader='$10.99' />
      </Segment>

      <Segment clearing>
        <Button floated='right'>Floated</Button>
      </Segment>


      <Segment style={{height: '200px'}}>
        <Header element='h3'>Floated segments</Header>
        <Segment floated='right'>
          <p>
            Right floated
          </p>
        </Segment>
        <Segment floated='left'>
          <p>
            Left floated
          </p>
        </Segment>
      </Segment>

      <Segment aligned='right'>
        <p>
          Right aligned
        </p>
      </Segment>
      <Segment aligned='center'>
        <p>
          Center aligned
        </p>
      </Segment>
      <Segment aligned='left'>
        <p>
          Left aligned
        </p>
      </Segment>

      <Segment basic>
        <Header element='h3'>Basic Segment</Header>
        <p>
          Basic segment without formatting.
        </p>
      </Segment>


      <SegmentGroup compact>
        <Segment>
          <p>Compact segment in group</p>
        </Segment>
        <Segment>
          <p>Compact segment in group</p>
        </Segment>
      </SegmentGroup>

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

      <SegmentGroup>
        <Segment>
          <p>Top</p>
        </Segment>
        <SegmentGroup>
          <Segment>
            <p>Nested top</p>
          </Segment>
          <Segment>
            <p>Nested middle</p>
          </Segment>
          <Segment>
            <p>Nested bottom</p>
          </Segment>
        </SegmentGroup>
      </SegmentGroup>

    </div>
  )
}

export default SegmentDemo
