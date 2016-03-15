import React, { PropTypes } from 'react'
import classNames from 'classnames'

import { lowercase, splitAndLowerCamelCase } from '../util/string'

const Icon = (props) => {

  const { className, type, outline, slash, square } = props
  const classes = classNames(splitAndLowerCamelCase(type), {'square': square}, {'slash': slash}, {'outline': outline}, 'icon', className)

  return <i className={classes} />
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  square: PropTypes.bool,
  slash: PropTypes.bool
}

export default Icon
