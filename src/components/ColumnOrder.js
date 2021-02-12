import React, { useMemo } from 'react'
import { useColumnOrder, useTable } from 'react-table'
import MOCK_DATA from '../data/vehicle_mock_data.json'
import Checkbox from './Checkbox'
import { COLUMNS } from './TableColumn'

const ColumnOrder = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const tableInstance = useTable({ columns, data }, useColumnOrder)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
    setColumnOrder
  } = tableInstance

  const changeOrder = () => {
    setColumnOrder([
      'id',
      'make',
      'model',
      'tripId',
      'deviceId',
      'vin',
      'lisencePlate'
    ])
  }
  return (
    <>
      <div>
        <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
      </div>
      {allColumns.map((column) => (
        <div key={column.id}>
          <label>
            <input type="checkbox" {...column.getToggleHiddenProps()} />
            {column.Header}
          </label>
        </div>
      ))}
      <button onClick={changeOrder}>Change Column Order</button>
      <table className="customers" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps}>{column.render('Header')}</th>
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

export default ColumnOrder
