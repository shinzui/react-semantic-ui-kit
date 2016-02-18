import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

export default class CommentGroup extends Component {

  render() {
    const { className } = this.props
    const classes = classNames('ui', 'comments', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
