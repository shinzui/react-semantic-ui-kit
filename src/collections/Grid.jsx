import React, { Component, PropTypes } from 'react'

import spellNumber from '../util/spellNumber'
import classNames from 'classnames'

/*eslint "react/no-multi-comp": 0 */
export class Grid extends Component {

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

export class Row extends Component {

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

export class Column extends Component {

  static propTypes = {
    width: PropTypes.number
  }

  widthClasses() {
    const { width } = this.props

    if(width) return `${spellNumber(width)} wide`
  }

  render() {
    let classes = classNames('column', this.props.className, this.widthClasses())
    return <div className={classes}>{this.props.children}</div>
  }
}
