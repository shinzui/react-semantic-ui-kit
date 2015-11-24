import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Modal extends Component {

  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    ref: PropTypes.string
  }

  static defaultProps = {
    ref: 'modal',
    isVisible: false
  }

  render() {
    let classes = classNames('ui', this.props.className, 'modal', {'transition visible active': this.props.isVisible})

    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
