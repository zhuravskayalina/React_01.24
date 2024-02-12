import styles from './ResultsTable.module.scss'
import { mockQuestionsMultiple } from '../../data/quizData.ts'
import clsx from 'clsx'

const QuizResultsTable = () => {
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
          {mockQuestionsMultiple.map((el) => (
            <li className={styles.table__listItem} key={el.question}>
              <p className={styles.table__item}>{el.question}</p>
              <p className={styles.table__item}>{el.correct_answer}</p>
              <p className={styles.table__item}>User answer</p>
              <p className={styles.table__item}>Result</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default QuizResultsTable
