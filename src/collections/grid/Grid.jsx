import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import { columnClasses } from '../../common/semanticClasses'
import propsToClasses from '../../util/propsToClasses'

export default class Grid extends Component {

  static propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    page: PropTypes.bool,
    container: PropTypes.bool,
    relaxed: PropTypes.bool,
    celled: PropTypes.bool,
    centered: PropTypes.bool,
    internallyCelled: PropTypes.bool,
    equalWidth: PropTypes.bool
  }

  render() {
    const { page, container, internallyCelled, style, equalWidth, className } = this.props
    const classesFromProps = propsToClasses(['relaxed', 'celled', 'centered'], this.props)
    const classes = classNames('ui', columnClasses(this.props), classesFromProps,
                               {'internally celled': internallyCelled},
                               {'equal width': equalWidth},
                               'grid', {'container': page || container},  className)

    return <div {...this.props} className={classes} style={style}>{this.props.children}</div>
  }

}
