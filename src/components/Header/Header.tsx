import styles from './Header.module.scss'
import logo from '../../assets/icons/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { URL } from '../../router/types.ts'

const navigationData = [
  {
    title: 'Home',
    url: URL.Home
  },
  {
    title: 'Results',
    url: URL.Results
  },
  {
    title: 'Statistics',
    url: URL.Statistics
  }
]

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Link to={URL.Home} className={styles.header__homeLink}>
          <img src={logo} alt="logo" className={styles.header__logo} />
        </Link>
        <nav>
          <ul className={styles.nav}>
            {navigationData.map(({ url, title }) => (
              <li key={title}>
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    isActive ? clsx(styles.nav__link, styles.nav__link_active) : styles.nav__link
                  }>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
