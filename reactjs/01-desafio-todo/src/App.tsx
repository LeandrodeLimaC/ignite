import { ChangeEvent, FormEvent, InvalidEvent, useId, useState } from 'react';
import { TbCirclePlus } from "react-icons/tb";

import { TaskList } from './components/TaskList';

import Logo from './assets/Logo.svg';

import './global.css';
import './App.css';
import { Task } from './components/Task';

export interface ITask {
  id: number;
  completed: boolean;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTaskDescription, setNewTaskDescription] = useState<ITask['description']>('')

  function deleteTask(id: ITask['id']) {
    const taskListWithoutDeletedOne = tasks.filter((task) => task.id !== id)

    setTasks(taskListWithoutDeletedOne)
  }

  function toggleTaskStatus(id: ITask['id']) {
    const taskListWithNewCompletedOne = tasks.map((task) => {
      if (task.id === id)
        task.completed = !task.completed

      return task
    })

    setTasks(taskListWithNewCompletedOne)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const id = Date.now()
    const newTask: ITask = {
      id,
      description: newTaskDescription,
      completed: false,
    }

    setNewTaskDescription('')
    setTasks(tasks => [...tasks, newTask])
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskDescription(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Você precisa dar uma descrição para a tarefa!')
  }

  function renderTaskItemComponentWithEvents(task: ITask) {
    return (
      <Task
        {...task}
        onToggleComplete={toggleTaskStatus}
        onDelete={deleteTask}
      />
    )
  }

  return (
    <div className="container">
      <div className="banner">
        <img src={Logo} alt="Logotipo do Ignite" />
      </div>
      <main>
        <form className="newTaskForm" onSubmit={handleCreateNewTask}>
          <input
            required
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            value={newTaskDescription}
            onInvalid={handleNewTaskInvalid}
          />
          <button type="submit">
            Criar <TbCirclePlus size={18} />
          </button>
        </form>
        <TaskList tasks={tasks} taskComponent={renderTaskItemComponentWithEvents} />
      </main>
    </div>
  )
}

export default App
