import React, { Component }  from 'react'
import ReactDOM from 'react-dom'

import 'semantic-ui-css/semantic.css'

import { Container, Message, Grid, Column, Menu, MenuItem } from '../src/index'
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
import CardDemo from './CardDemo'
import CheckboxDemo from './CheckboxDemo'
import MenuDemo from './MenuDemo'
import FeedDemo from './FeedDemo'

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
      table: TableDemo,
      card: CardDemo,
      checkbox: CheckboxDemo,
      menu: MenuDemo,
      feed: FeedDemo
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
            <MenuItem href='#forms'>Form </MenuItem>
            <MenuItem href='#input'>Input</MenuItem>
            <MenuItem href='#buttons'>Button </MenuItem>
            <MenuItem href='#images'>Images </MenuItem>
            <MenuItem href='#labels'>Label </MenuItem>
            <MenuItem href='#messages'>Message </MenuItem>
            <MenuItem href='#divider'>Divider </MenuItem>
            <MenuItem href='#statistic'>Statistic </MenuItem>
            <MenuItem href='#item'>Item </MenuItem>
            <MenuItem href='#header'>Header </MenuItem>
            <MenuItem href='#list'>List </MenuItem>
            <MenuItem href='#rail'>Rail </MenuItem>
            <MenuItem href='#segment'>Segment </MenuItem>
            <MenuItem href='#flag'>Flag </MenuItem>
            <MenuItem href='#container'>Container</MenuItem>
            <MenuItem href='#grid'>Grid</MenuItem>
            <MenuItem href='#step'>Step</MenuItem>
            <MenuItem href='#table'>Table</MenuItem>
            <MenuItem href='#card'>Card</MenuItem>
            <MenuItem href='#checkbox'>Checkbox</MenuItem>
            <MenuItem href='#menu'>Menu</MenuItem>
            <MenuItem href='#feed'>Feed</MenuItem>
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
