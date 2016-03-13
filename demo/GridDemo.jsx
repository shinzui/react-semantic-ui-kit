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

          <Segment>
            <h3>Containers</h3>
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
            <h3>Stackable grid</h3>
            <Grid columns={4} stackable>
              <Column />
              <Column />
              <Column />
              <Column />
            </Grid>
          </Segment>

          <Segment>
            <h3>Manual tweaks</h3>
            <Grid centered>
              <Row devices={['computer']}>
                <Column />
              </Row>
              <Column tabletWidth={6} computerWidth={8} />
              <Column tabletWidth={6} computerWidth={8} />
              <Column tabletWidth={6} computerWidth={8} />
              <Column tabletWidth={6} computerWidth={8} />
              <Column tabletWidth={6} computerWidth={8} />
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

        <Segment>
          <Grid>
            <Column floated='left' aligned='right' width={6}>
              <Segment>
                Left floated right aligned column
              </Segment>
            </Column>
            <Column floated='right' aligned='left' width={6}>
              <Segment>
                Right floated left aligned column
              </Segment>
            </Column>
          </Grid>

          <Grid aligned='right'>
            <Column width={16}>
              <Segment>
                Right aligned grid
              </Segment>
            </Column>
          </Grid>

          <Grid>
            <h3>Text alignment</h3>
            <Row aligned='center' columns={2}>
              <Column>
                <Segment>
                  Center aligned row
                </Segment>
              </Column>
              <Column>
                <Segment>
                  Center aligned row
                </Segment>
              </Column>
            </Row>
            <Row aligned='left' columns={2}>
              <Column>
                <Segment>
                  Left aligned row
                </Segment>
              </Column>
              <Column>
                <Segment>
                  Left aligned row
                </Segment>
              </Column>
            </Row>
            <Row aligned='right' columns={2}>
              <Column>
                <Segment>
                  Right aligned row
                </Segment>
              </Column>
              <Column>
                <Segment>
                  Right aligned row
                </Segment>
              </Column>
            </Row>
          </Grid>
        </Segment>

        <Segment>
          <h3>Reverse order</h3>
          <Grid reversedDevices={['mobile']} equalWidth>
            <Column>First</Column>
            <Column>Second</Column>
            <Column>Third</Column>
          </Grid>

        </Segment>
      </div>
    )
  }
}
