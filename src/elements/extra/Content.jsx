import React from 'react'

import classNames from 'classnames'

const Content = (props) => {
  const { className, children, extra } = props
  const classes = classNames({'extra': extra}, 'content', className)

  return <div className={classes}>{children}</div>
}

export default Content
