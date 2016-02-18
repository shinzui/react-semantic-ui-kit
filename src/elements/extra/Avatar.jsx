import React, { PropTypes } from 'react'

import classnames from 'classnames'

const Avatar = (props) => {
  const { classname, src, href } = props
  const classes = classnames('avatar', classname)

  if(href) {
    return <a href={href} className={classes}><img src={src} /></a>
  } else {
    return <div className={classes}><img src={src} /></div>
  }
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string
}

export default Avatar
