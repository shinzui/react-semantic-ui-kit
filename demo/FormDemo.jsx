import React, { Component } from 'react'
import { Form, FormField, FormFieldGroup, Segment } from '../src/index'

export default class FormDemo extends Component {

  render() {
    return (
      <Segment>
        <Form>
          <h1>Form Demo</h1>
          <FormFieldGroup fields={2}>
            <FormField name='username' label='Username' width={6} placeholder='Username'/>

            <FormField name='password' label='Password' width={6} placeholder='Password'/>
          </FormFieldGroup>
        </Form>
      </Segment>
    )
  }
}
