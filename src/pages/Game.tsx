import styles from './Game.module.scss'
import { GameData, Question } from '../types/types.ts'
import React, { useState } from 'react'
import QuizProgress from '../components/ProgressBar/ProgressBar.tsx'
import Timer from '../components/Timer/Timer.tsx'

interface GameProps {
  data: GameData
  questions: Question[]
}

export const Game = ({ data: { difficulty, category, questionsAmount }, questions }: GameProps) => {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[questionNumber - 1])
  const [timerKey, setTimerKey] = useState<number>(0)

  const handleRestartTimer = () => {
    setTimerKey((prevKey) => prevKey + 1)
  }

  const options = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]

  const goToNextQuestion = (): void => {
    const nextQuestionNumber = questionNumber + 1

    if (nextQuestionNumber > questionsAmount) {
      // end game
    } else {
      setCurrentQuestion(questions[questionNumber])
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
    handleRestartTimer()
    goToNextQuestion()
  }

  return (
    <div className={styles.game}>
      <div className={styles.game__info}>
        <div>
          <p className={styles.game__infoItem}>Category: {category}</p>
          <p className={styles.game__infoItem}>Difficulty: {difficulty}</p>
        </div>
        <button className={styles.button_end} title="End quiz">
          End quiz
        </button>
      </div>
      <div className={styles.game__progress}>
        <QuizProgress questionsAmount={questionsAmount} currentQuestion={questionNumber} />
      </div>
      <div className={styles.question}>
        <div className={styles.question__heading}>
          <Timer seconds={12} key={timerKey} />
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
    </div>
  )
}
