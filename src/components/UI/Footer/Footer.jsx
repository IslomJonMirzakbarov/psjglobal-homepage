import { Container } from '@mui/material'
import styles from './Footer.module.scss'

export function Footer({ isWhiteBg = false }) {
  return (
    <footer style={{ background: isWhiteBg ? '#ffffff' : '' }}>
      <Container>
        <div className={styles.footer}>
          <div className={styles.leftElement}>
            <p className={styles.emailTxt}>
              email:{' '}
              <a href='mailto:contact@psjglobal.io'>contact@psjglobal.io</a>
            </p>
            <p className={styles.emailTxt}>
              {/* conuncs@conun.co.kr */}
              23-22, Samseong-ro 76-gil, Seoul, Korea
            </p>
            <p>ⓒ 2024 PSJ GLOBAL, All Rights Reserved</p>
          </div>
          <div className={styles.rightElement}>
            <a
              href='https://open.kakao.com/o/g5ux462e'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <img src='/icons/talk_conun.svg' alt='kakao_conun' />
              </div>
              <p>PSJGlobal</p>
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
              <img src='/icons/telegram.svg' alt='telegram' />
              <p>Korea</p>
            </a>
            <a
              href='https://t.me/PSJGLOBALCYCON'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <img src='/icons/telegram_global.svg' alt='telegram_global' />
              </div>
              <p>Global</p>
            </a>
            <a
              href='https://www.instagram.com/cycon_and_psjglobal/'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <img src='/icons/instagram.svg' alt='instagram' />
              </div>
            </a>
            <a
              href='https://www.youtube.com/@CYCON-AND-PSJGLOBAL'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <img src='/icons/youtube.svg' alt='youtube' />
              </div>
            </a>
            <a
              href='https://www.facebook.com/cyconandpsjglobal'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <img src='/icons/facebook.png' alt='facebook' />
              </div>
            </a>
            <a
              href='https://twitter.com/PSJGLOBALCYCON'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.item}>
                <img src='/icons/twitter.svg' alt='twitter' />
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
              href='https://blog.naver.com/cyconandpsjglobal'
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
