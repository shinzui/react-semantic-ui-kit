import React, { PropTypes } from 'react'
import classNames from 'classnames'

const Icon = (props) => {

  const { className, type, outline, slash } = props
  const classes = classNames(type, {'slash': slash}, {'outline': outline}, 'icon', className)

  return <i className={classes} /> 
}

Icon.propTypes = {
  outline: PropTypes.bool,
  slash: PropTypes.bool
}

export default Icon
