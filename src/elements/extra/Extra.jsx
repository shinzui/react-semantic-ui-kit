import React, { PropTypes } from 'react'

import classNames from 'classnames'

const Extra = (props) => {
  const { className, style, children } = props
  const classes = classNames('extra', className)

  return <div className={classes} style={style}>{children}</div>
}

Extra.propTypes = {
  style: PropTypes.object
}

export default Extra

