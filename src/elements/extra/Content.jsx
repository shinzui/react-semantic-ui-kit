import React, { PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

const Content = (props) => {
  const { className, children } = props
  const classesFromProps = propsToClasses(['extra', 'visible', 'hidden'], props)
  const classes = classNames(classesFromProps, 'content', className)

  return <div className={classes}>{children}</div>
}

Content.propTypes = {
  extra: PropTypes.bool,
  visible: PropTypes.bool,
  hidden: PropTypes.bool
}

export default Content
