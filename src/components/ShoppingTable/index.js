
import {useTable} from 'react-table';
import {useSetRecoilState} from 'recoil'

import {Table,TableHeadCell,TableBodyCell,TableBody,TableRow,TableHead} from './CustomTable'
import {selectedRow} from '../../recoil/atom';


/*
  ShoppingTable
  Custom Check-box Table to display relevant data
*/
const ShoppingTable= ({ columns, data }) => {
    const {
      getTableProps, 
      getTableBodyProps, 
      headerGroups,
      rows,
      prepareRow, 
    } = useTable({
      columns,
      data,
    })

    const setSelectedRow = useSetRecoilState(selectedRow)


  
  // Render the UI for your table
    return (
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => {
                return (
                <TableHeadCell {...column.getHeaderProps()} style={{width:column.width}}>{column.render('Header')}</TableHeadCell>
              )})}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()} onClick={()=>setSelectedRow(row?.original)}>
                {row.cells.map(cell => {
                  return <TableBodyCell  {...cell.getCellProps()}>{cell.render('Cell')}</TableBodyCell>
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }

export default ShoppingTable;