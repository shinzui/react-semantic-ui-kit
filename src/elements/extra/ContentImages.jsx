import React, { PropTypes } from 'react'

import classNames from 'classnames'

const ContentImages = (props) => {
  const { className, extra, children } = props
  const classes = classNames({'extra': extra}, 'images', className)

  return <div className={classes}>{children}</div>
}

ContentImages.propTypes = {
  extra: PropTypes.bool
}

export default ContentImages
