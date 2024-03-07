import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>2024</p>
      <Link to={'https://github.com/zhuravskayalina'} className={styles.link}>
        Anhelina Zhurauskaya
      </Link>
    </div>
  )
}

export default Footer
