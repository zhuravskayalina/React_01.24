import { useNavigate } from 'react-router-dom'
import styles from './Results.module.scss'
import QuizResultsTable from '../components/ResultsTable/ResultsTable.tsx'
import { mockData } from '../data/quizData.ts'
import { useAppDispatch } from '../redux/hooks/hooks.ts'
import { reset } from '../redux/slices/configurationSlice.ts'

const Results = () => {
  const { category, difficulty, type, time } = mockData
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleChooseAnotherQuiz = () => {
    navigate('/', { replace: true })
    dispatch(reset())
  }

  return (
    <div className={styles.results}>
      <h1>
        Thank you for completing the quiz! <br /> Here are your results:
      </h1>
      <div className={styles.container}>
        <div className={styles.info}>
          <h4>Overall:</h4>
          <div className={styles.info}>
            <p className={styles.info__item}>Category: {category.name}</p>
            <p className={styles.info__item}>Difficulty: {difficulty}</p>
            <p className={styles.info__item}>Type: {type}</p>
            <p className={styles.info__item}>Time: {time} min</p>
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
        <button
          onClick={() => navigate('/game', { replace: true })}
          className={styles.buttons__item}>
          Restart
        </button>
        <button onClick={handleChooseAnotherQuiz} className={styles.buttons__item}>
          Choose another quiz
        </button>
      </div>
    </div>
  )
}

export default Results
