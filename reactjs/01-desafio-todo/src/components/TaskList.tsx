import clipboardSvg from "./../assets/Clipboard.svg"

import styles from './TaskList.module.css';
import { ITask } from "../App";

interface TaskListProps {
  tasks: ITask[]
  taskComponent: (props: ITask) => React.ReactElement
}

export function TaskList({ tasks, taskComponent: TaskComponent }: TaskListProps) {
  const totalOfCompletedTasks = tasks.reduce((acc, curr) => curr.completed ? ++acc : acc, 0)
  const totalOfTasks = tasks.length

  function renderEmptyState() {
    return (
      <div className={styles.emptyContent}>
        <img src={clipboardSvg} />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong><br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    )
  }

  function renderTasks() {
    return (
      <ul>
        {tasks.map((task) => <TaskComponent key={task.id} {...task} />)}
      </ul>
    )
  }

  const tasksOrEmptyState = !!tasks.length ? renderTasks() : renderEmptyState()

  return (
    <div className={styles.taskList}>
      <div className={styles.taskListHeader}>
        <p>Tarefas criadas <em>{totalOfTasks}</em></p>
        <p>Concluídas <em>{totalOfCompletedTasks} de {totalOfTasks}</em></p>
      </div>

      <div className={styles.taskListContent}>
        {tasksOrEmptyState}
      </div>
    </div>
  )
}