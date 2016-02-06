import React from 'react'

import classNames from 'classnames'

const Meta = (props) => {
  const { className, children } = props
  const classes = classNames('meta', className)

  return <div className={classes}>{children}</div> 
}

export default Meta
