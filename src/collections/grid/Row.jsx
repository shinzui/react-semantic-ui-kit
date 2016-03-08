import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import spellNumber from '../../util/spellNumber'

export default class Row extends Component {

  static propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number
  }

  columnClasses() {
    const { columns } = this.props

    if(columns) return `${spellNumber(columns)} column`
  }

  render() {
    const { style, className } = this.props
    let classes = classNames('ui', this.columnClasses(), 'row', className)

    return <div className={classes} style={style}>{this.props.children}</div>
  }
}

