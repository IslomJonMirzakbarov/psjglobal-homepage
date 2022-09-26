import { Container, Typography } from '@mui/material'
import { NextArrow } from '../Icons'
import styles from './banner.module.scss'
import {
  motion,
  useAnimation,
  useTransform,
  useScroll,
  useSpring,
  useMotionValue
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useFontFamily } from 'hooks/useFontFamily'

const animationVarinat = {
  hidden: { opacity: 0.2 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
}

export default function Banner() {
  const control = useAnimation()
  const { t } = useTranslation('common')
  const font = useFontFamily()
  const [ref, inView] = useInView()
  const { scrollYProgress } = useScroll()
  const xCloud = useTransform(
    scrollYProgress,
    [0.09, 0.07, 0.05, 0.03, 0.01, 0],
    [400, 350, 300, 250, 200, 0]
  )
  const xCloudSmall = useTransform(
    scrollYProgress,
    [0.07, 0.04, 0],
    [-200, -100, 0]
  )
  const cloudSmallOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.06, 0],
    [0, 0.5, 1]
  )
  const xCircleBlue = useTransform(scrollYProgress, [0.07, 0], [50, 0])

  const yRocket = useTransform(scrollYProgress, [0.06, 0], [460, 0])
  const yTerminal = useTransform(scrollYProgress, [0.06, 0], [-100, 0])
  const xRocket = useTransform(
    scrollYProgress,
    [
      0.06, 0.055, 0.05, 0.045, 0.04, 0.035, 0.03, 0.025, 0.02, 0.015, 0.01,
      0.005, 0
    ], //
    [200, 165, 150, 125, 110, 95, 80, 65, 50, 35, 20, 15, 0]
  )
  const yPhone = useTransform(
    scrollYProgress,
    [0.06, 0.05, 0.04, 0.03, 0.02, 0.01, 0],
    [160, 130, 100, 70, 40, 10, 0]
  )
  const yCircle = useTransform(scrollYProgress, [0.06, 0], [150, 0])
  const cloudOpacity = useTransform(scrollYProgress, [0.08, 0.06, 0], [0, 0, 1])
  const folderScale = useTransform(
    scrollYProgress,
    [0.05, 0.04, 0.02, 0],
    [0, 0.3, 0.6, 1]
  )
  const rocketRotate = useTransform(
    scrollYProgress,
    [0.06, 0.04, 0.02, 0],
    [50, 40, 30, 0]
  )

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
              data-text='CONUN!'
              color='primary.dark'
              variant='h1'
              className={styles.title}
            >
              Collect & Share <br /> Storage <br />
              with CONUN!
            </Typography>
            <Typography
              sx={{ typography: { sm: 'body2', xs: 'body3' } }}
              color='secondary'
              className={styles.desc}
              style={font}
              dangerouslySetInnerHTML={{ __html: t('banner_description') }}
            />
            {/* CONUN is a blockchain-based decentralized storage network. <br />
              It is a service platform that collects world wide storage by{' '}
              <br />
              sharing the idle resources of the participants' personal
              computers.
            </Typography> */}
            <a href='/file.pdf' target='_blank'>
              <div className={styles.link}>
                <Typography variant='body1' color='primary'>
                  CON Token withdrawal verification guide
                </Typography>
                <NextArrow />
              </div>
            </a>
          </div>
          <motion.div
            ref={ref}
            variants={animationVarinat}
            initial='hidden'
            animate={control}
            className={styles.bannerBg}
          >
            <div className={styles.elements}>
              <motion.div
                style={{
                  y: yPhone
                }}
                className={styles.bannerBgPhone}
              >
                <img src='/images/banner-phone-bg.png' alt='rocket' />
              </motion.div>
              <motion.div
                style={{
                  y: yRocket,
                  x: xRocket,
                  rotate: rocketRotate
                }}
                className={styles.bannerBgRocket}
              >
                <img src='/images/banner-rocket-bg.png' alt='rocket' />
              </motion.div>
              <motion.div
                style={{
                  scale: folderScale
                }}
                className={styles.bannerBgFolder}
              >
                <img src='/images/banner-folder-bg.png' alt='rocket' />
              </motion.div>
              <motion.div
                style={{
                  y: yTerminal
                }}
                className={styles.bannerBgTerminal}
              >
                <img src='/images/banner-terminal-bg.png' alt='rocket' />
              </motion.div>
              <div className={styles.bannerBgLock}>
                <img src='/images/banner-lock-bg.png' alt='rocket' />
              </div>
              <motion.div
                style={{
                  opacity: cloudOpacity
                }}
                className={styles.bannerBgErwhgeth}
              >
                <img src='/images/banner-erwhgeth-bg.png' alt='rocket' />
              </motion.div>
              <motion.div
                style={{
                  x: xCloud
                }}
                className={styles.bannerBgCloud}
              >
                <img src='/images/banner-cloud-bg.png' alt='rocket' />
              </motion.div>
              <motion.div
                style={{
                  x: xCloudSmall,
                  opacity: cloudSmallOpacity
                }}
                className={styles.bannerBgSmallCloud}
              >
                <img src='/images/banner-cloud-small-bg.png' alt='rocket' />
              </motion.div>
              <motion.div
                style={{
                  y: yCircle
                }}
                className={styles.bannerBgCircle}
              >
                <img src='/images/banner-circle-bg.png' alt='rocket' />
              </motion.div>

              <motion.div
                style={{
                  x: xCircleBlue
                }}
                className={styles.bannerBgBlueCircle}
              >
                <img src='/images/banner-circle-blue-bg.png' alt='rocket' />
              </motion.div>
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
