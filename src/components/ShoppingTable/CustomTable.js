import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    border:1px solid #E0E0E0;
    width:750px;
`

export const TableHead = styled.thead`
   border-bottom: 1px solid #E0E0E0;
`

export const TableRow = styled.tr`
    border-bottom: 1px solid #E0E0E0;
    &:last-of-type{
        border-bottom:none;
    }
`

export const TableHeadCell = styled.th`
    padding:10px;
    font-size:12px;
    font-weight:400;
    text-align:left;
    background-color:#F8F8F8;
    border-right: 1px solid #E0E0E0;
    &:last-of-type{
        border-right:none
    }
`

export const TableBodyCell = styled.td`
    padding:10px;
    cursor:pointer;
`

export const TableBody = styled.tbody`
    padding:0;
`