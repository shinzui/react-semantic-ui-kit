import React, { PropTypes } from 'react'
import classNames from 'classnames'

const Icon = (props) => {

  const { className, type, outline } = props
  const classes = classNames(type, {'outline': outline}, 'icon', className)

  return <i className={classes} /> 
}

Icon.propTypes = {
  outline: PropTypes.bool
}

export default Icon
