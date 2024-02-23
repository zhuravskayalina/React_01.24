import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'
import { URL } from '../router/types.ts'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>Looks like page you're looking for doesn't exist :(</h2>
      <Link className={styles.button} to={URL.Home}>
        Back to home page
      </Link>
    </div>
  )
}

export default NotFound
