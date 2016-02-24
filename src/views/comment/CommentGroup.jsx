import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

export default class CommentGroup extends Component {

  static propTypes = {
    minimal: PropTypes.bool
  }

  render() {
    const { className } = this.props
    const classesFromProps = propsToClasses(['minimal'], this.props)
    const classes = classNames('ui', classesFromProps, 'comments', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
