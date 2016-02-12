import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import { columnClasses } from '../../common/semanticClasses'

export default class Grid extends Component {

  static propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    page: PropTypes.bool,
    container: PropTypes.bool
  }

  render() {
    const { page, container, className } = this.props
    const classes = classNames('ui', columnClasses(this.props), 'grid', {'container': page || container},  className)

    return <div {...this.props} className={classes}>{this.props.children}</div>
  }

}

