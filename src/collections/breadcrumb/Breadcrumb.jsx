import React, { Component, PropTypes } from 'react'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import classNames from 'classnames'

export default class Breadcrumb extends Component {

  static propTypes = {
    size: SemanticUiPropTypes.size,
    children: PropTypes.node.isRequired
  }

  render() {
    const { size, children } = this.props
    const classes = classNames('ui', size, 'breadcrumb')

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }

}
