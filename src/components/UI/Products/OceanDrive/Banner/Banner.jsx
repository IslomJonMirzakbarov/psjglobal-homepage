import { Button, Container, Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './banner.module.scss'

export default function Banner() {
  const { scrollYProgress } = useScroll()
  const xCloud = useTransform(scrollYProgress, [0, 0.07], [300, 0])
  const yElement = useTransform(scrollYProgress, [0, 0.07], [300, 0])
  const elementOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.08],
    [0, 0.2, 1]
  )
  const cloundRotate = useTransform(
    scrollYProgress,
    [0, 0.02, 0.04, 0.06],
    [-15, -10, -5, 0]
  )
  const xCircleSmall = useTransform(scrollYProgress, [0, 0.07], [-200, 0])
  const CircleOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.08],
    [0.3, 0.5, 1]
  )

  return (
    <div className={styles.box}>
      <Container className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <Typography
              data-text='OceanDrive'
              variant='h1'
              className={styles.title}
              color='primary.dark'
            >
              Explore, Share, and
              <br />
              Earn with
              <br />
              OceanDrive
            </Typography>
            <Typography variant='body2' color='secondary'>
              OceanDrive is a unique desktop platform that connects and allows
              users to <br /> share digital assets worldwide. It is a place to
              share and explore all your assets
              <br /> quickly and conveniently.
            </Typography>
            <Button>Download</Button>
          </div>
          <div className={styles.bannerBg} />
        </div>
        <div className={styles.elements}>
          <motion.div
            style={{
              x: xCloud,
              rotate: cloundRotate
            }}
            className={styles.element}
          >
            <img src='/images/products/ocean-drive/element.png' />
          </motion.div>
          <motion.div
            style={{
              opacity: elementOpacity
            }}
            className={styles.element2}
          >
            <img src='/images/products/ocean-drive/element2.png' />
          </motion.div>
          <motion.div
            style={{
              y: yElement
            }}
            className={styles.element3}
          >
            <img src='/images/products/ocean-drive/element3.png' />
          </motion.div>
          <motion.div
            style={{
              x: xCircleSmall,
              opacity: CircleOpacity
            }}
            className={styles.element4}
          >
            <img src='/images/products/ocean-drive/element4.png' />
          </motion.div>
          <div className={styles.element6}>
            <img src='/images/products/ocean-drive/element6.png' />
          </div>
          <div className={styles.element1}>
            <img src='/images/products/ocean-drive/element1.png' />
          </div>
          <motion.div
            style={{
              y: xCircleSmall,
              opacity: CircleOpacity
            }}
            className={styles.element5}
          >
            <img src='/images/products/ocean-drive/element5.png' />
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
