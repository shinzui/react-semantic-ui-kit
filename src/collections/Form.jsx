import React, { Component, PropTypes } from 'react'

import ImmutablePropTypes from 'react-immutable-proptypes'

import PointingLabel from '../elements/Label'
import spellNumber from '../util/spellNumber'

import classNames from 'classnames'

/*eslint "react/no-multi-comp": 0 */
class Form extends Component {

  static propTypes = {
    valid: PropTypes.bool
  }

  render() {
    const classes = classNames('ui form', {'error' : !this.props.valid})

    return (
      <form className={classes}>
        {this.props.children}
      </form>
    )
  }
}

class FormField extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.number,
    errors: ImmutablePropTypes.list,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired
  }

  static defaultProps = {
    value: ''
  }

  constructor(props) {
    super(props)
  }

  widthClasses() {
    const { width } = this.props

    if(width) return `${spellNumber(width)} wide`
  }

  inputControl() {
    const { errors, label: labelText, name, value } = this.props
    const input =
      <input type='text' name={name} value={value}
             onChange={this.props.onChange}
             onBlur={this.props.onBlur}
             onFocus={this.props.onFocus}
             placeholder={this.props.placeholder} />

    if(this.props.busy) {
      return (<div className='ui input icon loading'>
        {input}
        <i className='icon' />
      </div>)
    } else {
      return input
    }
  }

  render() {
    const { errors, label: labelText, name, value } = this.props
    const hasErrors = errors && errors.size > 0

    let widthClasses = this.widthClasses()
    let label = labelText ? <label>{labelText}</label> : ''
    let fieldClasses = classNames('ui', 'field', {'error': hasErrors}, widthClasses )
    let pointingLabel = hasErrors ? <PointingLabel type='basic' className='prompt red' pointing>{errors.get(0)}</PointingLabel> : undefined

    const input = this.inputControl()
    return (
      <div className={fieldClasses}>
        {label}
        <div className='ui input icon loading'>
          {input}
        </div>
        {pointingLabel}
      </div>
    )
  }
}


export {
  Form,
  FormField
}
