import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

export default class Step extends Component {

  static propTypes = {
    completed: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool
  }

  render() {
    const { className }  = this.props
    const classesFromProps = propsToClasses(['completed', 'active', 'disabled'], this.props)
    const classes = classNames(classesFromProps, 'step', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
