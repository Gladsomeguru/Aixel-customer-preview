import { useState } from 'react'
import './App.css'
import Viewport from './Viewport'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-900 h-full min-h-[100vh]'>
        <Viewport />
      </div>
    </>
  )
}

export default App
