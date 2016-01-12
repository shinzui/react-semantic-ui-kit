import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Item extends Component {

  render() {
    const classes = classNames('item', this.props.className)

    return <div className={classes}>{this.props.children}</div>
  }
}
