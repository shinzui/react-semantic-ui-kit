import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

export default class MenuItem extends Component {

  static propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string,
    header: PropTypes.bool,
    disabled: PropTypes.bool,
    link: PropTypes.bool,
    down: PropTypes.bool,
    onClick: PropTypes.func,
    color: SemanticUiPropTypes.color
  }

  render() {
    const { className, href, children, onClick, color } = this.props
    const classesFromProps = propsToClasses(['active', 'disabled', 'link', 'down', 'header'], this.props)
    const classes = classNames(color, classesFromProps, 'item', className)

    if(href) {
      return <a href={href} className={classes} onClick={onClick}>{children}</a>
    } else {
      return <div className={classes} onClick={onClick}>{children}</div>
    }
  }
}
