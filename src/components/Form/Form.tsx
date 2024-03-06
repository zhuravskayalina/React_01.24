import styles from './Form.module.scss'
import { NumberInput } from '../NumberInput/NumberInput.tsx'
import { SelectInput } from '../SelectInput/SelectInput.tsx'
import { ChangeEvent, useMemo, useState } from 'react'
import {
  ANY_CATEGORY,
  ANY,
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
import { CircularProgress } from '@mui/material'

const Form = () => {
  const [questionsAmountError, setQuestionsAmountError] = useState(false)

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
      id: ANY,
      name: ANY_CATEGORY
    })
    return copy
  }, [categories])

  const dispatch = useAppDispatch()

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)

    if (value < 15 || value > 50) {
      setQuestionsAmountError(true)
    } else {
      setQuestionsAmountError(false)
      dispatch(setQuestionsAmount(value))
    }
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

  let content

  if (isLoading) {
    content = <CircularProgress />
  } else if (isSuccess) {
    content = (
      <form className={styles.form}>
        <NumberInput
          min={MIN_QUESTIONS_AMOUNT}
          max={MAX_QUESTIONS_AMOUNT}
          onChange={handleNumberChange}
        />
        {questionsAmountError && (
          <p className={styles.validationError}>Please enter number from 15 to 50</p>
        )}
        <SelectInput name="category" options={categoriesWithAny} onChange={handleCategoryChange} />
        <SelectInput
          name="difficulty"
          options={difficultyOptions}
          onChange={handleDifficultyChange}
        />
        <SelectInput name="type" options={typeOptions} onChange={handleTypeChange} />
        <SelectInput name="time" options={timeOptions} onChange={handleTimeChange} />
        <div className={styles.buttons}>
          <Link
            to={questionsAmountError ? '' : URL.Game}
            className={clsx(styles.button, styles.button__start)}>
            Start quiz
          </Link>
          <Link to={URL.Statistics} className={clsx(styles.button, styles.button__results)}>
            See my statistics
          </Link>
        </div>
      </form>
    )
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return <div className={styles.container}>{content}</div>
}

export default Form
