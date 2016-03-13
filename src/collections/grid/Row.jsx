import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import spellNumber from '../../util/spellNumber'
import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import { deviceClasses, alignedClasses } from '../../common/semanticClasses'

export default class Row extends Component {

  static propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    doubling: PropTypes.bool,
    centered: PropTypes.bool,
    equalWidth: PropTypes.bool,
    aligned: SemanticUiPropTypes.aligned,
    devices: SemanticUiPropTypes.devices
  }

  columnClasses() {
    const { columns } = this.props

    if(columns) return `${spellNumber(columns)} column`
  }

  render() {
    const { style, className, equalWidth } = this.props
    const classesFromProps = propsToClasses(['centered', 'doubling'], this.props)
    let classes = classNames('ui', deviceClasses(this.props), alignedClasses(this.props),
                             this.columnClasses(), {'equal width': equalWidth},
                             classesFromProps, 'row', className)

    return <div className={classes} style={style}>{this.props.children}</div>
  }
}

