import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import spellNumber from '../../util/spellNumber'
import propsToClasses from '../../util/propsToClasses'

export default class Row extends Component {

  static propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    doubling: PropTypes.bool,
    centered: PropTypes.bool,
    equalWidth: PropTypes.bool
  }

  columnClasses() {
    const { columns } = this.props

    if(columns) return `${spellNumber(columns)} column`
  }

  render() {
    const { style, className, equalWidth } = this.props
    const classesFromProps = propsToClasses(['centered', 'doubling'], this.props)
    let classes = classNames('ui', this.columnClasses(), {'equal width': equalWidth},
                             classesFromProps, 'row', className)

    return <div className={classes} style={style}>{this.props.children}</div>
  }
}

