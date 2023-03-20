import { Task } from "./Task";
import clipboardSvg from "./../assets/Clipboard.svg"

import styles from './TaskList.module.css';

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <div className={styles.taskListHeader}>
        <p>Tarefas criadas <em>5</em></p>
        <p>Concluídas <em>2 de 5</em></p>
      </div>

      <div className={styles.taskListContent}>
        <ul>
          <Task />
          <Task />
        </ul>

        <div className={styles.emptyContent}>
          <img src={clipboardSvg} />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>
    </div>
  )
}