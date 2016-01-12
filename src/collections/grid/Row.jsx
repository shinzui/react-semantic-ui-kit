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
    let classes = classNames('ui', this.columnClasses(), 'row', this.props.className)

    return <div className={classes}>{this.props.children}</div>
  }
}

