import { Button, Container, Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import styles from './banner.module.scss'

export default function Banner() {
  const { scrollYProgress } = useScroll()
  const { t } = useTranslation('common')
  const font = useFontFamily()
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

  const xCoin1 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [-200, -160, -80, 310]
  )

  const yCoin1 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [200, 160, 80, 100]
  )

  const xCoin2 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [-200, -160, -80, -90]
  )

  const yCoin2 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [200, 160, 80, -100]
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
              style={font}
              dangerouslySetInnerHTML={{ __html: t('product_dexpo_title') }}
            />
            <Typography
              variant='body2'
              color='white'
              style={font}
              dangerouslySetInnerHTML={{ __html: t('product_dexpo_desc') }}
            />
            <a href='https://dexpo.world/' target='_blank' rel='noreferrer'>
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

          {/* <motion.div
            style={{
              x: xCoin1,
              y: yCoin1
            }}
            className={`${styles.element4} ${styles.responsiveCoin}`}
          >
            <img
              src='/images/products/dexpo-nft/element5.png'
              className={`${styles.coinImage1} ${styles.coinImage}`}
            />
          </motion.div> */}
          {/* <motion.div
            style={{
              x: xCoin2,
              y: yCoin2
            }}
            className={`${styles.element4} ${styles.responsiveCoin}`}
          >
            <img
              src='/images/products/dexpo-nft/element6.png'
              className={`${styles.coinImage2} ${styles.coinImage}`}
            />
          </motion.div> */}
        </div>
      </Container>
    </div>
  )
}
