import './App.css'
import { useState } from 'react'
import LeftSidebar from './left-sidebar/left-sidebar'
import Quicksort from './sorting-algorithms/Quicksort/Quicksort'
import Bubblesort from './sorting-algorithms/Bubblesort/Bubblesort'
import BinarySearch from './search-algorithms/BinarySearch/BinarySearch'
import SimpleSearch from './search-algorithms/SimpleSearch/SimpleSearch'
import Bogosort from './sorting-algorithms/Bogosort/Bogosort'
import AuthPage from './auth/auth-page'

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
    case "Bogosort":
      return <Bogosort/>
    case "Sign In":
      return <AuthPage/>
    default:
      return <Quicksort/>
  }
}

export default App
