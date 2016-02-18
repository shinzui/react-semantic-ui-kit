import React from 'react'

import classNames from 'classnames'

const Actions = (props) => {
  const { className, children } = props
  const classes = classNames('actions', className)

  return <div className={classes}>{children}</div>
}

export default Actions
