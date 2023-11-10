import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Link from 'next/link'

export default function StringRotator({ strings }) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length)
        setIsVisible(true)
      }, 1000) // Adjust this delay based on your animation duration
    }, 5000)

    return () => clearInterval(intervalId)
  }, [strings])

  return (
    <Link href={`/notice?index=panel${currentStringIndex + 1}`}>
      <a>
        <p className={`${styles.string} ${isVisible ? 'visible' : 'hidden'}`}>
          {strings[currentStringIndex]}
        </p>
      </a>
    </Link>
  )
}
