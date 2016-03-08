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
    internallyCelled: PropTypes.bool
  }

  render() {
    const { page, container, internallyCelled, className } = this.props
    const classesFromProps = propsToClasses(['relaxed', 'celled'], this.props)
    const classes = classNames('ui', classesFromProps, {'internally celled': internallyCelled},
                               columnClasses(this.props), 'grid', {'container': page || container},  className)

    return <div {...this.props} className={classes}>{this.props.children}</div>
  }

}
