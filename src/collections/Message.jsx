import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../util/propsToClasses'

export default class Message extends Component {

  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(['small', 'large', 'huge', 'massive']),
    dismissable: PropTypes.bool,
    compact: PropTypes.bool
  }

  render() {
    const classesFromProps = propsToClasses(['compact'], this.props)
    let classes = classNames('ui', classesFromProps, this.props.size, 'message', this.props.className)
    let dismissIcon = this.props.dismissable ? <i className='close icon' /> : undefined

    return (
      <div {...this.props} className={classes}>
        {dismissIcon}
        {this.props.children}
      </div>)
  }
}
