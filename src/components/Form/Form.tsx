import styles from './Form.module.scss'

import { NumberInput } from '../NumberInput/NumberInput.tsx'
import { SelectInput } from '../SelectInput/SelectInput.tsx'
import { ChangeEvent, useMemo } from 'react'
import {
  ANY_CATEGORY,
  ANY_ID,
  difficultyOptions,
  MAX_QUESTIONS_AMOUNT,
  MIN_QUESTIONS_AMOUNT,
  timeOptions,
  typeOptions
} from '../../data/FormData.tsx'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { URL } from '../../router/types.ts'
import { useGetCategoriesQuery } from '../../redux/api/apiSlice.ts'
import { useAppDispatch } from '../../redux/hooks/hooks.ts'
import {
  setCategory,
  setDifficulty,
  setQuestionsAmount,
  setTime,
  setType
} from '../../redux/slices/configurationSlice.ts'
import { GameConfiguration } from '../../types/types.ts'

const Form = () => {
  const {
    data: categories = { trivia_categories: [] },
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCategoriesQuery({})

  const categoriesWithAny = useMemo(() => {
    const copy = [...categories.trivia_categories]
    copy.unshift({
      id: ANY_ID,
      name: ANY_CATEGORY
    })
    return copy
  }, [categories])

  const dispatch = useAppDispatch()

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    dispatch(setQuestionsAmount(value))
  }

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = {
      id: event.target.value,
      name: event.target.options[event.target.selectedIndex].text
    }
    dispatch(setCategory(value))
  }

  const handleDifficultyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setDifficulty(event.target.value as Pick<GameConfiguration, 'difficulty'>['difficulty'])
    )
  }

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setType(event.target.value as Pick<GameConfiguration, 'type'>['type']))
  }

  const handleTimeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value)
    dispatch(setTime(value))
  }

  let formContent

  if (isLoading) {
    formContent = <p>Loading</p>
  } else if (isSuccess) {
    formContent = (
      <SelectInput name="category" options={categoriesWithAny} onChange={handleCategoryChange} />
    )
  } else if (isError) {
    formContent = <div>{error.toString()}</div>
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <NumberInput
          min={MIN_QUESTIONS_AMOUNT}
          max={MAX_QUESTIONS_AMOUNT}
          onChange={handleNumberChange}
        />
        {formContent}
        <SelectInput
          name="difficulty"
          options={difficultyOptions}
          onChange={handleDifficultyChange}
        />
        <SelectInput name="type" options={typeOptions} onChange={handleTypeChange} />
        <SelectInput name="time" options={timeOptions} onChange={handleTimeChange} />
        <div className={styles.buttons}>
          <Link to={URL.Game} className={clsx(styles.button, styles.button__start)}>
            Start quiz
          </Link>
          <Link to={URL.Statistics} className={clsx(styles.button, styles.button__results)}>
            See my statistics
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Form
