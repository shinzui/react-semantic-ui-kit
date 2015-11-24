import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

export default class Message extends Component {

  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(['small', 'large', 'huge', 'massive']),
    dismissable: PropTypes.bool
  }

  render() {
    let classes = classNames('ui', this.props.className, this.props.size, 'message')
    let dismissIcon = this.props.dismissable ? <i className='close icon' /> : undefined

    return (
      <div {...this.props} className={classes}>
        {dismissIcon}
        {this.props.children}
      </div>)
  }
}
