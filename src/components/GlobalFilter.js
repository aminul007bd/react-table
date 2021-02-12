import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)

  const onValueChange = useAsyncDebounce((value) => {
    setFilter(value || undefined)
  }, 1000)

  return (
    <span>
      Search: {''}
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onValueChange(e.target.value)
        }}
      />
    </span>
  )
}

export default GlobalFilter
