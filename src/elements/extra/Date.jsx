import React from 'react'

import classNames from 'classnames'

const Date = (props) => {
  const { className, children } = props
  const classes = classNames('date', className)

  return <div className={classes}>{children}</div>
}

export default Date

