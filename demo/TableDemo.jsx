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
    </div>
  )
}

export default TableDemo
