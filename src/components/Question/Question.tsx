import styles from '../../pages/Game.module.scss'
import { QuestionData } from '../../types/types.ts'
import { shuffleArray } from '../../utils/helpers.ts'
import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface QuestionProps {
  data: QuestionData
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Question = ({
  onClick,
  data: { question, incorrect_answers, correct_answer }
}: QuestionProps) => {
  const answers = useMemo(
    () => shuffleArray([...incorrect_answers, correct_answer]),
    [correct_answer, incorrect_answers]
  )
  const questionText = question
    .replaceAll('&quot;', '"')
    .replaceAll('&#039;', `'`)
    .replaceAll('&ouml', 'ö')

  return (
    <AnimatePresence>
      <motion.div
        key={question}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        className={styles.question}>
        <div className={styles.question__heading}>
          <p className={styles.question__text}>{questionText}</p>
        </div>

        <div className={styles.options}>
          <p>Choose your answer:</p>
          <ul className={styles.options__list}>
            {answers.map((answer) => (
              <li className={styles.options__item} key={answer}>
                <button
                  className={styles.options__button}
                  title={answer}
                  data-value={answer}
                  onClick={onClick}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Question
