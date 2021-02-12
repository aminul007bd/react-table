export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    disableFilters: true
  },
  {
    Header: 'Make',
    Footer: 'Make',
    accessor: 'make'
  },
  {
    Header: 'Model',
    Footer: 'Model',
    accessor: 'model'
  },
  {
    Header: 'Year',
    Footer: 'Year',
    accessor: 'model_year'
  },
  {
    Header: 'Vin',
    Footer: 'Vin',
    accessor: 'vin'
  },
  {
    Header: 'Lisence Plate',
    Footer: 'Lisence Plate',
    accessor: 'licensePlate'
  },
  {
    Header: 'Trip Id',
    Footer: 'Trip Id',
    accessor: 'tripId'
  },
  {
    Header: 'DeviceId',
    Footer: 'DeviceId',
    accessor: 'deviceId'
  },
  {
    Header: 'Created',
    Footer: 'Created',
    accessor: 'created',
    disableFilters: true
    // Cell: (props) => {
    //   return format(new Date(props.value.toString()), 'dd/MM/yyyy')
    // }
  },
  {
    Header: 'Updated',
    Footer: 'Updated',
    accessor: 'updated',
    disableFilters: true
    // Cell: ({ value }) => {
    //   return format(new Date(value, 'dd/mm/yyyy'))
    // }
  }
]
