import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../util/propsToClasses'

/*eslint "react/no-multi-comp": 0 */
class List extends Component {

  static propTypes = {
    relaxed: PropTypes.bool,
    divided: PropTypes.bool,
    bulleted: PropTypes.bool,
    ordered: PropTypes.bool
  }

  element = 'div'

  render() {
    const { bulleted, ordered } = this.props
    const classesFromProps = propsToClasses(['relaxed', 'divided'], this.props)
    const classes = classNames('ui', classesFromProps, 'list', this.props.className)

    if(bulleted) this.element = 'ul'
    if(ordered) this.element = 'ol'

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { bulleted: bulleted, ordered: ordered })
    })

    return (
      <this.element className={classes}>
        {children}
      </this.element>
    )
  }
}

class ListItem extends Component {
  element = 'div'

  render() {
    const classes = classNames('item', this.props.className)
    const { bulleted, ordered } = this.props

    if(bulleted || ordered) this.element = 'li'

    return (
      <this.element className={classes}>
        {this.props.children}
      </this.element>
    )
  }

}

export {
  List,
  ListItem
}
