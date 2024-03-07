import styles from './ResultsTable.module.scss'
import clsx from 'clsx'
import { QuestionStoreData } from '../../redux/slices/currentQuizSlice.ts'

interface QuizResultsTableProps {
  questions: QuestionStoreData[]
}

const QuizResultsTable = ({ questions }: QuizResultsTableProps) => {
  return (
    <div className={styles.results}>
      <h2>Quiz Results</h2>
      <div className={styles.table}>
        <div className={styles.table__heading}>
          <p className={styles.table__headingItem}>Question</p>
          <p className={clsx(styles.table__headingItem, styles.correct)}>Correct answer</p>
          <p className={styles.table__headingItem}>Your answer</p>
          <p className={styles.table__headingItem}>Result</p>
        </div>
        <ul className={styles.table__data}>
          {questions.map((el) => (
            <li className={styles.table__listItem} key={el.question}>
              <p className={styles.table__item}>{el.question}</p>
              <p className={styles.table__item}>{el.correctAnswer}</p>
              <p className={styles.table__item}>{el.userAnswer}</p>
              <p
                className={clsx(
                  styles.table__item,
                  el.correctAnswer === el.userAnswer ? styles.correct : styles.incorrect
                )}>
                {el.correctAnswer === el.userAnswer ? 'correct' : 'wrong'}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default QuizResultsTable
