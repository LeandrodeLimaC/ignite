import { Task } from "./Task";

import styles from './TaskList.module.css';

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <div className={styles.taskListHeader}>
        <p>Tarefas criadas <em>5</em></p>
        <p>Concluídas <em>2 de 5</em></p>
      </div>

      <div>
        <Task />
        <Task />
      </div>
    </div>
  )
}