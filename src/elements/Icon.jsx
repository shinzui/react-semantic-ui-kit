import React, { PropTypes } from 'react'
import classNames from 'classnames'

import { lowercase } from '../util/string'

const Icon = (props) => {

  const { className, type, outline, slash, square } = props
  const classes = classNames(iconType(type), {'square': square}, {'slash': slash}, {'outline': outline}, 'icon', className)

  return <i className={classes} />
}

export const iconType = (type) => {
  const re = /(.*?)([A-Z][a-z]*)([A-Z].*)?/
  const result = type.match(re)

  if(result) {
    const firstWord = result[1]
    const secondWord = lowercase(result[2]) || ''
    const thirdWord = lowercase(result[3]) || ''

    return `${firstWord} ${secondWord} ${thirdWord}`
  } else {
    return type
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  square: PropTypes.bool,
  slash: PropTypes.bool
}

export default Icon
