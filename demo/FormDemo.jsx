import React, { Component } from 'react'
import { Form, FormField, FormFieldGroup, Segment } from '../src/index'

export default class FormDemo extends Component {

  render() {
    return (
      <div>
        <Segment>
          <Form>
            <h3>Field Groups</h3>
            <FormFieldGroup fields={2}>
              <FormField name='username' label='Username' width={6} placeholder='Username'/>

              <FormField name='password' label='Password' width={6} placeholder='Password'/>
            </FormFieldGroup>
          </Form>
        </Segment>

        <Segment>
          <Form>
            <h3>Inline field group</h3>
            <FormFieldGroup inline>
              <FormField name='username' label='Username' placeholder='Username'/>

              <FormField name='password' label='Password' placeholder='Password'/>
            </FormFieldGroup>
          </Form>
        </Segment>
      </div>
    )
  }
}
