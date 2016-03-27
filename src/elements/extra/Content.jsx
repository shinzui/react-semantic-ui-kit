import React, { PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import { alignedClasses } from '../../common/semanticClasses'

const Content = (props) => {
  const { className, children } = props
  const classesFromProps = propsToClasses(['extra', 'visible', 'hidden'], props)
  const classes = classNames(alignedClasses(props), classesFromProps, 'content', className)

  return <div className={classes}>{children}</div>
}

Content.propTypes = {
  extra: PropTypes.bool,
  visible: PropTypes.bool,
  hidden: PropTypes.bool,
  aligned: SemanticUiPropTypes.verticalAlignment
}

export default Content
