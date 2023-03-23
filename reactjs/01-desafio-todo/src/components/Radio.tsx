import { TbCircleCheckFilled, TbCircle, TbTrash } from "react-icons/tb";

import styles from './Radio.module.css'

interface RadioProps {
  isChecked: boolean
  onClick: () => void
}

export function Radio({ isChecked, onClick }: RadioProps) {
  const RadioIcon = isChecked ? TbCircleCheckFilled : TbCircle
  const radioStylesWhenChecked = isChecked ? styles.checked : ''

  return (
    <RadioIcon
      className={`${styles.radio} ${radioStylesWhenChecked}`}
      onClick={onClick}
    />
  )
}
