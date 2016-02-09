import React from 'react'

import { Segment, Table, TableCell, TableRow } from '../src/index'

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
              <td>Jun Ji Hyun</td>
              <td>jihyn@gmail.com</td>
              <td>30/10/1980</td>
            </tr>
            <tr>
              <td>Kim Eun Joo</td>
              <td>eunjoo@naver.com</td>
              <td>31/8/1981</td>
            </tr>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Positive/Negative rows and cells</h3>
        <Table celled>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <TableRow positive>
              <td>Yewon</td>
              <td>Hired</td>
              <td>None</td>
            </TableRow>
            <TableRow>
              <td>Min Jung</td>
              <td>Waiting</td>
              <TableCell negative>Background check required</TableCell>
            </TableRow>
            <TableRow>
              <td>Joon Hee</td>
              <TableCell>Approved</TableCell>
              <TableCell positive>Requires call</TableCell>
            </TableRow>
            <TableRow negative>
              <td>In Young</td>
              <td>Rejected</td>
              <td>Not qualified</td>
            </TableRow>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Error rows and cells</h3>
        <Table celled>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>Min Jung</td>
              <td>Waiting</td>
              <TableCell error>Didn't show up</TableCell>
            </TableRow>
            <TableRow>
              <td>Joon Hee</td>
              <TableCell>Approved</TableCell>
              <TableCell>Requires call</TableCell>
            </TableRow>
            <TableRow error>
              <td>In Young</td>
              <td>Can't find her file</td>
              <td>None</td>
            </TableRow>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Warning rows and cells</h3>
        <Table celled>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>Yewon</td>
              <td>Hired</td>
              <td>None</td>
            </TableRow>
            <TableRow>
              <td>Min Jung</td>
              <td>Waiting</td>
              <TableCell>None</TableCell>
            </TableRow>
            <TableRow>
              <td>Joon Hee</td>
              <TableCell>Approved</TableCell>
              <TableCell warning><i className='attention icon' />Requires call</TableCell>
            </TableRow>
            <TableRow warning>
              <td>In Young</td>
              <td>Waiting</td>
              <td>Requires references</td>
            </TableRow>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Active rows and cells</h3>
        <Table celled>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <TableRow active>
              <td>Yewon</td>
              <td>Hired</td>
              <td>None</td>
            </TableRow>
            <TableRow>
              <td>Min Jung</td>
              <td>Waiting</td>
              <TableCell>Background check required</TableCell>
            </TableRow>
            <TableRow>
              <td>Joon Hee</td>
              <TableCell>Approved</TableCell>
              <TableCell active>Requires call</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Disabled rows and cells</h3>
        <Table celled>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <TableRow disabled>
              <td>Yewon</td>
              <td>Hired</td>
              <td>None</td>
            </TableRow>
            <TableRow>
              <td>Min Jung</td>
              <td>Waiting</td>
              <TableCell>Background check required</TableCell>
            </TableRow>
            <TableRow>
              <td>Joon Hee</td>
              <TableCell>Approved</TableCell>
              <TableCell disabled>Requires call</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Single line tables</h3>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jun Ji Hyun</td>
              <td>jihyn@gmail.com</td>
              <td>30/10/1980</td>
            </tr>
            <tr>
              <td>Kim Eun Joo</td>
              <td>eunjoo@naver.com</td>
              <td>31/8/1981</td>
            </tr>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Fixed table</h3>
        <Table fixed>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Bio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jun Ji Hyun</td>
              <td>jihyn@gmail.com</td>
              <td>
                Jun Ji-hyun, also known as Gianna Jun, is a South Korean actress. She is best known for her role as "The Girl" in the romantic comedy My Sassy Girl, one of the highest-grossing Korean comedies of all time. 
              </td>
            </tr>
            <tr>
              <td>Go Joon Hee</td>
              <td>eunjoo@naver.com</td>
              <td>
                Go Joon-hee (born Kim Eun Joo on August 31, 1985) is a South Korean actress. Kim Eun-joo made her entertainment debut as a school uniform model in 2001, then launched an acting career in 2003.
              </td>
            </tr>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Selectable Row</h3>
        <Table selectable celled>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <TableRow positive>
              <td>Yewon</td>
              <td>Hired</td>
              <td>None</td>
            </TableRow>
            <TableRow>
              <td>Min Jung</td>
              <TableCell warning>Waiting</TableCell>
              <TableCell negative>Background check required</TableCell>
            </TableRow>
            <TableRow>
              <td>Joon Hee</td>
              <TableCell>Approved</TableCell>
              <TableCell positive>Requires call</TableCell>
            </TableRow>
            <TableRow negative>
              <td>In Young</td>
              <td>Rejected</td>
              <td>Not qualified</td>
            </TableRow>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Striped tables</h3>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jun Ji Hyun</td>
              <td>jihyn@gmail.com</td>
              <td>30/10/1980</td>
            </tr>
            <tr>
              <td>Kim Eun Joo</td>
              <td>eunjoo@naver.com</td>
              <td>31/8/1981</td>
            </tr>
            <tr>
              <td>Han Jihye</td>
              <td>jihye@gmail.com</td>
              <td>6/29/1984</td>
            </tr>
          </tbody>
        </Table>
      </Segment>

        <Segment>
          <h3>Basic tables</h3>
          <Table basic>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jun Ji Hyun</td>
                <td>jihyn@gmail.com</td>
                <td>30/10/1980</td>
              </tr>
              <tr>
                <td>Kim Eun Joo</td>
                <td>eunjoo@naver.com</td>
                <td>31/8/1981</td>
              </tr>
              <tr>
                <td>Han Jihye</td>
                <td>jihye@gmail.com</td>
                <td>6/29/1984</td>
              </tr>
            </tbody>
          </Table>
      </Segment>
    </div>
  )
}

export default TableDemo
