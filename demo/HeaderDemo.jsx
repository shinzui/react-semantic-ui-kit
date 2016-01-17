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

        <Segment>
          <Header element='h2' icon>
            <i className='settings icon' />
            <div className='content'>
              Icon header
            </div>
          </Header>
        </Segment>

        <Segment>
          <Header element='h1' disabled>Disabled header</Header>
        </Segment>

        <Segment>
          <Header element='h1' dividing>Dividing header</Header>
          <p>
            Some content
          </p>
        </Segment>

        <Segment>
          <Header element='h1' block>Block header</Header>
          <p>
            Some content
          </p>
        </Segment>

        <Header attached='top' element='h3'>
          Top Attached header
        </Header>
        <Segment attached='both'>
          <p>
            Attached segment
          </p>
        </Segment>
        <Header attached='both' element='h3'>
          Attached header
        </Header>
        <Segment attached='both'>
          <p>
            Attached segment
          </p>
        </Segment>
        <Header attached='bottom' element='h3'>
          Bottom attached header
        </Header>

        <Segment>
          <Header aligned='right' element='h3'>
            Right aligned header
          </Header>
          <Header aligned='center' element='h3'>
            Center aligned header
          </Header>
          <Header aligned='left' element='h3'>
            Left aligned header
          </Header>
          <Header justified element='h3'>
            A long header that is justified
          </Header>
        </Segment>

        <Segment clearing>
          <Header floated='right' element='h3'>
            Right floated header
          </Header>
          <Header floated='left' element='h3'>
            Left floated header
          </Header>
        </Segment>

        <Segment inverted>
          <Header inverted element='h3'>
            Inverted header
          </Header>
        </Segment>

      </div>
    )
  }
}
