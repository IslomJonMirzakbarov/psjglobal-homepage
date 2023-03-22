import { Button, Container, Typography } from '@mui/material'
import { NextArrow } from 'components/UI/Icons'
import SubscribeModal from 'components/UI/SubscribeModal/SubscribeModal'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './banner.module.scss'

const animationVarinat = {
  hidden: { opacity: 0.2 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
}

export default function Banner() {
  const control = useAnimation()
  const [open, setOpen] = useState(false)
  const { t } = useTranslation('common')
  const font = useFontFamily()
  const router = useRouter()
  const [ref, inView] = useInView()
  const { scrollYProgress } = useScroll()
  const xCloud = useTransform(scrollYProgress, [0.09, 0.06, 0], [500, 50, 100])
  const yElement = useTransform(scrollYProgress, [0.07, 0], [300, 0])
  const scaleElement = useTransform(
    scrollYProgress,
    [0.07, 0.04, 0],
    [0, 0.5, 1]
  )

  const cloundRotate = useTransform(
    scrollYProgress,
    [0.06, 0.04, 0.02, 0],
    [-10, -8, -5, 0]
  )
  const xCircleSmall = useTransform(scrollYProgress, [0.07, 0], [-200, 0])
  const CircleOpacity = useTransform(
    scrollYProgress,
    [0.06, 0.08, 0],
    [0.3, 0.5, 1]
  )
  const circleScale = useTransform(
    scrollYProgress,
    [0.06, 0.08, 0],
    [0.3, 0.5, 1]
  )

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <div className={styles.box}>
      <Container className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <Typography
              variant="h1"
              className={styles.title}
              color="primary.dark"
              style={font}
              dangerouslySetInnerHTML={{
                __html: t('product_ocean_drive_title'),
              }}
            />
            <Typography
              variant="body2"
              style={font}
              color="secondary"
              dangerouslySetInnerHTML={{
                __html: t('product_ocean_drive_desc'),
              }}
            />
            <Button onClick={() => router.push('/ocean-drive')}>
              Download
            </Button>
            <a
              href="/pdf-viewer/ocean_drive_user_guide_en"
              target="_blank"
              className={styles.guide}
            >
              OceanDrive User Guide_en
              <NextArrow />
            </a>
            <a
              href="/pdf-viewer/ocean_drive_user_guide_ko"
              target="_blank"
              className={styles.guide}
            >
              OceanDrive User Guide_ko
              <NextArrow />
            </a>
          </div>
          <div className={styles.bannerBg} />
        </div>
        <motion.div
          ref={ref}
          variants={animationVarinat}
          initial="hidden"
          animate={control}
          className={styles.elements}
        >
          <motion.div
            style={{
              x: xCloud,
              rotate: cloundRotate,
            }}
            className={styles.element}
          >
            <img src="/images/products/ocean-drive/element.png" />
          </motion.div>
          {/* <motion.div
            style={{
              opacity: elementOpacity
            }}
            className={styles.element2}
          >
            <img src='/images/products/ocean-drive/element2.png' />
          </motion.div> */}
          <motion.div
            style={{
              y: yElement,
              scale: scaleElement,
            }}
            className={styles.element3}
          >
            <img src="/images/products/ocean-drive/element3.png" />
          </motion.div>
          <motion.div
            style={{
              x: xCircleSmall,
              opacity: CircleOpacity,
            }}
            className={styles.element4}
          >
            <img src="/images/products/ocean-drive/element4.png" />
          </motion.div>
          <motion.div
            style={{
              scale: circleScale,
            }}
            className={styles.element6}
          >
            <img src="/images/products/ocean-drive/element6.png" />
          </motion.div>
          <motion.div
            style={{
              scale: circleScale,
            }}
            className={styles.element1}
          >
            <img src="/images/products/ocean-drive/element1.png" />
          </motion.div>
          <motion.div
            style={{
              y: xCircleSmall,
              opacity: CircleOpacity,
            }}
            className={styles.element5}
          >
            <img src="/images/products/ocean-drive/element5.png" />
          </motion.div>
        </motion.div>
      </Container>
      <SubscribeModal
        open={open}
        handleClose={() => setOpen((prev) => !prev)}
      />
    </div>
  )
}
