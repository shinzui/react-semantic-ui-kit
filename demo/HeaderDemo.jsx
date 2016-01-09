import React, { Component } from 'react'
import { Image, Header, Segment } from '../src/index'

import bomi from './bomi.jpg'

export default class HeaderDemo extends Component {

  render() {
    return (
      <div>
        <Segment>
          <Header element='h1' header='H1 Header'/>
          <Header element='h2' header='H2 Header'/>
          <Header element='h3' header='H3 Header'/>
          <Header element='h4' header='H4 Header'/>
          <Header element='h5' header='H5 Header'/>
        </Segment>

        <Segment>
          <Header element='h1' header='H1 header with subheader' subheader='This is a subheader'/>
          <Header element='h2' header='H2 header with subheader' subheader='This is a subheader'/>
          <Header element='h3' header='H3 header with subheader' subheader='This is a subheader'/>
          <Header element='h4' header='H4 header with subheader' subheader='This is a subheader'/>
          <Header element='h5' header='H5 header with subheader' subheader='This is a subheader'/>
        </Segment>

        <Segment>
          <Header element='h1' subheader='This is a subheader alone'/>
        </Segment>

        <Segment>
          <Header element='h1'><Image src={bomi} size='mini' /><div className='content'>Header with image</div></Header>
        </Segment>
      </div>
    )
  }
}
