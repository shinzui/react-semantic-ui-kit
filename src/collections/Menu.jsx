import React, { Component } from 'react'
import classNames from 'classnames'

export default class Menu extends Component {

  render() {
    let classes = classNames('ui menu vertical', this.props.className)
    return <div className={classes}>{this.props.children}</div>
  }

}
