import styles from './NumberInput.module.scss'

import { ChangeEvent } from 'react'

interface NumberInputProps {
  min: number
  max: number
  value: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function NumberInput({ min, max, value, onChange }: NumberInputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="questionsAmount">Number of questions</label>
      <input
        className={styles.input}
        type="number"
        min={min}
        max={max}
        value={value}
        required
        name="questionsAmount"
        onChange={onChange}
      />
    </div>
  )
}
