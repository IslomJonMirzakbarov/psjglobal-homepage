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
        {links?.map((item, index) => (
          <li
            key={item.title + index}
            className={`${router.pathname === item.link ? styles.active : ''}`}
          >
            <Link href={item.link}>
              <a target={item.target}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
