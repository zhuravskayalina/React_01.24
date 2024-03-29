import styles from './NumberInput.module.scss'

import { ChangeEvent } from 'react'

interface NumberInputProps {
  min: number
  max: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function NumberInput({ min, max, onChange }: NumberInputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="questionsAmount" className={styles.label}>
        Number of questions
      </label>
      <input
        className={styles.input}
        type="number"
        min={min}
        max={max}
        required
        placeholder={min.toString()}
        name="questionsAmount"
        id="questionsAmount"
        onChange={onChange}
      />
    </div>
  )
}
