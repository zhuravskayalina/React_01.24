import { Link } from 'react-router-dom'
import styles from './Results.module.scss'
import QuizResultsTable from '../components/ResultsTable/ResultsTable.tsx'

const Results = () => {
  return (
    <div className={styles.results}>
      <h1>
        Thank you for completing the quiz! <br /> Here are your results:
      </h1>
      <div className={styles.container}>
        <div className={styles.info}>
          <h4>Overall:</h4>
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
