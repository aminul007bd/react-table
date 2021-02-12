import React, { useMemo } from 'react'
import { useFilters, useGlobalFilter, useTable } from 'react-table'
import MOCK_DATA from '../data/vehicle_mock_data.json'
import ColumnFilter from './ColumnFilter'
import GlobalFilter from './GlobalFilter'
import { COLUMNS } from './TableColumn'

const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({ columns, data, defaultColumn }, useGlobalFilter, useFilters)

  const { globalFilter } = state
  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

      <table className="customers" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps}>{column.render('Footer')}</th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  )
}

export default FilteringTable
