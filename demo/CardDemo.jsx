import React from 'react'

import { Segment, Card, CardGroup, Meta, Image, Grid, Column,
        Content, ContentDescription, ContentHeader } from '../src/index'

import ParagraphExample from './ParagraphExample'

import bomi from './bomi_square.jpg'
import bomi2 from './bomi.jpg'
import image from './image.png'

const CardDemo = (props) => {
  return (
    <div>
      <Segment>
        <Card>
          <div className='image'>
            <img src={bomi} />
          </div>
          <Content>
            <ContentHeader href='#'>Bomi</ContentHeader>
            <Meta>
              <span className='date'>Born in 2015</span>
            </Meta>
            <ContentDescription>
              Bomi is a bengal cat.
            </ContentDescription>
          </Content>
          <Content extra>
            <i className='heart icon'/>
            323 Likes
          </Content>
        </Card>

        <Card>
          <Content>
            <Meta floated='right'>
              14h
            </Meta>
            <Image src={bomi2} avatar /> Bomi
          </Content>
          <div className='image'>
            <img src={bomi} />
          </div>

          <Content>
            <span className='right floated'>
              <i className='heart outline like icon' />
              317 likes
            </span>
            <i className='comment icon'/>
            39 comments
          </Content>
          <Content extra>
            <div className='ui large transparent left icon input'>
              <i className='heart outline icon' />
              <input type='text' placeholder='Add Comment...' />
            </div>
          </Content>
        </Card>
      </Segment>

      <Segment>
        <h3>Grouped cards</h3>
        <CardGroup>
          <Card>
            <div className='image'>
              <img src={bomi} />
            </div>
            <Content>
              <ContentHeader href='#'>Bomi</ContentHeader>
              <Meta>
                <span className='date'>Born in 2015</span>
              </Meta>
              <ContentDescription>
                Bomi is a bengal cat.
              </ContentDescription>
            </Content>
            <Content extra>
              <i className='heart icon'/>
              323 Likes
            </Content>
          </Card>
          <Card>
            <div className='image'>
              <img src={bomi} />
            </div>
            <Content>
              <ContentHeader href='#'>Bomi</ContentHeader>
              <Meta>
                <span className='date'>Born in 2015</span>
              </Meta>
              <ContentDescription>
                Bomi is a bengal cat.
              </ContentDescription>
            </Content>
            <Content extra>
              <i className='heart icon'/>
              323 Likes
            </Content>
          </Card>
        </CardGroup>
      </Segment>

      <Segment>
        <h3>Fluid Card</h3>

        <Grid columns={3}>
          <Column>
            <Card fluid>
              <Image src={bomi} wrapper/>
              <Content>
                <ContentHeader>
                  Bomi
                </ContentHeader>
              </Content>
            </Card>
          </Column>
          <Column>
            <Card fluid>
              <Image src={bomi} wrapper/>
              <Content>
                <ContentHeader>
                  Bomi
                </ContentHeader>
              </Content>
            </Card>
          </Column>
          <Column>
            <Card fluid>
              <Image src={bomi} wrapper/>
              <Content>
                <ContentHeader>
                  Bomi
                </ContentHeader>
              </Content>
            </Card>
          </Column>
        </Grid>
      </Segment>

      <Segment>
        <h3>Centered card</h3>
         <Card centered>
          <Image src={bomi} wrapper/>
          <Content>
            <ContentHeader>
              Bomi
            </ContentHeader>
          </Content>
        </Card>
      </Segment>

      <Segment>
        <h3>Link card</h3>

        <Card href='#'>
          <Content>
            <ContentHeader>
              Cute Bomi
            </ContentHeader>
            <Meta>
              <span>
                Bengal cat
              </span>
            </Meta>
            <ContentDescription>
              <ParagraphExample />
            </ContentDescription>
          </Content>
          <Content extra>
            <div className='right floated'>
              <Image avatar src={bomi} />
                Bomi
            </div>
          </Content>
        </Card>
      </Segment>

      <Segment>
        <h3>Column count</h3>
        <CardGroup columns={4}>
          {[1,2,3,4,5,6,7,8].map( (e) => {
            return (
              <Card key={e}>
                <Image src={image} wrapper/>
                <Content>
                  <ContentHeader>
                    Card
                  </ContentHeader>
                </Content>
              </Card>
              )
          })}
        </CardGroup>
      </Segment>
    </div>
  )
}

export default CardDemo
