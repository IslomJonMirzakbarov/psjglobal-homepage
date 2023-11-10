import { Container, Typography } from '@mui/material'
import { NextArrow } from '../Icons'
import styles from './banner.module.scss'
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useFontFamily } from 'hooks/useFontFamily'
import StringRotator from 'components/UI/StringRotator'

const animationVarinat = {
  hidden: { opacity: 0.2 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
}

export default function Banner({ notifications }) {
  const control = useAnimation()
  const strings = ['String 1', 'String 2', 'String 3', 'String 4']
  const { t } = useTranslation('common')
  const { lang } = useTranslation()
  const [hrefLink, setHrefLink] = useState('/conun_prof_en.pdf')
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
  const xCoin1 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [-200, -160, -80, 490]
  )

  const yCoin1 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [200, 160, 80, -370]
  )

  const xCoin2 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [-200, -160, -80, 155]
  )

  const yCoin2 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [200, 160, 80, -210]
  )

  const xCoin3 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [-200, -160, -80, -100]
  )

  const yCoin3 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [200, 160, 80, -240]
  )

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

  useEffect(() => {
    if (lang === 'en') {
      setHrefLink('/conun_prof_en.pdf')
    } else if (lang === 'kr') {
      setHrefLink('/conun_prof_kr.pdf')
    }
  }, [lang])

  const notificationsData = notifications
    .filter((data) => data.attributes.is_active)
    .map((item) => item.attributes[`title_${lang}`])

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.banner}>
          <div className={styles.content}>
            {notificationsData?.length > 0 && (
              <div className={styles.text}>
                <img src='/icons/notification.svg' alt='notification' />
                <StringRotator strings={notificationsData} />
              </div>
            )}
            <Typography
              color='primary.dark'
              variant='h1'
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: t('conun_prof_title') }}
            />
            <Typography
              sx={{ typography: { sm: 'body2', xs: 'body3' } }}
              color='secondary'
              className={styles.desc}
              style={font}
              dangerouslySetInnerHTML={{ __html: t('banner_description') }}
            />
            <a
              href='https://scope.klaytn.com/account/0xe4a1bd45cddbbd5d9f605b08ed13a94b6b6ab5aa?tabId=txList'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.link}>
                <Typography variant='body1' color='primary'>
                  CYCON Explorer Shortcuts
                </Typography>
                <NextArrow />
              </div>
            </a>
            <a href={hrefLink} target='_blank' rel='noreferrer'>
              <div className={styles.linkd}>
                <Typography variant='body1' color='primary'>
                  CONUN Company Introduction
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

              <motion.div
                style={{ x: xCoin1, y: yCoin1 }}
                className={`${styles.bannerBgBlueCircle} ${styles.responsiveCoin}`}
              >
                <img
                  src='/images/coin1.png'
                  alt='coin'
                  className={`${styles.coinImage1} ${styles.coinImage}`}
                />
              </motion.div>
              <motion.div
                style={{ x: xCoin2, y: yCoin2 }}
                className={`${styles.bannerBgBlueCircle} ${styles.responsiveCoin}`}
              >
                <img
                  src='/images/coin2.png'
                  alt='coin'
                  className={`${styles.coinImage2} ${styles.coinImage}`}
                />
              </motion.div>
              <motion.div
                style={{ x: xCoin3, y: yCoin3 }}
                className={`${styles.bannerBgBlueCircle} ${styles.responsiveCoin}`}
              >
                <img
                  src='/images/coin3.png'
                  alt='coin'
                  className={`${styles.coinImage3} ${styles.coinImage}`}
                />
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
