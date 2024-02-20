import { ChangeEvent } from 'react'
import styles from './SelectInput.module.scss'
import { Option } from '../../data/FormData.tsx'

interface SelectInputProps {
  name: string
  options: Option[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function SelectInput({ name, options, onChange }: SelectInputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        Select {name}
      </label>
      <select id={name} name={name} onChange={onChange} className={styles.select}>
        {options.map((option) => (
          <option value={option.id} key={option.id} className={styles.option}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
