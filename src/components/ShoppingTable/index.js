
import {useTable} from 'react-table';
import {useSetRecoilState} from 'recoil'
import {Table, TableHead, TableBody, TableCell, TableRow} from '@mui/material';

import {selectedRow} from '../../recoil/atom';

const ShoppingTable= ({ columns, data }) => {
    // Use the state and functions returned from useTable to build your UI
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
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()} style={{textAlign:'left'}}>{column.render('Header')}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()} onClick={()=>setSelectedRow(row?.original)}>
                {row.cells.map(cell => {
                  return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }

export default ShoppingTable;