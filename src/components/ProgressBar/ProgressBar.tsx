import styles from './ProgressBar.module.scss'

interface QuizProgressProps {
  questionsAmount: number
  currentQuestion: number
}

const QuizProgress = ({ questionsAmount, currentQuestion }: QuizProgressProps) => {
  const progressPercent = (currentQuestion / questionsAmount) * 100

  return (
    <div className={styles.quiz__progress}>
      <p>
        Question {currentQuestion} of {questionsAmount}
      </p>
      <div className={styles.quiz__progressBar}>
        <div className={styles.progress} style={{ width: `${progressPercent}%` }}></div>
      </div>
    </div>
  )
}

export default QuizProgress
