import { ReactElement } from 'react'
import styles from './Layout.module.scss'
import { Header } from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'

interface LayoutProps {
  children: ReactElement | ReactElement[]
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout__container}>{children}</div>
      <Footer />
    </div>
  )
}
