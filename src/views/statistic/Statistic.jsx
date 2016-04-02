import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

export default class Statistic extends Component {

  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
    size: SemanticUiPropTypes.size,
    color: SemanticUiPropTypes.color,
    labelPosition: PropTypes.oneOf(['top', 'bottom']),
    horizontal: PropTypes.bool,
    style: PropTypes.object
  }

  static defaultProps = {
    labelPosition: 'bottom'
  }

  render() {
    const { value, label, className, size, style,
      horizontal, labelPosition, color } = this.props
    const classes = classNames('ui', {'horizontal': horizontal}, size, color, 'statistic', className)

    const valueEl = <div className='value'>{value}</div>
    const labelEl = <div className='label'>{label}</div>

    const top = labelPosition === 'top' ?  labelEl : valueEl
    const bottom = labelPosition === 'bottom' ? labelEl : valueEl

    return (
      <div className={classes} style={style}>
        {top}
        {bottom}
      </div>
    )
  }
}