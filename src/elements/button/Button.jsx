import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import propsToClasses from '../../util/propsToClasses'
import { floatedClasses, attachedClasses, socialClasses } from '../../common/semanticClasses'

export default class Button extends Component {

  static propTypes = {
    basic: PropTypes.bool,
    compact: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    submit: PropTypes.bool,
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    icon: PropTypes.bool,
    labeled: PropTypes.bool,
    labelPosition: PropTypes.oneOf(['left', 'right']),
    floated: SemanticUiPropTypes.floated,
    fluid: PropTypes.bool,
    circular: PropTypes.bool,
    fluid: PropTypes.bool,
    floated: SemanticUiPropTypes.floated,
    size: SemanticUiPropTypes.size,
    social: SemanticUiPropTypes.social,
    attached: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    icon: PropTypes.bool,
    labeledIcon: PropTypes.bool,
    inverted: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    color: SemanticUiPropTypes.color,
    animation: PropTypes.oneOf(['horizontal', 'vertical', 'fade']),
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: (event) => {
      console.error('You did not implement onClick for your <Button>')
    }
  }

  labelClasses() {
    const { labeled, labelPosition } = this.props

    if(labeled) {
      return `${labelPosition} labeled`
    }
  }

  animationClasses() {
    const { animation } = this.props

    if(animation === 'horizontal') {
      return 'animated'
    } else if (animation === 'vertical') {
      return 'vertical animated'
    } else if(animation === 'fade') {
      return 'animated fade'
    }
  }

  render() {
    const { labeledIcon, className, color, attached, labeled, size, onClick, ...other } = this.props
    const classesFromProps = propsToClasses(['circular', 'inverted', 'primary', 'secondary', 'basic',
                                            'active', 'disabled', 'loading', 'submit',
                                            'fluid', 'icon', 'compact'], this.props)

    const initialClassesFromProps = propsToClasses(['positive', 'negative', 'fluid'], this.props)

    const classes = classNames(initialClassesFromProps, 'ui', attachedClasses(this.props),
                               this.labelClasses(this.props), classesFromProps,
                               {'labeled icon': labeledIcon}, size,
                               socialClasses(this.props), this.animationClasses(),
                               floatedClasses(this.props), color,
                               'button', className)

    const Component = labeled || attached ? 'div' : 'button'

    return <Component className={classes} onClick={onClick} {...other}>{this.props.children}</Component>
  }

}
