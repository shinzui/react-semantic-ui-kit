import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Statistic extends Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelPosition: PropTypes.oneOf(['top', 'bottom'])
  }

  static defaultProps = {
    labelPosition: 'bottom'
  }

  render() {
    const { value, label, className, labelPosition } = this.props
    const classes = classNames('ui', 'statistic', className)

    const valueEl = <div className='value'>{value}</div>
    const labelEl = <div className='label'>{label}</div>

    const top = labelPosition === 'top' ?  labelEl : valueEl
    const bottom = labelPosition === 'bottom' ? labelEl : valueEl

    return (
      <div className={classes}>
        {top}
        {bottom}
      </div>
    )
  }
}
