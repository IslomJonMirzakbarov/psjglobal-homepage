import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './dropdown.module.scss'

export default function Dropdown({ links }) {
  const router = useRouter()
  return (
    <div className={styles.dropdown}>
      <ul
        className={`${styles.dropdownMenu} ${styles.dropdownMenuAnimated} ${styles.dropdownMenuScale}`}
      >
        {links?.map((item) => (
          <li
            key={item.title}
            className={`${router.pathname === item.link ? styles.active : ''}`}
          >
            <Link href={item.link}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
