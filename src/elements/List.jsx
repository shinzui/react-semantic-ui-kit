import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../util/propsToClasses'

/*eslint "react/no-multi-comp": 0 */
class List extends Component {

  static propTypes = {
    relaxed: PropTypes.bool,
    divided: PropTypes.bool,
    bulleted: PropTypes.bool,
    ordered: PropTypes.bool,
    simple: PropTypes.bool
  }

  element = 'div'

  render() {
    const { bulleted, ordered, simple } = this.props
    const classesFromProps = propsToClasses(['relaxed', 'divided', 'bulleted', 'ordered'], this.props)
    const classes = classNames('ui', classesFromProps, 'list', this.props.className)

    if(bulleted && simple) this.element = 'ul'
    if(ordered && simple) this.element = 'ol'

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { bulleted: bulleted, ordered: ordered, simple: simple })
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
    const { bulleted, ordered, simple } = this.props
    const classes = classNames('item', {'bulleted': bulleted && !simple}, { 'ordered': ordered && !simple},  this.props.className)

    if((bulleted || ordered) && simple) this.element = 'li'

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
