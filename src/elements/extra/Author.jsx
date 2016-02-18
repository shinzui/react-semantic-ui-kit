import React, { PropTypes } from 'react'

import classnames from 'classnames'

const Author = (props) => {
  const { classname, children, href } = props
  const classes = classnames('author', classname)

  if(href) {
    return <a href={href} className={classes}>{children}</a>
  } else {
    return <div className={classes}>{children}</div>
  }
}

Author.propTypes = {
  href: PropTypes.string
}

export default Author
