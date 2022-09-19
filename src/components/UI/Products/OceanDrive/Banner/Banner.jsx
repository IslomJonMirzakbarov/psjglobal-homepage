import { Button, Container, Typography } from '@mui/material'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './banner.module.scss'

const animationVarinat = {
  hidden: { opacity: 0.2 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
}

export default function Banner() {
  const control = useAnimation()
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
              OceanDrive is a unique desktop platform that connects
              <br />
              and allows users to share storage worldwide. It is a place to
              <br />
              share and explore all your assets quickly and conveniently.
            </Typography>
            <Button>Download</Button>
          </div>
          <div className={styles.bannerBg} />
        </div>
        <motion.div
          ref={ref}
          variants={animationVarinat}
          initial='hidden'
          animate={control}
          className={styles.elements}
        >
          <motion.div
            style={{
              x: xCloud,
              rotate: cloundRotate
            }}
            className={styles.element}
          >
            <img src='/images/products/ocean-drive/element.png' />
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
              scale: scaleElement
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
          <motion.div
            style={{
              scale: circleScale
            }}
            className={styles.element6}
          >
            <img src='/images/products/ocean-drive/element6.png' />
          </motion.div>
          <motion.div
            style={{
              scale: circleScale
            }}
            className={styles.element1}
          >
            <img src='/images/products/ocean-drive/element1.png' />
          </motion.div>
          <motion.div
            style={{
              y: xCircleSmall,
              opacity: CircleOpacity
            }}
            className={styles.element5}
          >
            <img src='/images/products/ocean-drive/element5.png' />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}
