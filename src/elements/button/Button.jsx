import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import propsToClasses from '../../util/propsToClasses'
import { floatedClasses } from '../../common/semanticClasses'

export default class Button extends Component {

  static propTypes = {
    basic: PropTypes.bool,
    compact: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    icon: PropTypes.bool,
    labeled: PropTypes.bool,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    circular: PropTypes.bool,
    fluid: PropTypes.bool,
    floated: SemanticUiPropTypes.floated,
    icon: PropTypes.bool,
    labeledIcon: PropTypes.bool,
    inverted: PropTypes.bool,
    color: SemanticUiPropTypes.color
  }

  labelClasses() {
    const { labeled, labelPosition } = this.props

    if(labeled) {
      return `${labelPosition} labeled`
    }
  }

  render() {
    const { labeledIcon, className, color } = this.props
    const classesFromProps = propsToClasses(['circular', 'inverted', 'primary', 'secondary', 'basic',
                                            'fluid', 'icon', 'compact'], this.props)
    const initialClassesFromProps = propsToClasses(['positive', 'negative'], this.props)
    const classes = classNames(initialClassesFromProps, 'ui', this.labelClasses(this.props), classesFromProps,
                               {'labeled icon': labeledIcon},
                               floatedClasses(this.props), color,
                               'button', className)

    if(this.props.labeled) {
      return <div className={classes}>{this.props.children}</div>
    } else {
      return <button className={classes}>{this.props.children}</button>
    }
  }

}
