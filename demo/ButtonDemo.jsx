import React, { Component } from 'react'
import { Button } from '../src/index'

export default class ButtonDemo extends Component {

  render() {
    return (
      <div>
        <Button>Simple Button</Button>
        <Button primary>Primary Button</Button>
        <Button secondary>Secondary Button</Button>
      </div>
    )
  }
}
