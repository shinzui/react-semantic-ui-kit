import React from 'react'

import classNames from 'classnames'

const ContentDescription = (props) => {
  const { className, children } = props
  const classes = classNames('description', className)

  return <div className={classes}>{children}</div>
}

export default ContentDescription
