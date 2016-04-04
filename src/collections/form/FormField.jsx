import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import ImmutablePropTypes from 'react-immutable-proptypes'

import spellNumber from '../../util/spellNumber'
import propsToClasses from '../../util/propsToClasses'

import Label from '../../index'

export default class FormField extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    width: PropTypes.number,
    errors: ImmutablePropTypes.list,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    required: PropTypes.bool,
    readOnly: PropTypes.bool
  }

  static defaultProps = {
    value: '',
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {}
  }

  constructor(props) {
    super(props)
  }

  widthClasses() {
    const { width } = this.props

    if(width) return `${spellNumber(width)} wide`
  }

  inputControl() {
    const { errors, label: labelText, name, value, placeholder, readOnly } = this.props
    const { onBlur, onFocus, onChange } = this.props

    const input =
      <input type='text' name={name} value={value}
             onChange={onChange}
             onBlur={onBlur}
             onFocus={onFocus}
             placeholder={placeholder} readOnly={readOnly}/>

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
    const { errors, label: labelText, name, value, children } = this.props
    const hasErrors = errors && errors.size > 0

    let widthClasses = this.widthClasses()
    let label = labelText ? <label>{labelText}</label> : ''
    const classFromProps = propsToClasses(['disabled', 'inline', 'required'], this.props)
    let fieldClasses = classNames('ui', classFromProps, 'field', {'error': hasErrors}, widthClasses )
    let pointingLabel = hasErrors ? <Label basic pointing className='prompt red'>{errors.get(0)}</Label> : undefined

    const input = children ? children : this.inputControl()
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
