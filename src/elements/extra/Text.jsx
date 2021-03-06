import React, { PropTypes } from 'react'

import classNames from 'classnames'

const Text = (props) => {
  const { className, extra, children } = props
  const classes = classNames({'extra': extra}, 'text', className)

  return <div className={classes}>{children}</div>
}

Text.propTypes = {
  extra: PropTypes.bool
}

export default Text
