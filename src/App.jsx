import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './Props'

function App(props) {
  const [item, setitem] = useState("")

  const handle = () => {
    props.addvalue(item)
    setitem("")
  }

  return (

    <div className='w-full flex justify-center'>
    
    <div className=" flex items-center h-[60px] w-[300px] md:w-[400px] bg-white rounded-lg shadow-md border border-gray-200">
    <input
      type="text"
      value={item}
      placeholder="Type to add..."
      onChange={(e) => setitem(e.target.value)}
      className="flex-grow h-10 px-4 text-gray-700 placeholder-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <button
      onClick={handle}
      className="h-10 px-4 bg-blue-500 text-white rounded-r-lg font-medium hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
    >
      Add
    </button>
  </div>
  </div>
  

  )
}

export default App
