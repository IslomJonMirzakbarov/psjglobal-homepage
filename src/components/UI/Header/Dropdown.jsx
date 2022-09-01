import Link from 'next/link'
import styles from './dropdown.module.scss'

export default function Dropdown({ links }) {
  return (
    <div className={styles.dropdown}>
      <ul
        className={`${styles.dropdownMenu} ${styles.dropdownMenuAnimated} ${styles.dropdownMenuScale}`}
      >
        {links?.map((item) => (
          <li>
            <Link href={item.link}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
