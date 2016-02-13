import React from 'react'

import { Segment, Table, Checkbox, Button,
          TableHeader, TableFooter,
          TableCell, TableRow } from '../src/index'

const TableDemo = (props) => {
  const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                          'violet', 'purple', 'pink', 'brown', 'grey', 'black']
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
              <td>jihyun@gmail.com</td>
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
        <h3>Structured table</h3>
        <Table structured celled>
          <thead>
            <tr>
              <th rowSpan='2'>Name</th>
              <th rowSpan='2'>Projects</th>
              <th rowSpan='2'>Members</th>
              <th colSpan='3'>
                Libraries
              </th>
            </tr>
            <tr>
              <th>React</th>
              <th>Hapi</th>
              <th>React Native</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Team A</td>
              <td>Obeya</td>
              <TableCell aligned='right'>3</TableCell>
              <TableCell aligned='center'>
                <i className='large green checkmark icon' />
              </TableCell>
              <td />
              <td />
            </tr>
            <tr>
              <td rowSpan='2'>Team B</td>
              <td>Jangso</td>
              <TableCell aligned='right'>5</TableCell>
              <TableCell aligned='center'>
                <i className='large green checkmark icon' />
              </TableCell>
              <TableCell aligned='center'>
                <i className='large green checkmark icon' />
              </TableCell>
              <TableCell aligned='center'>
                <i className='large green checkmark icon' />
              </TableCell>
            </tr>
            <tr>
              <td>Kawa</td>
              <TableCell aligned='right'>5</TableCell>
              <TableCell aligned='center'>
                <i className='large green checkmark icon' />
              </TableCell>
              <TableCell aligned='center'>
                <i className='large green checkmark icon' />
              </TableCell>
              <td />
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
              <td>jihyun@gmail.com</td>
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
              <td>jihyun@gmail.com</td>
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
              <td>jihyun@gmail.com</td>
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
                <td>jihyun@gmail.com</td>
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
        <h3>Alignment</h3>
        <Table columns={4}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            <TableRow aligned='right'>
              <td>Jun Ji Hyun
                <br /> 전지현
                <br /> 全智賢
              </td>
              <td>jihyun@gmail.com</td>
              <td>30/10/1980</td>
              <td>giannajun.com</td>
            </TableRow>
            <tr>
              <td>Go Joon Hee
                <br />고준희
                <br />高濬熙
              </td>
              <td>eunjoo@naver.com</td>
              <td>31/8/1981</td>
              <TableCell aligned='center'>instantcoop.com</TableCell>
            </tr>
            <tr>
              <td>Yang Min-a
                <br />신민아
                <br />申敏娥
              </td>
              <td>mina@gmail.com</td>
              <td>4/5/1984</td>
              <TableCell aligned='right'>shinmina.co.kr</TableCell>
            </tr>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Vertical alignment</h3>
        <Table columns={4}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            <TableRow aligned='bottom'>
              <td>Jun Ji Hyun
                <br /> 전지현
                <br /> 全智賢
              </td>
              <td>jihyun@gmail.com</td>
              <td>30/10/1980</td>
              <td>giannajun.com</td>
            </TableRow>
            <tr>
              <td>Go Joon Hee
                <br />고준희
                <br />高濬熙
              </td>
              <td>eunjoo@naver.com</td>
              <td>31/8/1981</td>
              <TableCell aligned='bottom'>instantcoop.com</TableCell>
            </tr>
            <tr>
              <td>Yang Min-a
                <br />신민아
                <br />申敏娥
              </td>
              <td>mina@gmail.com</td>
              <td>4/5/1984</td>
              <TableCell aligned='top'>shinmina.co.kr</TableCell>
            </tr>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Column count</h3>
        <Table columns={5}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hangul</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jun Ji Hyun</td>
              <td> 전지현</td>
              <td>jihyun@gmail.com</td>
              <td>30/10/1980</td>
              <td>giannajun.com</td>
            </tr>
            <tr>
              <td>Go Joon Hee</td>
              <td>고준희</td>
              <td>eunjoo@naver.com</td>
              <td>31/8/1981</td>
              <td>instantcoop.com</td>
            </tr>
            <tr>
              <td>Yang Min-a</td>
              <td>신민아</td>
              <td>mina@gmail.com</td>
              <td>4/5/1984</td>
              <td>shinmina.co.kr</td>
            </tr>
          </tbody>
        </Table>
    </Segment>

      <Segment>
        <h3>Colored tables</h3>
        {colors.map( color => {
          return (
          <Table key={color} color={color}>
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
                <td>jihyun@gmail.com</td>
                <td>30/10/1980</td>
              </tr>
              <tr>
                <td>Kim Eun Joo</td>
                <td>eunjoo@naver.com</td>
                <td>31/8/1981</td>
              </tr>
            </tbody>
          </Table>)
        })}
      </Segment>

      <Segment>
        <h3>Inverted tables</h3>
        {colors.map( color => {
          return (
          <Table key={color} color={color} inverted>
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
                <td>jihyun@gmail.com</td>
                <td>30/10/1980</td>
              </tr>
              <tr>
                <td>Kim Eun Joo</td>
                <td>eunjoo@naver.com</td>
                <td>31/8/1981</td>
              </tr>
            </tbody>
          </Table>)
        })}
      </Segment>

      <Segment>
        <h3>Full-width header and footer</h3>
        <Table compact celled definition>
          <TableHeader fullWidth>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </TableHeader>
          <tbody>
            <tr>
              <TableCell collapsing>
                <Checkbox name='checkbox' fitted label=' '/>
              </TableCell>
              <td>Jun Ji Hyun</td>
              <td>jihyun@gmail.com</td>
              <td>30/10/1980</td>
            </tr>
            <tr>
              <TableCell collapsing>
                <Checkbox name='checkbox' fitted label=' '/>
              </TableCell>
              <td>Kim Eun Joo</td>
              <td>eunjoo@naver.com</td>
              <td>31/8/1981</td>
            </tr>
          </tbody>
          <TableFooter fullWidth>
            <tr>
              <th></th>
              <th colSpan='4'>
                <Button>Add</Button>
              </th>
            </tr>
          </TableFooter>
        </Table>
      </Segment>

      <Segment>
        <h3>Compact table</h3>
        <Table compact>
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
              <TableCell>Background check required</TableCell>
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

        <h3>Very compact table</h3>
        <Table veryCompact>
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
              <TableCell>Background check required</TableCell>
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
        <h3>Padded table</h3>
        <Table padded>
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
              <TableCell>Background check required</TableCell>
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

        <h3>Very padded table</h3>
        <Table veryPadded>
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
              <TableCell>Background check required</TableCell>
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
        <h3>Small table</h3>
        <Table columns={5} size='small'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hangul</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jun Ji Hyun</td>
              <td> 전지현</td>
              <td>jihyun@gmail.com</td>
              <td>30/10/1980</td>
              <td>giannajun.com</td>
            </tr>
            <tr>
              <td>Go Joon Hee</td>
              <td>고준희</td>
              <td>eunjoo@naver.com</td>
              <td>31/8/1981</td>
              <td>instantcoop.com</td>
            </tr>
            <tr>
              <td>Yang Min-a</td>
              <td>신민아</td>
              <td>mina@gmail.com</td>
              <td>4/5/1984</td>
              <td>shinmina.co.kr</td>
            </tr>
          </tbody>
        </Table>
      </Segment>

      <Segment>
        <h3>Large table</h3>
        <Table columns={5} size='large'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hangul</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jun Ji Hyun</td>
              <td> 전지현</td>
              <td>jihyun@gmail.com</td>
              <td>30/10/1980</td>
              <td>giannajun.com</td>
            </tr>
            <tr>
              <td>Go Joon Hee</td>
              <td>고준희</td>
              <td>eunjoo@naver.com</td>
              <td>31/8/1981</td>
              <td>instantcoop.com</td>
            </tr>
            <tr>
              <td>Yang Min-a</td>
              <td>신민아</td>
              <td>mina@gmail.com</td>
              <td>4/5/1984</td>
              <td>shinmina.co.kr</td>
            </tr>
          </tbody>
        </Table>
      </Segment>
    </div>
  )
}

export default TableDemo
