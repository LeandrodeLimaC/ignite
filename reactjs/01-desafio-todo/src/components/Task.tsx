import { TbTrash } from "react-icons/tb";

import { ITask } from "../App";
import { Radio } from "./Radio";

import styles from './Task.module.css'

export interface TaskProps extends ITask {
  onToggleComplete: (id: ITask['id']) => void
  onDelete: (id: ITask['id']) => void
}

export function Task({
  id,
  completed,
  description,
  onToggleComplete,
  onDelete
}: TaskProps) {
  const taskStylesWhenCompleted = completed ? styles.taskCompleted : ''

  function toggleTaskComplete() {
    onToggleComplete(id)
  }

  function handleTaskDelete() {
    onDelete(id)
  }

  return (
    <li className={`${styles.task} ${taskStylesWhenCompleted}`}>
      <div className={styles.taskBox}>
        <div>
          <Radio isChecked={completed} onClick={toggleTaskComplete} />
        </div>
        <p className={`${styles.taskDescription}`}>
          {description}
        </p>
      </div>
      <button onClick={handleTaskDelete}>
        <TbTrash size={18} />
      </button>
    </li>
  )
}