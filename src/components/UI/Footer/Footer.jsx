import styles from './Footer.module.scss'
import Link from 'next/link'
import { Container } from '@mui/material'
import { TalkIcon, TelegramIcon, YouTubeIcon } from '../Icons'
export function Footer() {
  return (
    <footer>
      <Container>
        <div className={styles.footer}>
          <div className={styles.leftElement}>
            <p>
              conuncs@conun.co.kr
              <br />1 Raffles Place #44-01A One Raffles Place Singapore
            </p>
            <p>ⓒ 2021 CONUN, All Rights Reserved</p>
          </div>
          <div className={styles.rightElement}>
            <div className={styles.item}>
              <TalkIcon />
            </div>
            <div className={styles.item}>
              <YouTubeIcon />
            </div>
            <div className={styles.item}>
              <TelegramIcon />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
