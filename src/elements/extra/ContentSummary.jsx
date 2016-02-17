import React from 'react'

import classNames from 'classnames'

const ContentSummary = (props) => {
  const { className, children } = props
  const classes = classNames('summary', className)

  return <div className={classes}>{children}</div>
}

export default ContentSummary
