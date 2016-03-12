import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import { columnClasses } from '../../common/semanticClasses'
import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import { reversedDevicesClasses } from '../../common/semanticClasses'

export default class Grid extends Component {

  static propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    page: PropTypes.bool,
    container: PropTypes.bool,
    relaxed: PropTypes.bool,
    celled: PropTypes.bool,
    centered: PropTypes.bool,
    stackable: PropTypes.bool,
    internallyCelled: PropTypes.bool,
    equalWidth: PropTypes.bool,
    reversedDevices: SemanticUiPropTypes.commonDevices
  }

  render() {
    const { page, container, internallyCelled, style, equalWidth, className } = this.props
    const classesFromProps = propsToClasses(['relaxed', 'celled', 'centered', 'stackable'], this.props)
    const classes = classNames('ui', columnClasses(this.props), classesFromProps,
                               reversedDevicesClasses(this.props),
                               {'internally celled': internallyCelled},
                               {'equal width': equalWidth},
                               'grid', {'container': page || container},  className)

    return <div {...this.props} className={classes} style={style}>{this.props.children}</div>
  }

}
