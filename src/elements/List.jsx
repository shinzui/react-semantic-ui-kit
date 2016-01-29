import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../util/propsToClasses'
import SemanticUiPropTypes from '../common/SemanticUiPropTypes'
import { alignedClasses } from '../common/semanticClasses'

/*eslint "react/no-multi-comp": 0 */
class List extends Component {

  static propTypes = {
    relaxed: PropTypes.bool,
    divided: PropTypes.bool,
    bulleted: PropTypes.bool,
    ordered: PropTypes.bool,
    simple: PropTypes.bool,
    link: PropTypes.bool,
    horizontal: PropTypes.bool,
    inverted: PropTypes.bool,
    selection: PropTypes.bool,
    aligned: SemanticUiPropTypes.verticalAlignment
  }

  element = 'div'

  render() {
    const { bulleted, ordered, simple, link } = this.props
    const classesFromProps = propsToClasses(['relaxed', 'horizontal', 'divided', 'selection',
                                            'bulleted', 'ordered', 'link', 'inverted'], this.props)
    const classes = classNames('ui', alignedClasses(this.props), classesFromProps, 'list', this.props.className)

    if(bulleted && simple) this.element = 'ul'
    if(ordered && simple) this.element = 'ol'

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { bulleted: bulleted, ordered: ordered, simple: simple, link: link })
    })

    return (
      <this.element className={classes}>
        {children}
      </this.element>
    )
  }
}

class ListItem extends Component {

  static propTypes = {
    bulleted: PropTypes.bool,
    ordered: PropTypes.bool,
    simple: PropTypes.bool,
    href: PropTypes.string,
    link: PropTypes.bool,
    active: PropTypes.bool
  }

  element = 'div'

  render() {
    const { bulleted, ordered, simple, href, link, active } = this.props
    const classes = classNames('item', {'active': active}, {'bulleted': bulleted && !simple}, { 'ordered': ordered && !simple},  this.props.className)

    if((bulleted || ordered) && simple) this.element = 'li'

    if(href) this.element = 'a'
    if(link && !active) this.element = 'a'

    return (
      <this.element className={classes} href={href}>
        {this.props.children}
      </this.element>
    )
  }

}

export {
  List,
  ListItem
}
