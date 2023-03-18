import { useState } from 'react'

import './global.css'
import './App.css'
import { TaskList } from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <TaskList />
    </div>
  )
}

export default App
