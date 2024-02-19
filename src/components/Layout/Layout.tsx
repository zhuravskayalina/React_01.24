import styles from './Layout.module.scss'
import { Header } from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout__container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
