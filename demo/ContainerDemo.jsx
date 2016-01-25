import React, { Component } from 'react'

import { Container, Header, Divider } from '../src/index'

export default  class ContainerDemo extends Component {

  render() {
    return(
      <div>
        <Container text>
          <Header element='h2'>Text container</Header>
          <p>
            Genji was famous and life was secure and peaceful. His ladies had in their several ways made their own lives and were happy.
            There was an exception, Tamakazura, who faced a new crisis and was wondering what to do next.
          </p>
          <p>
            She was not as genuinely frightened of him, of course, as she had been of the Higo man; but since few people could possibly know what had happened,
            she must keep her disquiet to herself, and her growing sense of isolation. Old enough to know a little of the world, she saw more than ever what a
            handicap it was not to have a mother.
          </p>
        </Container>

        <Divider />

        <Container justified text>
          <Header element='h2'>Justified text container</Header>
          <p>
            Genji was famous and life was secure and peaceful. His ladies had in their several ways made their own lives and were happy.
            There was an exception, Tamakazura, who faced a new crisis and was wondering what to do next.
          </p>
          <p>
            She was not as genuinely frightened of him, of course, as she had been of the Higo man; but since few people could possibly know what had happened,
            she must keep her disquiet to herself, and her growing sense of isolation. Old enough to know a little of the world, she saw more than ever what a
            handicap it was not to have a mother.
          </p>
        </Container>

        <Divider />

        <Container text aligned='left'>
          <p>Left aligned</p>
        </Container>
        <Container text aligned='center'>
          <p>Center aligned</p>
        </Container>
        <Container text aligned='right'>
          <p>Right aligned</p>
        </Container>
      </div>
    )
  }
}
