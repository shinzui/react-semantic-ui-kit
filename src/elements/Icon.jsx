import React, { PropTypes } from 'react'
import classNames from 'classnames'

const Icon = (props) => {

  const { className, type, outline, slash, square } = props
  const classes = classNames(iconType(type), {'square': square}, {'slash': slash}, {'outline': outline}, 'icon', className)

  return <i className={classes} />
}

export const iconType = (type) => {
  const re = /(.*)([A-Z].*)/
  const result = type.match(re)

  if(result) {
    const firstWord = result[1]
    const secondWord = result[2]

    return `${firstWord} ${secondWord.charAt(0).toLowerCase() + secondWord.slice(1)}`
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
