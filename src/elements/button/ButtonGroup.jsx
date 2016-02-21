import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

export default class Button extends Component {

  propTypes = {
    icon: PropTypes.bool
  }

  render() {
    const { className } = this.props
    const classesFromProps = propsToClasses(['icon'], this.props)
    const classes = classNames('ui', classesFromProps, 'buttons', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
