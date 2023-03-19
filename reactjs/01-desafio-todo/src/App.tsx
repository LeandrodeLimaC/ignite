import { useState } from 'react';
import { TbCirclePlus } from "react-icons/tb";

import { TaskList } from './components/TaskList';

import Logo from './assets/Logo.svg';

import './global.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="heroBanner">
        <img src={Logo} alt="Logotipo do Ignite" />
      </div>
      <form className="newTaskForm">
        <input type="text" />
        <button type="submit">Criar <TbCirclePlus size={18} /></button>
      </form>
      <TaskList />
    </div>
  )
}

export default App
