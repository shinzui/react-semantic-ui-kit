import React, { Component } from 'react'
import { Form, FormField } from '../src/index'

export default class FormDemo extends Component {

  constructor(props) {
    super(props)
    this.onFieldChange = ::this.onFieldChange
    this.onFieldBlur = ::this.onFieldBlur
    this.onFieldFocus = ::this.onFieldFocus
  }

  onFieldChange(fieldName, event) {
  }

  onFieldFocus(fieldName, event) {
  }

  onFieldBlur(fieldName, event) {
  }

  render() {
    return (
      <Form>
        <h1>Form Demo</h1>
        <FormField name='username' label='Username' width={6}
          onChange={this.onFieldChange.bind(null, 'username')}
          onBlur={this.onFieldBlur.bind(null, 'username')}
          onFocus={this.onFieldFocus.bind(null, 'username')} />

        <FormField name='password' label='Password' width={6}
          onChange={this.onFieldChange.bind(null, 'password')}
          onBlur={this.onFieldBlur.bind(null, 'password')}
          onFocus={this.onFieldFocus.bind(null, 'password')} />
      </Form>
    )
  }
}
