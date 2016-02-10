import React, { PropTypes } from 'react'

import classNames from 'classnames'

const Checkbox = (props) => {
  const { label, name, checked, className, children, onChange } = props
  const classes = classNames('ui', 'checkbox', className)

  const labelEl = label ? <label>{label}</label> : undefined

  return (
    <div className={classes}>
      <input type='checkbox' name={name} checked={checked} onChange={onChange} />
      {labelEl}
      {children}
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default Checkbox
