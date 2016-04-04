import React, { Component } from 'react'
import { Form, FormField, FormFieldGroup, Segment, Button, Checkbox } from '../src/index'

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
            <Button submit>Submit</Button>
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

        <Segment>
          <Form>
            <h3>Equal width field group</h3>
            <FormFieldGroup equalWidth>
              <FormField name='username' label='Username' placeholder='Username'/>

              <FormField name='password' label='Password' placeholder='Password'/>
            </FormFieldGroup>
          </Form>
        </Segment>

        <Segment>
          <h3>Loading form</h3>
          <Form loading>
            <FormField name='username' label='Username' width={6} placeholder='Username'/>

            <FormField name='password' label='Password' width={6} placeholder='Password'/>
            <Button submit>Submit</Button>
          </Form>
        </Segment>

        <Segment>
          <h3>Small form</h3>
          <Form size='small'>
            <FormFieldGroup>
              <FormField name='username' label='Username' placeholder='Username' />
              <FormField name='password' label='Password' placeholder='Password' />
            </FormFieldGroup>
          </Form>

          <h3>Large form</h3>
          <Form size='large'>
            <FormFieldGroup>
              <FormField name='username' label='Username' placeholder='Username' />
              <FormField name='password' label='Password' placeholder='Password' />
            </FormFieldGroup>
          </Form>
        </Segment>

        <Segment>
          <h3>Equal width form</h3>
          <Form equalWidth>
            <FormFieldGroup>
              <FormField name='username' label='Username' placeholder='Username' />
              <FormField name='password' label='Password' placeholder='Password' />
            </FormFieldGroup>
            <FormFieldGroup>
              <FormField name='firstName' label='First Name' placeholder='First Name' />
              <FormField name='middleName' label='Middle Name' placeholder='Middle Name' />
              <FormField name='lastName' label='Last Name' placeholder='Last Name' />
            </FormFieldGroup>
          </Form>
        </Segment>

        <Segment>
          <h3>Disabled fields</h3>
          <Form>
            <FormField disabled name='username' label='Username' width={6} placeholder='Username'/>

            <FormField disabled name='password' label='Password' width={6} placeholder='Password'/>
            <Button submit>Submit</Button>
          </Form>
        </Segment>

        <Segment>
          <h3>Inline fields</h3>
          <Form>
            <FormField inline name='username' label='Username' placeholder='Username'/>

            <FormField inline name='password' label='Password' placeholder='Password'/>
            <Button submit>Submit</Button>
          </Form>
        </Segment>

        <Segment>
          <h3>Grouped fields</h3>
          <Form>
            <FormFieldGroup grouped>
              <FormField>
                <Checkbox name='tokyo' label='Tokyo' />
              </FormField>
              <FormField>
                <Checkbox name='kyoto' label='Kyoto' />
              </FormField>
              <FormField>
                <Checkbox name='osaka' label='Osaka' />
              </FormField>
            </FormFieldGroup>
          </Form>
        </Segment>

        <Segment>
          <h3>Required fields</h3>
          <Form>
            <FormField required name='username' label='Username' placeholder='Username'/>

            <FormField required name='password' label='Password' placeholder='Password'/>
            <Button submit>Submit</Button>
          </Form>
        </Segment>

        <Segment>
          <h3>Read-only fields</h3>
          <Form>
            <FormField readOnly name='username' label='Username' placeholder='Username'/>

            <FormField readOnly name='password' label='Password' placeholder='Password'/>
            <Button submit>Submit</Button>
          </Form>
        </Segment>
      </div>
    )
  }
}
