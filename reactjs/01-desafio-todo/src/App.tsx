import { useState } from 'react'

import { Task } from './components/Task'

import './global.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Task />
      <Task />
    </div>
  )
}

export default App
