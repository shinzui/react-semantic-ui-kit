import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import spellNumber from '../../util/spellNumber'

export default class Column extends Component {

  static propTypes = {
    width: PropTypes.number
  }

  widthClasses() {
    const { width } = this.props

    if(width) return `${spellNumber(width)} wide`
  }

  render() {
    const { className } = this.props
    const classes = classNames(this.widthClasses(), 'column', className)

    return <div className={classes} style={this.props.style}>{this.props.children}</div>
  }
}
