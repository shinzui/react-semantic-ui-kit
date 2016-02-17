import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

export default class FeedEvent extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { className } = this.props
    const classes = classNames('event', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
