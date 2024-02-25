import { useAppSelector } from '../redux/hooks/hooks.ts'
import styles from './Statistics.module.scss'

const Statistics = () => {
  const data = useAppSelector((state) => state.statistics)

  return (
    <div>
      <h2 className={styles.heading}>Statistics</h2>
      <div className={styles.table}>
        <p className={styles.table__heading}>Answered questions:</p>
        <p>Total amount: {data.total}</p>
        <p>Amount of correct answers: {data.correct}</p>

        <div className={styles.section}>
          <p>By category</p>
          <ul className={styles.section__list}>
            {Object.keys(data.byCategory).map((category) => (
              <li key={category}>
                {category}: {data.byCategory[category]}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <p>By difficulty</p>
          <ul className={styles.section__list}>
            {Object.keys(data.byDifficulty).map((item) => (
              <li key={item}>
                {item} : {String(data.byDifficulty[item])}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <p>By quiz type</p>
          <ul className={styles.section__list}>
            {Object.keys(data.byType).map((item) => (
              <li key={item}>
                {item} : {String(data.byType[item])}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Statistics
