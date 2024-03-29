import { useAppSelector } from '../redux/hooks/hooks.ts'
import styles from './Statistics.module.scss'
import CircularProgress from '../components/Progress/Progress.tsx'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { URL } from '../router/types.ts'

const Statistics = () => {
  const data = useAppSelector((state) => state.statistics)
  const percent = Math.floor((data.correct / data.total) * 100)

  const navigate = useNavigate()
  return (
    <div className={styles.statistics}>
      <h2 className={styles.heading}>Statistics</h2>
      <div className={styles.table}>
        <div className={styles.common}>
          <div>
            <p>
              Total number of completed questions:
              <span className={styles.number}> {data.total}</span>
            </p>
            <p>
              Amount of correct answers:{' '}
              <span className={clsx(styles.number, styles.number_correct)}>{data.correct}</span>
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}>
            <CircularProgress progress={percent} size={150} strokeWidth={10} />
          </motion.div>
        </div>
        <div className={styles.section}>
          <p className={styles.section__heading}>By category</p>
          <ul className={styles.section__list}>
            {Object.keys(data.byCategory).map((category) => (
              <li key={category}>
                <span className={styles.capitalize}>{category}</span>:{' '}
                <span className={styles.section__number}>{data.byCategory[category]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <p className={styles.section__heading}>By difficulty</p>
          <ul className={styles.section__list}>
            {Object.keys(data.byDifficulty).map((item) => (
              <li key={item}>
                <span className={styles.capitalize}>{item}</span>:{' '}
                <span className={styles.section__number}>{String(data.byDifficulty[item])}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <p className={styles.section__heading}>By quiz type</p>
          <ul className={styles.section__list}>
            {Object.keys(data.byType).map((item) => (
              <li key={item}>
                <span className={styles.capitalize}>{item}</span> :{' '}
                <span className={styles.section__number}>{String(data.byType[item])}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <motion.button
        onClick={() => navigate(URL.Home)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.backButton}>
        Back to home page
      </motion.button>
    </div>
  )
}

export default Statistics
