import './App.css'
import ColumnOrder from './components/ColumnOrder'

function App() {
  // const vehicledData = fetch('./data/vehicle_mock_data.json', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json'
  //   }
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))

  // console.log('I am vehicle', vehicledData)
  return (
    <div className="App">
      <h2>React table</h2>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      <ColumnOrder />
    </div>
  )
}

export default App
