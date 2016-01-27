import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../util/propsToClasses'
import SemanticUiPropTypes from '../common/SemanticUiPropTypes'

import { Label } from '../index'

export default class Input extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    focus: PropTypes.bool,
    transparent: PropTypes.bool,
    inverted: PropTypes.bool,
    fluid: PropTypes.bool,
    icon: PropTypes.bool,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    label: PropTypes.oneOfType([
     PropTypes.string,
     PropTypes.element,
     PropTypes.bool
    ]),
    labelPosition: PropTypes.oneOf(['left', 'right']),
    action: PropTypes.bool,
    actionPosition: PropTypes.oneOf(['left', 'right']),
    size: SemanticUiPropTypes.size
  }

  iconClasses() {
    const { icon, iconPosition } = this.props

    if(icon) {
      return `${iconPosition} icon`
    }
  }

  labelClasses() {
    const { label, labelPosition, labeled } = this.props

    if(label) {
      return `${labelPosition} labeled`
    }
  }

  actionClasses() {
    const { action, actionPosition } = this.props

    if(action) {
      return `${actionPosition} action`
    }
  }

  labelElement() {
    const { label } = this.props

    if(label) {

      if(typeof label === 'string') {
        return <Label>{label}</Label>
      } else if(typeof label === 'boolean') {
        return undefined
      }
      else {
        return label
      }
    }
  }

  render() {
    const { size, className, loading, error, focus, label,
            iconPosition, labelPosition, actionPosition } = this.props

    const classesFromProps = propsToClasses(['disabled', 'transparent', 'inverted', 'fluid'], this.props)

    const classes = classNames('ui',this.iconClasses(), this.labelClasses(), this.actionClasses(),
                               classesFromProps, size, 'input',
                               {'loading': loading}, {'error': error}, {'focus': focus})

    let rightLabel, leftLabel
    if(label) {
      if(labelPosition === 'right') {
        rightLabel = this.labelElement()
      } else {
        leftLabel = this.labelElement()
      }
    }

    return (
      <div className={classes}>
        {leftLabel}
        {this.props.children}
        {rightLabel}
      </div>
    )
  }
}
