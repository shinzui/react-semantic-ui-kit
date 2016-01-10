import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Segment extends Component {

  render() {
    const classes = classNames('ui', 'segment', this.props.className)

    return <div className={classes} style={this.props.style}>{this.props.children}</div>
  }
}
