import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

export default class Card extends Component {

  static propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.bool,
    centered: PropTypes.bool,
    href: PropTypes.string,
    grouped: PropTypes.bool,
    color: SemanticUiPropTypes.color
  }

  render() {
    const { className, href, children, grouped, color } = this.props
    const classesFromProps = propsToClasses(['fluid', 'centered'], this.props)
    const classes = classNames({'ui': !grouped}, classesFromProps, color,
                               'card', className)


    if(href) {
      return <a href={href} className={classes}>{children}</a>
    } else {
      return <div className={classes}>{children}</div>
    }
  }
}

