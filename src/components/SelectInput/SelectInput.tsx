import { ChangeEvent } from 'react'
import styles from './SelectInput.module.scss'

interface SelectInputProps {
  name: string
  options: string[] | number[]
  value: string | number
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function SelectInput({ name, options, value, onChange }: SelectInputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>Select {name}</label>
      <select id={name} name={name} onChange={onChange} value={value} className={styles.select}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
