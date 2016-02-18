import React from 'react'

import classNames from 'classnames'

const Text = (props) => {
  const { className, children } = props
  const classes = classNames('text', className)

  return <div className={classes}>{children}</div>
}

export default Text
