import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Divider extends Component {

  static propTypes = {
    element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool,
    header: PropTypes.bool
  }

  render() {
    const { horizontal, vertical, header, element } = this.props
    const classes = classNames('ui', {'vertical': vertical}, {'horizontal': horizontal}, 'divider', {'header': header})

    if(element) {
      return <this.props.element className={classes}>{this.props.children}</this.props.element>
    } else {
      return <div className={classes}>{this.props.children}</div>
    }
  }


}
