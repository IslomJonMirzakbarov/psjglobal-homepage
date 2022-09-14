import { Button, Container, Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './banner.module.scss'

export default function Banner() {
  const { scrollYProgress } = useScroll()
  const scaleElement = useTransform(
    scrollYProgress,
    [0.2, 0.1, 0.05, 0],
    [0, 0.3, 0.5, 1]
  )
  const scaleElement2 = useTransform(
    scrollYProgress,
    [0.35, 0.25, 0.15, 0],
    [0, 0.3, 0.5, 1]
  )

  const xCircle = useTransform(
    scrollYProgress,
    [0.25, 0.17, 0.1, 0],
    [200, 160, 80, 0]
  )

  const yCircle = useTransform(
    scrollYProgress,
    [0.25, 0.17, 0.1, 0],
    [-200, -160, -80, 0]
  )

  const xCircle2 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [-200, -160, -80, 0]
  )

  const yCircle2 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [-200, -160, -80, 0]
  )

  return (
    <div className={styles.box}>
      <Container className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <Typography
              data-text='NFTs'
              variant='h1'
              className={styles.title}
              color='white'
            >
              Create, sell and
              <br />
              collect
              <br />
              extraordinary NFTs
            </Typography>
            <Typography variant='body2' color='white'>
              Great chance for artists to create their own items. <br />
              lowest fee for Buying and Selling NFTs
            </Typography>
            <a href='https://testnet.dexpo.world' target='_blank'>
              <Button className={styles.btn}>Visit the website</Button>
            </a>
          </div>
          <div className={styles.bannerBg} />
        </div>
        <div className={styles.elements}>
          <motion.div
            style={{
              x: xCircle,
              y: yCircle
            }}
            className={styles.element}
          >
            <img src='/images/products/dexpo-nft/element.png' />
          </motion.div>
          <motion.div
            style={{
              scale: scaleElement2
            }}
            className={styles.element2}
          >
            <img src='/images/products/dexpo-nft/element2.png' />
          </motion.div>
          <motion.div
            style={{
              scale: scaleElement2
            }}
            className={styles.element3}
          >
            <img src='/images/products/dexpo-nft/element3.png' />
          </motion.div>
          <motion.div
            style={{
              x: xCircle2,
              y: yCircle2
            }}
            className={styles.element1}
          >
            <img src='/images/products/dexpo-nft/element1.png' />
          </motion.div>
          <motion.div
            style={{
              scale: scaleElement
            }}
            className={styles.element4}
          >
            <img src='/images/products/dexpo-nft/element4.png' />
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
