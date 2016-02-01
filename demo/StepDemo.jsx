import React from 'react'

import { Segment, Divider, Image,
         Grid, Column,
         Step, StepGroup } from '../src/index'

import paragraph from './paragraph.png'

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

      <Segment>
        <Grid columns={2}>
          <Column>
            <StepGroup vertical fluid>
              <Step completed>
                <i className='info circle icon' />
                <div className='content'>
                  <div className='title'>Preferences</div>
                  <div className='description'>default settings</div>
                </div>
              </Step>
              <Step active>
                <i className='info circle icon' />
                <div className='content'>
                  <div className='title'>Preferences</div>
                  <div className='description'>default settings</div>
                </div>
              </Step>
            </StepGroup>
          </Column>
          <Column>
            <h3>Fluid Step</h3>
          </Column>
        </Grid>
      </Segment>

      <Segment>
        <h3>Stackable on tablets</h3>
        <StepGroup steps={3} ordered stackable>
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
        <h3>Evenly divided</h3>
        <StepGroup steps={3} ordered>
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

        <Divider />
        <StepGroup steps={4} ordered>
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

          <Step>
            <div className='content'>
              <div className='title'>Team</div>
              <div className='description'>team settings</div>
            </div>
          </Step>
        </StepGroup>
      </Segment>

      <Segment>
        <h3>Attached</h3>
        <StepGroup steps={3} ordered attached='top'>
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

        <Segment attached='both'>
          <Image src={paragraph} style={{opacity: '0.5'}} />
        </Segment>

        <StepGroup steps={3} ordered attached='bottom'>
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
        <h3>Sizes</h3>
        <StepGroup size='small'>
          <Step completed>
            <i className='info circle icon' />
            <div className='content'>
              <div className='title'>Preferences</div>
              <div className='description'>default settings</div>
            </div>
          </Step>
          <Step active>
            <i className='info circle icon' />
            <div className='content'>
              <div className='title'>Preferences</div>
              <div className='description'>default settings</div>
            </div>
          </Step>
        </StepGroup>

        <Divider />
        <StepGroup size='large'>
          <Step completed>
            <i className='info circle icon' />
            <div className='content'>
              <div className='title'>Preferences</div>
              <div className='description'>default settings</div>
            </div>
          </Step>
          <Step active>
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
