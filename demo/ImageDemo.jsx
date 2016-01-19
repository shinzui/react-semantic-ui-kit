import React, { Component } from 'react'
import { Image , ImageGroup, Segment, Divider } from '../src/index'
import { Grid, Row, Column } from '../src/index'

import bomi from './bomi.jpg'
import genji from './genji.jpg'

export default class ImageDemo extends Component {

  render() {
    return (
      <div>
      <Segment>
        <h3>Centered Image</h3>
        <Image src={bomi} size='small' centered/>
      </Segment>
      <Segment>
        <h3>Circular Image</h3>
        <Image src={bomi} size='small' circular/>
      </Segment>
      <Segment>
        <h3>Rounded Image</h3>
        <Image src={bomi} size='small' rounded/>
      </Segment>

      <Segment>
        <h3>Fluid Image</h3>
        <Image src={bomi} fluid/>
      </Segment>

      <Segment cleared>
        <Image src={genji} floated='left' size='small'/>
        <p>
          The  days went by and the thunder and rain continued. What was Genji to do? People would laugh if, in this extremity, out of favor at court, he were to return to the city. Should he then seek a mountain retreat?
          But if it were to be noised about that a storm had driven him away, then he would cut a ridiculous figure in history.
          His dreams were haunted by that same apparition. Messages from the city almost entirely ceased coming as the days went by without a break in the storms.
          Might he end his days at Suma? No one was likely to come calling in these tempests.
        </p>
        <Image src={genji} floated='right' size='small'/>
        <p>
          A messenger did come from Murasaki, a sad, sodden creature. Had they passed in the street, Genji would scarcely have known whether he was man or beast, and of course would not have thought of inviting him to come near. Now the man brought a surge of pleasure
          and affection — though Genji could not help asking himself whether the storm had weakened his moorings.
        </p>
        <p>
          Murasaki’s letter, long and melancholy, said in part: “The terrifying deluge goes on without a break, day after day. Even the skies are closed off, and I am denied the comfort of gazing in your direction.
        </p>
      </Segment>

      <Segment>
        <Image src={bomi} size='small' aligned='top' />
        Top aligned

        <Divider />

        <Image src={bomi} size='small' aligned='middle' />
        Middle aligned
        <Divider />

        <Image src={bomi} size='small' aligned='bottom' />
        Bottom aligned

      </Segment>

      <Segment>
        <h3>Disabled Image</h3>

        <Image src={bomi} disabled size='small'/>
      </Segment>

      <Segment>
        <h3>Image Group</h3>
        <ImageGroup size='small'>
          <Image src={bomi} />
          <Image src={bomi} />
          <Image src={bomi} />
        </ImageGroup>
      </Segment>
      </div>

    )
  }
}
