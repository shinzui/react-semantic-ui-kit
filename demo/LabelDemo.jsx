import React, { Component } from 'react'
import { Label , LabelGroup, List, ListItem,
        Grid, Column, Row, Menu, MenuItem,
        Header, Segment, Image } from '../src/index'

import bomi from './bomi.jpg'
import image from './image.png'
import paragraph from './paragraph.png'

export default class LabelDemo extends Component {

  render() {
    const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                            'violet', 'purple', 'pink', 'brown', 'grey', 'black']
    const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']

    return (
      <div>
        <Segment>
          <Label pointing pointingDirection='right'>Pointing label</Label> Some text.
          <Label pointing pointingDirection='below'>Bottom pointing label</Label>
          <Label pointing pointingDirection='left'>Left pointing label</Label>
          <Label pointing>Top pointing label</Label>
        </Segment>
        <Segment>
          <Label pointing pointingDirection='left' basic color='red'>Left pointing red basic label</Label>
        </Segment>
        <Segment>
          <Header element='h3'>Image label</Header>
          <Label image>
            <Image src={bomi} size='tiny' />
            Bomi
          </Label>
        </Segment>
        <Segment>
          <Header element='h3'>Horizontal label</Header>
          <List divided>
            <ListItem>
              <Label color='green' horizontal>Node</Label>
              Hapi
            </ListItem>
            <ListItem>
              <Label color='red' horizontal>Ruby</Label>
              Rails
            </ListItem>
          </List>
        </Segment>
        <Segment>
          <h3>Tags</h3>
          <Label tag>JavaScript</Label>
          <Label tag>React</Label>
          <Label tag>ES2015</Label>
        </Segment>
        <Segment>
          <h3>Circular</h3>
          <Label circular>Circular Label</Label>
          <Label circular>1</Label>
          <Label color='red' circular>2</Label>
        </Segment>

        <Segment>
          <Grid columns={2}>
            <Column>
              <Image wrapper fluid >
                <Label leftCorner>
                  <i className='heart icon' />
                </Label>
                <img src={image} />
              </Image>
            </Column>
            <Column>
              <Image wrapper fluid >
                <Label rightCorner color='red'>
                  <i className='heart icon' />
                </Label>
                <img src={image} />
              </Image>
            </Column>
          </Grid>
        </Segment>

        <Segment>
          <Header element='h3'>Link label</Header>
          <Label href='https://facebook.github.io/react/'>React</Label>
        </Segment>

        <Segment>
          <Grid columns={2}>
            <Column>
              <Segment raised>
                <Label leftRibbon color='red'>Overview</Label>
                <span>Account details</span>
                <p>
                  Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.
                  It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.
                </p>
                <Label leftRibbon color='blue'>Community</Label>
                <span>User reviews</span>
                <p>
                  It helps to outline the visual elements of a document or presentation, eg typography, font, or layout.
                  Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero.
                </p>
              </Segment>
            </Column>
            <Column>
              <Segment>
                <Label rightRibbon color='orange'>Overview</Label>
                <p>
                  Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical;
                  it's not genuine, correct, or comprehensible Latin anymore.
                </p>
                <Label rightRibbon color='green'>Conclusion</Label>
                <p>
                  While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin,
                   these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.
                </p>
              </Segment>
            </Column>
          </Grid>
        </Segment>
        <Segment>
          <Header element='h3'>
            Floating label
          </Header>
          <Menu basic>
            <MenuItem href='#'>
              <i className='icon mail' /> Messages
              <Label floating color='red'>23</Label>
            </MenuItem>
            <MenuItem href='#'>
              <i className='icon users' /> Friends
              <Label floating color='blue'>7</Label>
            </MenuItem>
          </Menu>
        </Segment>

        <Segment>
          <Header element='h3'>
            Attached labels
          </Header>
          <Grid columns={3}>
            <Row>
              <Column>
              <Segment>
                <Label attached='top'>Top</Label>
                <Image src={paragraph} style={{opacity: '0.5'}} />
              </Segment>
              </Column>
              <Column>
              <Segment>
                <Label attached='bottom'>Bottom</Label>
                <Image src={paragraph} style={{opacity: '0.5'}} />
              </Segment>
              </Column>
              <Column>
              <Segment>
                <Label attached='topRight'>Top right</Label>
                <Image src={paragraph} style={{opacity: '0.5'}} />
              </Segment>
              </Column>
            </Row>
            <Row>
              <Column>
              <Segment>
                <Label attached='topLeft'>Top left</Label>
                <Image src={paragraph} style={{opacity: '0.5'}} />
              </Segment>
              </Column>
              <Column>
              <Segment>
                <Label attached='bottomRight'>Bottom right</Label>
                <Image src={paragraph} style={{opacity: '0.5'}} />
              </Segment>
              </Column>
              <Column>
              <Segment>
                <Label attached='bottomLeft'>Bottom left</Label>
                <Image src={paragraph} style={{opacity: '0.5'}} />
              </Segment>
              </Column>
            </Row>
          </Grid>
        </Segment>

        <Segment>
          <Header element='h3'>Sizes</Header>

          {sizes.map( size => {
            return <Label size={size} key={size}>{size} label</Label>
          })}
        </Segment>

        <Segment>
          <Header element='h3'>Colored labels</Header>

          {colors.map( color => {
            return <Label key={color} color={color}>{color} label</Label>
          })}
        </Segment>

        <Segment>
          <Header element='h3'>Huge label group</Header>
          <LabelGroup size='huge'>
            <Label>First</Label>
            <Label>Second</Label>
            <Label>Third</Label>
          </LabelGroup>
        </Segment>

        <Segment>
          <Header element='h3'>Colored label group</Header>
          <LabelGroup color='green'>
            <Label>First</Label>
            <Label>Second</Label>
            <Label>Third</Label>
          </LabelGroup>
        </Segment>

        <Segment>
          <Header element='h3'>Tag group</Header>
          <LabelGroup tag>
            <Label>javascript</Label>
            <Label>node</Label>
            <Label>react</Label>
          </LabelGroup>
        </Segment>

        <Segment>
          <Header element='h3'>Circular group</Header>
          <LabelGroup circular>
            <Label>1</Label>
            <Label>2</Label>
            <Label>3</Label>
          </LabelGroup>
        </Segment>
      </div>
    )
  }
}
