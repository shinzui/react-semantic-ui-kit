import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import { attachedClasses } from '../../common/semanticClasses'
import spellNumber from '../../util/spellNumber'

import Step from './Step'

export default class StepGroup extends Component {

  static propTypes = {
    ordered: PropTypes.bool,
    vertical: PropTypes.bool,
    fluid: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
    steps: PropTypes.number,
    attached: SemanticUiPropTypes.attached,
    stackable: PropTypes.bool,
    children: (props, propName, componentName) => {
      const prop = props[propName]

      if(Array.isArray(prop)) {
        if(prop.some( p => p.type !== Step)) {
          return new Error(`${componentName} should only have Step as children`)
        }
      } else {
        if(prop.type !== Step) {
          return new Error(`${componentName} should only have Step as children`)
        }
      }
    }
  }

  stepsClasses() {
    const { steps} = this.props

    if(steps) return spellNumber(steps)
  }

  render() {
    const { className, size, stackable }  = this.props
    const classesFromProps = propsToClasses(['fluid', 'ordered', 'vertical'], this.props)
    const classes = classNames('ui', classesFromProps, this.stepsClasses(), attachedClasses(this.props),
                               {'tablet stackable': stackable },
                               size, 'steps', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
