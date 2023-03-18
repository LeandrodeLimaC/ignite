import { TbCircleCheckFilled, TbCircle, TbTrash } from "react-icons/tb";

import styles from './Radio.module.css'

interface RadioProps {
  isChecked: boolean
}

export function Radio({ isChecked }: RadioProps) {
  return (
    isChecked ? (
      <TbCircleCheckFilled className={styles.radioChecked} />
    ) : (
      <TbCircle className={styles.radio} />
    )
  )
}
