import styles from './Game.module.scss'
import { Question } from '../types/types.ts'
import React, { useCallback, useEffect, useState } from 'react'
import QuizProgress from '../components/ProgressBar/ProgressBar.tsx'
import Timer from '../components/Timer/Timer.tsx'
import { mockData, mockQuestionsMultiple } from '../data/quizData.ts'
import Modal from '../components/Modal/Modal.tsx'
import CloseConfirmation from '../components/CloseConfirmation/CloseConfirmation.tsx'
import { useNavigate } from 'react-router-dom'
import { URL } from '../router/types.ts'
import { callWithDelay } from '../utils/helpers.ts'

const gameTime = 100

const Game = () => {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    mockQuestionsMultiple[questionNumber - 1]
  )
  const [timerKey, setTimerKey] = useState<number>(0)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [openGameOverModal, setOpenGameOverModal] = useState(false)
  const [quizTime, setQuizTime] = useState(gameTime)
  const [gameOver, setGameOver] = useState(false)

  const options = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]

  const navigate = useNavigate()

  const { difficulty, category, questionsAmount } = mockData

  const handleNavigateToResults = useCallback(() => {
    navigate(URL.Results, { replace: true })
  }, [navigate])

  useEffect(() => {
    console.log('effect')
    const timer = setInterval(() => {
      setQuizTime((prevSeconds) => {
        if (prevSeconds === 0 && !gameOver) {
          clearInterval(timer)
          setOpenGameOverModal(true)
          callWithDelay(handleNavigateToResults, 2000)
          return prevSeconds
        }
        return prevSeconds - 1
      })
      handleRestartTimer()
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [gameOver, handleNavigateToResults])

  const handleRestartTimer = () => {
    setTimerKey((prevKey) => prevKey + 1)
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
      setGameOver(true)
      setTimeout(handleNavigateToResults, 2000)
    } else {
      setCurrentQuestion(mockQuestionsMultiple[questionNumber])
      setQuestionNumber((prev) => prev + 1)
    }
  }

  const handlePressAnswer = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const pressedValue = (event.target as HTMLButtonElement).dataset.value

    if (pressedValue === currentQuestion.correct_answer) {
      // store
    } else {
      // store
    }
    // handleRestartTimer()
    goToNextQuestion()
  }

  return (
    <div className={styles.game}>
      <div className={styles.game__info}>
        <div>
          <p className={styles.game__infoItem}>Category: {category}</p>
          <p className={styles.game__infoItem}>Difficulty: {difficulty}</p>
        </div>
        <button className={styles.button_end} title="End quiz" onClick={handleOpenConfirmModal}>
          End quiz
        </button>
      </div>
      <div className={styles.game__progress}>
        <QuizProgress questionsAmount={questionsAmount} currentQuestion={questionNumber} />
      </div>
      <div className={styles.question}>
        <div className={styles.question__heading}>
          <Timer seconds={quizTime} key={timerKey} />
          <p className={styles.question__text}>{currentQuestion.question}</p>
        </div>

        <div className={styles.options}>
          <p>Choose your answer:</p>
          <ul className={styles.options__list}>
            {options.map((option) => (
              <li className={styles.options__item} key={option}>
                <button
                  className={styles.options__button}
                  title={option}
                  data-value={option}
                  onClick={handlePressAnswer}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal isOpen={openConfirmModal} onClose={handleCloseConfirmModal} disableClose={false}>
        <CloseConfirmation onConfirm={handleNavigateToHome} onClose={handleCloseConfirmModal} />
      </Modal>

      <Modal isOpen={openGameOverModal} disableClose={true}>
        <p>Time is end! You will be redirected to the Results page.</p>
      </Modal>

      <Modal isOpen={gameOver} disableClose={true}>
        <p>Congratulations on ending the game! You will be redirected to the Results page! </p>
      </Modal>
    </div>
  )
}

export default Game
