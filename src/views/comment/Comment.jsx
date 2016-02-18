import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

export default class CommentGroup extends Component {

  render() {
    const { className } = this.props
    const classes = classNames('comment', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
