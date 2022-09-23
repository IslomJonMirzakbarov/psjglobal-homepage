import { PArrowLeft, PArrowRight } from '../Icons'
import styles from './Pagination.module.scss'

export default function Pagination({
  count = 100,
  currentPage = 0,
  setCurrentPage,
  pageSize = 8
}) {
  const total = Math.ceil(count / pageSize)
  const nextFn = () => {
    setCurrentPage((prev) => prev + 1)
  }
  const prevFn = () => {
    setCurrentPage((prev) => prev - 1)
  }
  return total > 1 ? (
    <div className={styles.main}>
      <div
        className={`${styles.arrow} ${
          currentPage > 0 ? styles.active : styles.prev
        }`}
        onClick={prevFn}
      >
        <PArrowLeft />
      </div>
      <div className={styles.number}>
        {currentPage + 1} / {total}
      </div>
      <div
        className={`${styles.arrow} ${
          currentPage + 1 < total ? styles.active : styles.next
        }`}
        onClick={nextFn}
      >
        <PArrowRight />
      </div>
    </div>
  ) : (
    <div></div>
  )
}
