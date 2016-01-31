import React from 'react'

import { Segment, Divider, Step, StepGroup } from '../src/index'

const StepDemo = (props) => {
  return (
    <div>
      <Segment>
        <h3>Single step</h3>

        <StepGroup>
          <Step>Step</Step>
        </StepGroup>
      </Segment>

      <Segment>
        <h3>Group of steps</h3>

        <StepGroup>
          <Step>
            <div className='content'>
              <div className='title'>Registration</div>
              <div className='description'>email and password</div>
            </div>
          </Step>
          <Step>
            <div className='content'>
              <div className='title'>Profile</div>
              <div className='description'>name and contact</div>
            </div>
          </Step>
          <Step>
            <div className='content'>
              <div className='title'>Preferences</div>
              <div className='description'>default settings</div>
            </div>
          </Step>
        </StepGroup>
      </Segment>

      <Segment>
        <StepGroup ordered>
          <Step completed>
            <div className='content'>
              <div className='title'>Registration</div>
              <div className='description'>email and password</div>
            </div>
          </Step>
          <Step completed>
            <div className='content'>
              <div className='title'>Profile</div>
              <div className='description'>name and contact</div>
            </div>
          </Step>
          <Step active>
            <div className='content'>
              <div className='title'>Preferences</div>
              <div className='description'>default settings</div>
            </div>
          </Step>
        </StepGroup>
      </Segment>

      <Segment>
        <StepGroup vertical ordered>
          <Step completed>
            <div className='content'>
              <div className='title'>Registration</div>
              <div className='description'>email and password</div>
            </div>
          </Step>
          <Step completed>
            <div className='content'>
              <div className='title'>Profile</div>
              <div className='description'>name and contact</div>
            </div>
          </Step>
          <Step active>
            <div className='content'>
              <div className='title'>Preferences</div>
              <div className='description'>default settings</div>
            </div>
          </Step>
        </StepGroup>
      </Segment>


      <Segment>
        <h3>Step States</h3>
        <StepGroup>
          <Step active>
            <i className='info circle icon' />
            <div className='content'>
              <div className='title'>Preferences</div>
              <div className='description'>default settings</div>
            </div>
          </Step>
        </StepGroup>

        <Divider />
        <StepGroup>
          <Step disabled>
            <i className='info circle icon' />
            <div className='content'>
              <div className='title'>Preferences</div>
              <div className='description'>default settings</div>
            </div>
          </Step>
        </StepGroup>

        <Divider />

        <StepGroup>
          <Step completed>
            <i className='info circle icon' />
            <div className='content'>
              <div className='title'>Preferences</div>
              <div className='description'>default settings</div>
            </div>
          </Step>
        </StepGroup>
      </Segment>
    </div>
  )
}

export default StepDemo
