import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import FeedEvent from './FeedEvent'

export default class Feed extends Component {

  static propTypes = {
    children: (props, propName, componentName) => {
      const prop = props[propName]

      if(Array.isArray(prop)) {
        if(prop.some( p => (p.type !== FeedEvent))) {
          return new Error(`${componentName} should only have FeedEvent as children`)
        }
      } else {
        if(prop.type !== FeedEvent) {
          return new Error(`${componentName} should only have FeedEvent as children`)
        }
      }
    }
  }

  render() {
    const { className } = this.props
    const classes = classNames('ui', 'feed', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
