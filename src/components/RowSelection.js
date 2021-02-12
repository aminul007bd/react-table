import React, { useMemo } from 'react'
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useTable
} from 'react-table'
import MOCK_DATA from '../data/vehicle_mock_data.json'
import Checkbox from './Checkbox'
import ColumnFilter from './ColumnFilter'
import GlobalFilter from './GlobalFilter'
import { COLUMNS } from './TableColumn'

const RowSelection = () => {
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
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    selectedFlatRows,
    state,
    setGlobalFilter
  } = useTable(
    { columns, data, defaultColumn, initialState: { pageIndex: 2 } },
    useGlobalFilter,
    useFilters,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
          },
          ...columns
        ]
      })
    }
  )

  const { globalFilter, pageIndex, pageSize } = state
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
          {page.map((row) => {
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
      </table>
      <div>
        <span>
          <strong>{`Page ${pageIndex + 1} of ${pageOptions.length} | `}</strong>
        </span>
        <span>
          Go to Page: {''}{' '}
          <input
            type="number"
            value={pageIndex + 1}
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {` << `}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Pervious
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {` >> `}
        </button>
      </div>
      <pre>
        <code>
          {JSON.stringify(
            { selectedFlatRows: selectedFlatRows.map((page) => page.original) },
            null,
            2
          )}
        </code>
      </pre>
    </>
  )
}

export default RowSelection
