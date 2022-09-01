import { Container, Typography } from '@mui/material'
import { NextArrow } from '../Icons'
import styles from './banner.module.scss'

export default function Banner() {
  return (
    <Container>
      <div className={styles.banner}>
        <div className={styles.content}>
          <Typography data-text='Conun' variant='h1' className={styles.title}>
            Great to
            <br /> See you again.
            <br /> {"It's Conun"}
          </Typography>
          <Typography variant='body2' color='secondary'>
            CONUN is a blockchain-based distributed supercomputing platform. It
            is a service platform that allows the processing of high-performance
            computing resources by sharing the idle resources of the
            participants' personal computers and smartphones.
          </Typography>
          <div className={styles.link}>
            <Typography variant='body1' color='primary'>
              CON Token withdrawal verification guide
            </Typography>
            <NextArrow />
          </div>
        </div>
        <div className={styles.bannerBg}>
          <div className={styles.elements}>
            <div className={styles.bannerBgPhone}>
              <img src='/images/banner-phone-bg.png' alt='rocket' />
            </div>
            <div className={styles.bannerBgRocket}>
              <img src='/images/banner-rocket-bg.png' alt='rocket' />
            </div>
            <div className={styles.bannerBgFolder}>
              <img src='/images/banner-folder-bg.png' alt='rocket' />
            </div>
            <div className={styles.bannerBgTerminal}>
              <img src='/images/banner-terminal-bg.png' alt='rocket' />
            </div>
            <div className={styles.bannerBgLock}>
              <img src='/images/banner-lock-bg.png' alt='rocket' />
            </div>
            <div className={styles.bannerBgErwhgeth}>
              <img src='/images/banner-erwhgeth-bg.png' alt='rocket' />
            </div>
            <div className={styles.bannerBgCloud}>
              <img src='/images/banner-cloud-bg.png' alt='rocket' />
            </div>
            <div className={styles.bannerBgSmallCloud}>
              <img src='/images/banner-cloud-small-bg.png' alt='rocket' />
            </div>
            <div className={styles.bannerBgCircle}>
              <img src='/images/banner-circle-bg.png' alt='rocket' />
            </div>

            <div className={styles.bannerBgBlueCircle}>
              <img src='/images/banner-circle-blue-bg.png' alt='rocket' />
            </div>
            <div className={styles.bannerShutterstock}>
              <img src='/images/banner-shutterstock-bg.png' alt='rocket' />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
