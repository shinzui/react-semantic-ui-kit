import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import spellNumber from '../../util/spellNumber'

export default class Grid extends Component {

  static propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    page: PropTypes.bool,
    container: PropTypes.bool
  }

  columnClasses() {
    const { columns } = this.props

    if(columns) return `${spellNumber(columns)} column`
  }

  render() {
    const { page, container, className } = this.props
    const classes = classNames('ui', this.columnClasses(), 'grid', {'container': page || container},  className)

    return <div {...this.props} className={classes}>{this.props.children}</div>
  }

}

