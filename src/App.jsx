import './App.css'
import { useState } from 'react'
import LeftSidebar from './left-sidebar/left-sidebar'
import Quicksort from './sorting-algorithms/Quicksort/Quicksort'
import Bubblesort from './sorting-algorithms/Bubblesort/Bubblesort'
import BinarySearch from './search-algorithms/BinarySearch/BinarySearch'
import SimpleSearch from './search-algorithms/SimpleSearch/SimpleSearch'

function App() {
  const [ currentPage, setCurrentPage ] = useState("Quicksort")
  return (
    <>
      <div className='w-screen h-screen flex flex-row bg-amber-glow/20 overflow-hidden'>
        <LeftSidebar setCurrentPage={setCurrentPage}/>

        <SwitchPage currentPage={currentPage} />
      </div>
    </>
  )
}

const SwitchPage = ({ currentPage }) => {
  switch (currentPage) {
    case "Quicksort":
      return <Quicksort/>
    case "Bubblesort":
      return <Bubblesort/>
    case "SimpleSearch":
      return <SimpleSearch/>
    case "BinarySearch":
      return <BinarySearch/>
    default:
      return <Quicksort/>
  }
}

export default App
