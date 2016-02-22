import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import propsToClasses from '../../util/propsToClasses'
import { floatedClasses } from '../../common/semanticClasses'

export default class Button extends Component {

  static propTypes = {
    basic: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    fluid: PropTypes.bool,
    floated: SemanticUiPropTypes.floated,
    icon: PropTypes.bool,
    labeledIcon: PropTypes.bool,
    inverted: PropTypes.bool,
    color: SemanticUiPropTypes.color
  }

  render() {
    const { labeledIcon, className, color } = this.props
    const classesFromProps = propsToClasses(['inverted', 'primary', 'secondary', 'basic', 'fluid', 'icon'], this.props)
    const initialClassesFromProps = propsToClasses(['positive', 'negative'], this.props)
    const classes = classNames(initialClassesFromProps, 'ui', classesFromProps,
                               {'labeled icon': labeledIcon},
                               floatedClasses(this.props), color,
                               'button', className)

    return <button className={classes}>{this.props.children}</button>
  }

}
