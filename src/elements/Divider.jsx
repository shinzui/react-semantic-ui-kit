import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Divider extends Component {

  static propTypes = {
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool
  }

  render() {
    const { horizontal, vertical } = this.props
    const classes = classNames('ui', {'vertical': vertical}, {'horizontal': horizontal}, 'divider')

    return <div className={classes}>{this.props.children}</div>
  }


}
