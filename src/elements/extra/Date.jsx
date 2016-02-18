import React, { PropTypes } from 'react'

import classNames from 'classnames'

const Date = (props) => {
  const { className, children, inline } = props
  const classes = classNames('date', className)

  if(inline) {
    return <span className={classes}>{children}</span>
  } else {
    return <div className={classes}>{children}</div>
  }
}

Date.propTypes = {
  inline: PropTypes.bool
}

export default Date

