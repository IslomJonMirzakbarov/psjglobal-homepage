import { Container, Typography } from '@mui/material'
import { NextArrow } from '../Icons'
import styles from './banner.module.scss'
import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hidden: { opacity: 0, scale: 0 }
}

const boxVariant2 = {
  hidden: { x: 100, y: 400, opacity: 0, rotate: 50 },
  visible: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: { duration: 1.5, delay: 0.2 }
  }
}

const boxVariant6 = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 2.5, delay: 1.5 }
  }
}

const boxVariant3 = {
  hidden: { x: 300, y: 0, scale: 0.4 },
  visible: { x: 0, y: 0, scale: 1, transition: { duration: 1.5 } }
}

const boxVariant4 = {
  hidden: { scale: 0.4, x: -200 },
  visible: { scale: 1, x: 0, transition: { duration: 1.5 } }
}

const boxVariant5 = {
  hidden: { opacity: 0.2 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
}

export default function Banner() {
  const control = useAnimation()
  const [ref, inView] = useInView()
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2])
  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.banner}>
          <div className={styles.content}>
            <Typography
              data-text='Conun'
              color='primary.dark'
              variant='h1'
              className={styles.title}
            >
              Great to
              <br /> See you again.
              <br /> {"It's Conun"}
            </Typography>
            <Typography
              sx={{ typography: { sm: 'body2', xs: 'body3' } }}
              color='secondary'
            >
              CONUN is a blockchain-based distributed supercomputing platform.
              It is a service platform that allows the processing of
              high-performance computing resources by sharing the idle resources
              of the participants' personal computers and smartphones.
            </Typography>
            <div className={styles.link}>
              <Typography variant='body1' color='primary'>
                CON Token withdrawal verification guide
              </Typography>
              <NextArrow />
            </div>
          </div>
          <motion.div
            ref={ref}
            variants={boxVariant5}
            initial='hidden'
            animate={control}
            className={styles.bannerBg}
          >
            <div className={styles.elements}>
              <motion.div
                ref={ref}
                variants={boxVariant}
                initial='hidden'
                animate={control}
                className={styles.bannerBgPhone}
              >
                <img src='/images/banner-phone-bg.png' alt='rocket' />
              </motion.div>
              <motion.div
                ref={ref}
                variants={boxVariant2}
                initial='hidden'
                animate={control}
                className={styles.bannerBgRocket}
              >
                <img src='/images/banner-rocket-bg.png' alt='rocket' />
              </motion.div>
              <div className={styles.bannerBgFolder}>
                <img src='/images/banner-folder-bg.png' alt='rocket' />
              </div>
              <div className={styles.bannerBgTerminal}>
                <img src='/images/banner-terminal-bg.png' alt='rocket' />
              </div>
              <div className={styles.bannerBgLock}>
                <img src='/images/banner-lock-bg.png' alt='rocket' />
              </div>
              <motion.div
                ref={ref}
                variants={boxVariant6}
                initial='hidden'
                animate={control}
                className={styles.bannerBgErwhgeth}
              >
                <img src='/images/banner-erwhgeth-bg.png' alt='rocket' />
              </motion.div>
              <motion.div
                ref={ref}
                variants={boxVariant3}
                initial='hidden'
                animate={control}
                className={styles.bannerBgCloud}
              >
                <img src='/images/banner-cloud-bg.png' alt='rocket' />
              </motion.div>
              <motion.div
                ref={ref}
                variants={boxVariant4}
                initial='hidden'
                animate={control}
                className={styles.bannerBgSmallCloud}
              >
                <img src='/images/banner-cloud-small-bg.png' alt='rocket' />
              </motion.div>
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
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
