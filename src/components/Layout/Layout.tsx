import { ReactElement } from 'react'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactElement
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__container}>{children}</div>
    </div>
  )
}
