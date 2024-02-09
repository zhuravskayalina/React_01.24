import styles from './Form.module.scss'

import { NumberInput } from '../NumberInput/NumberInput.tsx'
import { SelectInput } from '../SelectInput/SelectInput.tsx'
import { ChangeEvent, useState } from 'react'
import {
  categories,
  difficultyOptions,
  MAX_QUESTIONS_AMOUNT,
  MIN_QUESTIONS_AMOUNT,
  timeOptions,
  typeOptions
} from '../../data/FormData.tsx'
import clsx from 'clsx'

const Form = () => {
  const [questionsAmount, setQuestionsAmount] = useState(MIN_QUESTIONS_AMOUNT)
  const [category, setCategory] = useState(categories[0])
  const [difficulty, setDifficulty] = useState(difficultyOptions[0])
  const [type, setType] = useState(typeOptions[0])
  const [time, setTime] = useState(timeOptions[0])

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestionsAmount(Number(event.target.value))
  }

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value)
  }

  const handleDifficultyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(event.target.value)
  }

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value)
  }

  const handleTimeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTime(Number(event.target.value))
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <NumberInput
          value={questionsAmount}
          min={MIN_QUESTIONS_AMOUNT}
          max={MAX_QUESTIONS_AMOUNT}
          onChange={handleNumberChange}
        />
        <SelectInput
          name="category"
          options={categories}
          value={category}
          onChange={handleCategoryChange}
        />
        <SelectInput
          name="difficulty"
          options={difficultyOptions}
          value={difficulty}
          onChange={handleDifficultyChange}
        />
        <SelectInput name="type" options={typeOptions} value={type} onChange={handleTypeChange} />
        <SelectInput name="time" options={timeOptions} value={time} onChange={handleTimeChange} />
        <div className={styles.buttons}>
          <button className={clsx(styles.button, styles.button__start)}>Start quiz</button>
          <button className={clsx(styles.button, styles.button__results)}>See my statistics</button>
        </div>
      </form>
    </div>
  )
}

export default Form
