import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import spellNumber from '../../util/spellNumber'

export default class Grid extends Component {

  static propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    page: PropTypes.bool
  }

  columnClasses() {
    const { columns } = this.props

    if(columns) return `${spellNumber(columns)} column`
  }

  render() {
    let classes = classNames('ui', this.columnClasses(), 'grid', {'container': this.props.page},  this.props.className)

    return <div {...this.props} className={classes}>{this.props.children}</div>
  }

}

