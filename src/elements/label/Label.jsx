import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import { attachedClasses } from '../../common/semanticClasses'

export default class Label extends Component {

  static propTypes = {
    basic: PropTypes.bool,
    tag: PropTypes.bool,
    circular: PropTypes.bool,
    horizontal: PropTypes.bool,
    image: PropTypes.bool,
    pointing: PropTypes.bool,
    floating: PropTypes.bool,
    size: SemanticUiPropTypes.size,
    pointingDirection: PropTypes.oneOf(['below', 'left', 'right']),
    attached: SemanticUiPropTypes.labelAttachment,
    color: SemanticUiPropTypes.color,
    leftCorner: PropTypes.bool,
    rightCornor: PropTypes.bool,
    leftRibbon: PropTypes.bool,
    rightRibbon: PropTypes.bool,
    href: PropTypes.string
  }

  pointingClasses() {
    const { pointing, pointingDirection } = this.props

    if(pointingDirection) {
      if(pointingDirection === 'below') {
        return 'pointing below'
      } else {
        return `${pointingDirection} pointing`
      }
    }

    if(pointing) {
      return 'pointing'
    }

  }

  cornerClasses() {
    const { leftCorner, rightCorner } = this.props

    if(leftCorner) {
      return 'left corner'
    } else if(rightCorner) {
      return 'right corner'
    }
  }

  ribbonClasses() {
    const { leftRibbon, rightRibbon} = this.props

    if(leftRibbon) {
      return 'left ribbon'
    } else if(rightRibbon) {
      return 'right ribbon'
    }
  }

  render() {
    const { className, pointingDirection, color, size, floating, href } = this.props

    const classesFromProps = propsToClasses(['basic', 'tag', 'circular', 'image', 'horizontal'], this.props)

    const classes = classNames({'floating': floating}, 'ui', this.pointingClasses(),
                               color, attachedClasses(this.props),
                               this.ribbonClasses(), this.cornerClasses(),
                               classesFromProps, size, 'label', className )

    if(href) {
      return <a className={classes} href={href}>{this.props.children}</a>
    } else {
      return <div className={classes}>{this.props.children}</div>
    }
  }
}
