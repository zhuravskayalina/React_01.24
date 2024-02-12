import { GameData } from '../types/types.ts'
import { Link } from 'react-router-dom'
import styles from './Results.module.scss'
import QuizResultsTable from '../components/ResultsTable/ResultsTable.tsx'

interface ResultsProps {
  data: GameData
}

const Results = ({ data }: ResultsProps) => {
  return (
    <div className={styles.results}>
      <h1>
        Thank you for completing the quiz! <br /> Here are your results:
      </h1>
      <div className={styles.container}>
        <div className={styles.info}>
          <h4>Overall:</h4>
          <div className={styles.info}>
            <p className={styles.info__item}>Category: {data.category}</p>
            <p className={styles.info__item}>Difficulty: {data.difficulty}</p>
            <p className={styles.info__item}>Type: {data.type}</p>
            <p className={styles.info__item}>Time: {data.time} min</p>
          </div>
          <p>
            You answered <span className={styles.focus}>5 out of 10</span> questions correctly
          </p>
          <p>
            You've spend <span className={styles.focus}>2 min</span> to complete the quiz
          </p>
        </div>
        <QuizResultsTable />
      </div>
      <div className={styles.buttons}>
        <Link to="/game" className={styles.buttons__item}>
          Restart
        </Link>
        <Link to="/" className={styles.buttons__item}>
          Choose another quiz
        </Link>
      </div>
    </div>
  )
}

export default Results
