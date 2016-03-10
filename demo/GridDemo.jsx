import React, { Component } from 'react'

import { Segment, Header, Grid, Column, Row } from '../src/index'
import ParagraphExample from './ParagraphExample'
import image from './image.png'

export default class GridDemo extends Component {

  render() {
    return (
      <div>
        <div className='gridExample'>

          <Segment>
            <Header element='h2'>Grid container example</Header>
            <Grid container>
              <Column width={4} />
              <Column width={4} />
              <Column width={4} />
              <Column width={4} />
              <Column width={4} />
              <Column width={4} />
              <Column width={4} />
              <Column width={4} />
            </Grid>
          </Segment>

          <Segment>
            <h2>Relaxed grid</h2>
            <Grid>
              <Row columns={3}>
                <Column />
                <Column />
                <Column />
              </Row>

              <Row columns={8}>
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
              </Row>

            </Grid>
            <Grid relaxed>
              <Row columns={3}>
                <Column />
                <Column />
                <Column />
              </Row>

              <Row columns={8}>
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
              </Row>
            </Grid>
          </Segment>

          <Segment>
            <h3>Clearing content</h3>
            <Grid>
              <Row columns={4}>
                <Column floated='left' />
                <Column floated='right' />
              </Row>
              <Row>
                <Column width={3} />
                <Column width={8} />
                <Column width={5} />
              </Row>
            </Grid>
          </Segment>

          <Segment>
            <h3>Centered content</h3>
            <Grid columns={2} centered>
              <Column />
              <Row columns={4} centered>
                <Column />
                <Column />
              </Row>
            </Grid>
          </Segment>

          <Segment>
            <h3>Automatic column count</h3>
            <Grid equalWidth>
              <Column />
              <Column />
              <Column />
              <Row equalWidth>
                <Column />
                <Column />
              </Row>
            </Grid>
          </Segment>

          <Segment>
            <h3>Doubling</h3>
            <Grid>
              <Row doubling columns={8}>
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
              </Row>
              <Row doubling columns={6}>
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
              </Row>
              <Row doubling columns={4}>
                <Column />
                <Column />
                <Column />
                <Column />
              </Row>
            </Grid>
          </Segment>
        </div>

        <Segment>
          <h3>Internally celled grids</h3>
          <Grid internallyCelled>
            <Row>
              <Column width={3}>
                <img src={image} />
              </Column>
              <Column width={10}>
                <ParagraphExample />
              </Column>
              <Column width={3}>
                <img src={image} />
              </Column>
            </Row>
            <Row>
              <Column width={3}>
                <img src={image} />
              </Column>
              <Column width={10}>
                <ParagraphExample />
              </Column>
              <Column width={3}>
                <img src={image} />
              </Column>
            </Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}
