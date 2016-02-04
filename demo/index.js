import React, { Component }  from 'react'
import ReactDOM from 'react-dom'

import 'semantic-ui-css/semantic.css'

import { Container, Message, Grid, Column, Menu } from '../src/index'
import FormDemo from './FormDemo'
import ButtonDemo from './ButtonDemo'
import DividerDemo from './DividerDemo'
import ImageDemo from './ImageDemo'
import LabelDemo from './LabelDemo'
import MessageDemo from './MessageDemo'
import StatisticDemo from './StatisticDemo'
import ItemDemo from './ItemDemo'
import HeaderDemo from './HeaderDemo'
import ListDemo from './ListDemo'
import RailDemo from './RailDemo'
import SegmentDemo from './SegmentDemo'
import FlagDemo from './FlagDemo'
import ContainerDemo from './ContainerDemo'
import GridDemo from './GridDemo'
import InputDemo from './InputDemo'
import StepDemo from './StepDemo'
import TableDemo from './TableDemo'

import './example.css'

const root = document.createElement('div')
root.classList.add('examplePage')
document.body.appendChild(root)

class Page extends Component {

  constructor(props) {
    super(props)
    this.onHashChange = ::this.onHashChange
  }

  state = {
    Page:  undefined
  }

  componentDidMount() {
    this.setPage()
    window.addEventListener('hashchange', this.onHashChange)
  }

  setPage() {
    const pages = {
      forms: FormDemo,
      buttons: ButtonDemo,
      images: ImageDemo,
      divider: DividerDemo,
      labels: LabelDemo,
      messages: MessageDemo,
      statistic: StatisticDemo,
      item: ItemDemo,
      header: HeaderDemo,
      list: ListDemo,
      rail: RailDemo,
      segment: SegmentDemo,
      flag: FlagDemo,
      container: ContainerDemo,
      grid: GridDemo,
      input: InputDemo,
      step: StepDemo,
      table: TableDemo
    }

    let hash = window.location.hash
    let newPage = pages[hash.substring(1)]

    if(newPage) {
      this.setState({ Page: newPage})
    } else {
      this.setState({ Page: undefined })
    }
  }

  onHashChange()  {
    this.setPage()
  }


  render() {
    const { Page } = this.state

    const content = Page ? <Page /> : undefined

    return (
      <Grid page>
        <Column width={3}>
          <Menu vertical>
            <a className='item' href='#forms'>Form </a>
            <a className='item' href='#input'>Input</a>
            <a className='item' href='#buttons'>Button </a>
            <a className='item' href='#images'>Images </a>
            <a className='item' href='#labels'>Label </a>
            <a className='item' href='#messages'>Message </a>
            <a className='item' href='#divider'>Divider </a>
            <a className='item' href='#statistic'>Statistic </a>
            <a className='item' href='#item'>Item </a>
            <a className='item' href='#header'>Header </a>
            <a className='item' href='#list'>List </a>
            <a className='item' href='#rail'>Rail </a>
            <a className='item' href='#segment'>Segment </a>
            <a className='item' href='#flag'>Flag </a>
            <a className='item' href='#container'>Container</a>
            <a className='item' href='#grid'>Grid</a>
            <a className='item' href='#step'>Step</a>
            <a className='item' href='#table'>Table</a>
          </Menu>
        </Column>
        <Column width={13}>
          {content}
        </Column>
      </Grid>
    )
  }
}

ReactDOM.render(<Page />, root)
