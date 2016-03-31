import React, { PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../util/propsToClasses'

const Checkbox = (props) => {
  const { label, name, checked, className, children, onChange, radio } = props
  const classesFromProps = propsToClasses(['fitted', 'radio'], props)
  const classes = classNames('ui', classesFromProps, 'checkbox', className)

  const labelEl = label ? <label>{label}</label> : undefined

  const type = radio ? 'radio' : 'checkbox'

  return (
    <div className={classes}>
      <input type={type} name={name} checked={checked} onChange={onChange} />
      {labelEl}
      {children}
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  fitted: PropTypes.bool,
  radio: PropTypes.bool
}

export default Checkbox
