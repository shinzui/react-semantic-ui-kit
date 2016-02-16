import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import { widthClasses } from '../../common/semanticClasses'

export default class Column extends Component {

  static propTypes = {
    width: PropTypes.number
  }

  render() {
    const { className } = this.props
    const classes = classNames(widthClasses(this.props), 'column', className)

    return <div className={classes} style={this.props.style}>{this.props.children}</div>
  }
}
