import React from 'react'

import classNames from 'classnames'

const ContentHeader = (props) => {
  const { className, children, href } = props
  const classes = classNames('header', className)

  if(href) {
    return <a href={href} className={classes}>{children}</a>
  } else {
    return <div className={classes}>{children}</div>
  }
}

export default ContentHeader
