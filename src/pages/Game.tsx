import styles from './Game.module.scss'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import QuizProgress from '../components/ProgressBar/ProgressBar.tsx'
import Timer from '../components/Timer/Timer.tsx'
import Modal from '../components/Modal/Modal.tsx'
import CloseConfirmation from '../components/CloseConfirmation/CloseConfirmation.tsx'
import { useNavigate } from 'react-router-dom'
import { URL } from '../router/types.ts'
import { callWithDelay } from '../utils/helpers.ts'
import { useGetQuizQuery } from '../redux/api/apiSlice.ts'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks.ts'
import Question from '../components/Question/Question.tsx'
import { addInfo, increaseCorrect, increaseTotal } from '../redux/slices/statisticsSlice.ts'
import { RESPONSE_CODES } from '../types/enums.ts'
import {
  addQuestion,
  increaseCorrectAnswers,
  resetCurrentQuizData,
  setTime
} from '../redux/slices/currentQuizSlice.ts'
import { CircularProgress } from '@mui/material'

const SECONDS_IN_MINUTE = 60

const Game = () => {
  const [questionNumber, setQuestionNumber] = useState(1)

  const quizConfig = useAppSelector((store) => store.gameConfiguration)
  const { questionsAmount, category, difficulty, type, time } = quizConfig

  const {
    data: quizData = { results: [], response_code: '' },
    isLoading,
    isSuccess,
    isError
  } = useGetQuizQuery({ questionsAmount, categoryId: category.id, difficulty, type })

  const dispatch = useAppDispatch()

  const currentQuestion = quizData?.results[questionNumber - 1]

  const [timerKey, setTimerKey] = useState<number>(0)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [timeEnd, setTimeEnd] = useState(false)
  const [quizTime, setQuizTime] = useState(time * SECONDS_IN_MINUTE)
  const [gameOver, setGameOver] = useState(false)
  const [timerIsActive, setTimerIsActive] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (timerIsActive) {
      timer = setInterval(() => {
        setQuizTime((prevSeconds) => {
          if (prevSeconds === 0 && !gameOver) {
            clearInterval(timer)
            setTimeEnd(true)
            callWithDelay(handleNavigateToResults, 2000)
            return prevSeconds
          }
          return prevSeconds - 1
        })
        handleRestartTimer()
      }, 1000)
    }

    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOver, timerIsActive])

  useEffect(() => {
    dispatch(resetCurrentQuizData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNavigateToResults = () => {
    navigate(URL.Results, { replace: true })
  }

  const handleRestartTimer = () => {
    setTimerKey((prevKey) => prevKey + 1)
  }

  const stopTimer = () => {
    setTimerIsActive(false)
  }

  const handleOpenConfirmModal = () => {
    if (!openConfirmModal) {
      setOpenConfirmModal(true)
    }
  }

  const handleCloseConfirmModal = () => {
    if (openConfirmModal) {
      setOpenConfirmModal(false)
    }
  }

  const handleNavigateToHome = () => {
    navigate(URL.Home, { replace: true })
  }

  const goToNextQuestion = (): void => {
    const nextQuestionNumber = questionNumber + 1

    if (nextQuestionNumber > questionsAmount) {
      dispatch(increaseTotal())
      setGameOver(true)
      dispatch(setTime(time * SECONDS_IN_MINUTE - quizTime))
      stopTimer()
      setTimeout(handleNavigateToResults, 2000)
    } else {
      setQuestionNumber((prev) => prev + 1)
    }
  }

  const handlePressAnswer = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const pressedValue = (event.target as HTMLButtonElement).dataset.value as string

    const questionOverallInfo = {
      category: currentQuestion.category,
      type: currentQuestion.type,
      difficulty: currentQuestion.difficulty
    }

    const answerInfo = {
      question: currentQuestion.question,
      correctAnswer: currentQuestion.correct_answer,
      userAnswer: pressedValue
    }

    dispatch(addInfo(questionOverallInfo))
    dispatch(increaseTotal())
    dispatch(addQuestion(answerInfo))

    if (pressedValue === currentQuestion.correct_answer) {
      dispatch(increaseCorrect())
      dispatch(increaseCorrectAnswers())
    }

    goToNextQuestion()
  }

  let content

  if (isLoading) {
    content = (
      <div className={styles.loading}>
        <CircularProgress size={150} />
      </div>
    )
  }

  if (isSuccess && quizData.response_code === RESPONSE_CODES.ok) {
    content = (
      <div className={styles.game}>
        <div className={styles.game__info}>
          <div>
            <p className={styles.game__infoItem}>Category: {category.name}</p>
            <p className={styles.game__infoItem}>Difficulty: {difficulty}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="End quiz"
            className={styles.button_end}
            onClick={handleOpenConfirmModal}>
            End quiz
          </motion.button>
        </div>
        <div className={styles.game__progress}>
          <QuizProgress questionsAmount={questionsAmount} currentQuestion={questionNumber} />
        </div>
        <Timer seconds={quizTime} key={timerKey} />
        <Question data={currentQuestion} onClick={handlePressAnswer} />

        <Modal isOpen={openConfirmModal} onClose={handleCloseConfirmModal} disableClose={false}>
          <CloseConfirmation onConfirm={handleNavigateToHome} onClose={handleCloseConfirmModal} />
        </Modal>

        <Modal isOpen={timeEnd} disableClose={true}>
          <p>Time is end! You will be redirected to the Results page.</p>
        </Modal>

        <Modal isOpen={gameOver} disableClose={true}>
          <p>Congratulations on ending the game! You will be redirected to the Results page! </p>
        </Modal>
      </div>
    )
  }

  if (isSuccess && quizData.response_code === RESPONSE_CODES.noResults) {
    content = <p>Sorry we dont have a quiz with such settings :( Try another one</p>
  }

  if (isError) {
    content = <p>Sorry, something went wrong. Try one more time!</p>
  }

  return content
}

export default Game
