import styles from './Footer.module.scss'
import Link from 'next/link'
import { Container } from '@mui/material'
import {
  InstagramIcon,
  TalkIcon,
  TelegramIcon,
  TwitterIcon,
  YouTubeIcon
} from '../Icons'
export function Footer({ isWhiteBg = false }) {
  return (
    <footer style={{ background: isWhiteBg ? '#ffffff' : '' }}>
      <Container>
        <div className={styles.footer}>
          <div className={styles.leftElement}>
            <p>
              {/* conuncs@conun.co.kr */}
              23-22, Samseong-ro 76-gil, Seoul, Korea
            </p>
            <p>ⓒ 2023 CONUN, All Rights Reserved</p>
          </div>
          <div className={styles.rightElement}>
            <a
              href='https://open.kakao.com/o/g5ux462e'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <TalkIcon />
              </div>
              <p>CONUN</p>
            </a>
            <a
              href='https://open.kakao.com/o/ghkPJdff'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/icons/talk.svg' alt='kakao' />
              <p>DreamsCT</p>
            </a>
            <a href='https://t.me/conun_cs' target='_blank' rel='noreferrer'>
              <img src='/icons/telegram.svg' alt='facebook' />
              <p>Korea</p>
            </a>
            <a href='https://t.me/conuncycon' target='_blank' rel='noreferrer'>
              <div className={styles.item}>
                <TelegramIcon />
              </div>
              <p>Global</p>
            </a>
            <a
              href='https://www.instagram.com/cycon_and_conun/'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <InstagramIcon />
              </div>
            </a>
            <a
              href='https://www.youtube.com/channel/UCVbpETcXaPRZkL2HACUXOsA'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <YouTubeIcon />
              </div>
            </a>
            <a
              href='https://www.facebook.com/cyconandconun/'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <img src='/icons/facebook.png' alt='facebook' />
              </div>
            </a>
            <a
              href='https://twitter.com/cyconandconun'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <TwitterIcon />
              </div>
            </a>
            <a
              href='https://medium.com/conun-korea'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <img src='/icons/medium.png' alt='facebook' />
              </div>
            </a>
            <a
              href='https://blog.naver.com/conuncs'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <img src='/icons/blog.png' alt='facebook' />
              </div>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
