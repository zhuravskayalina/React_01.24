import Form from '../components/Form/Form.tsx'
import styles from './Welcome.module.scss'

export const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.heading} data-testid="welcome-heading">
        time for Quiz
      </h1>
      <p className={styles.description}>
        Select your preferences for the quiz game and press 'Start quiz' button
      </p>
      <Form />
    </div>
  )
}
