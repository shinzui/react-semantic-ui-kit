import React from 'react'

import { Segment, Table } from '../src/index'

const TableDemo = (props) => {
  return (
    <div>
      <Segment>
        <Table celled>
          <thead>
            <tr>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Definition table</h3>
        <Table definition>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jun Ji-hyun</td>
              <td>jihyn@gmail.com</td>
              <td>30/10/1980</td>
            </tr>
            <tr>
              <td>Kim Eun-joo</td>
              <td>eunjoo@naver.com</td>
              <td>31/8/1981</td>
            </tr>
          </tbody>
        </Table>
      </Segment>
    </div>
  )
}

export default TableDemo
