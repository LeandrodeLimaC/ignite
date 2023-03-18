import { TbTrash } from "react-icons/tb";
import { Radio } from "./Radio";

import styles from './Task.module.css'

export function Task() {
  const isDone = true

  const descptionWithLineThroughOrNormal = isDone ? styles.taskDescriptionWithLineThrough : styles.taskDescription
  const taskCompleted = isDone ? styles.taskBorder : ''

  return (
    <div className={`${styles.task} ${taskCompleted}`}>
      <div className={styles.taskBox}>
        <div>
          <Radio isChecked={isDone} />
        </div>
        <p className={descptionWithLineThroughOrNormal}>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      </div>
      <button>
        <TbTrash size={18} />
      </button>
    </div>
  )
}