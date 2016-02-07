import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import propsToClasses from '../../util/propsToClasses'

export default class Card extends Component {

  static propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.bool
  }

  render() {
    const { className } = this.props
    const classesFromProps = propsToClasses(['fluid'], this.props)
    const classes = classNames('ui', classesFromProps,
                               'card', className)

    return <div className={classes}>{this.props.children}</div>
  }
}

