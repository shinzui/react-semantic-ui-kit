import React, { Component } from 'react'
import { ItemGroup, Image, Item, Segment, Extra, Label,
         Content, ContentHeader, Meta, ContentDescription } from '../src/index'

import ParagraphExample from './ParagraphExample'

import bomi from './bomi.jpg'
import image from './image.png'

export default class ItemDemo extends Component {

  render() {
    return (
      <div>
        <Segment>
          <ItemGroup>
            <Item>
              <div className='image'>
                <img src={bomi} width='400px' />
              </div>
            </Item>
            <Item>
              <div className='image'>
                <img src={bomi} width='400px' />
              </div>
            </Item>
            <Item>
              <div className='image'>
                <img src={bomi} width='400px' />
              </div>
            </Item>
          </ItemGroup>
        </Segment>

        <Segment>
          <h3>Link item</h3>
          <ItemGroup link>
            <Item>
              <Image wrapper size='tiny' src={bomi}/>
              <div className='content'>
                <div className='header'>
                  Bomi
                </div>
                <div className='description'>
                  Some description
                </div>
              </div>
            </Item>
            <Item>
              <Image wrapper size='tiny' src={bomi}/>
              <div className='content'>
                <div className='header'>
                  Bomi
                </div>
                <div className='description'>
                  Some description
                </div>
              </div>
            </Item>
          </ItemGroup>
        </Segment>

        <Segment>
          <h3>Divided item</h3>
          <ItemGroup divided>
            <Item>
              <Image src={image} wrapper dependent/>
              <Content>
                <ContentHeader>Sulawesi, Toarco Peaberry</ContentHeader>
                <Meta>Indonesia</Meta>
                <ContentDescription>
                  <ParagraphExample />
                </ContentDescription>
                <Extra>
                  <Label>Limited</Label>
                </Extra>
              </Content>
            </Item>
            <Item>
              <Image src={image} wrapper dependent/>
              <Content>
                <ContentHeader>Yetatebe, Shakisso</ContentHeader>
                <Meta>Ethiopia</Meta>
                <ContentDescription>
                  <ParagraphExample />
                </ContentDescription>
                <Extra>
                  <Label>Limited</Label>
                </Extra>
              </Content>

            </Item>

          </ItemGroup>
        </Segment>
      </div>
    )
  }
}
