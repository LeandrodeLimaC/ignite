import { useState } from 'react';
import { TbCirclePlus } from "react-icons/tb";

import { TaskList } from './components/TaskList';

import Logo from './assets/Logo.svg';

import './global.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="heroBanner">
        <img src={Logo} alt="Logotipo do Ignite" />
      </div>
      <main>
        <form className="newTaskForm">
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">Criar <TbCirclePlus size={18} /></button>
        </form>
        <TaskList />
      </main>
    </div>
  )
}

export default App
