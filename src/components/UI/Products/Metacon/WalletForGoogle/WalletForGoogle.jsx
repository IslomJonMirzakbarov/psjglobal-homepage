import { Button, Container, Typography } from '@mui/material'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './walletForGoogle.module.scss'

const animationVarinat = {
  hidden: { scale: 0.2 },
  visible: { scale: 1, transition: { duration: 0.3 } }
}

const animationVarinat2 = {
  hidden: { x: 200 },
  visible: { x: 0, transition: { duration: 0.8 } }
}

const animationVarinat3 = {
  hidden: { x: -200 },
  visible: { x: 0, transition: { duration: 0.8 } }
}

export default function WalletForGoogle() {
  const { scrollYProgress } = useScroll()
  const { t } = useTranslation('common')
  const font = useFontFamily()
  const control = useAnimation()
  const [ref, inView] = useInView()
  const scaleDesktop = useTransform(
    scrollYProgress,
    [1, 0.8, 0.6, 0.4, 0],
    [1, 0.7, 0.5, 0.3, 0]
  )

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <Container>
      <div className={styles.box}>
        <Typography
          className={styles.title}
          variant='h2'
          color='primary.dark'
          textAlign='center'
          dangerouslySetInnerHTML={{
            __html: t('product_metacon_wallet_title')
          }}
          style={font}
        />
        <Typography
          variant='body2'
          className={styles.desc}
          color='secondary'
          textAlign='center'
          dangerouslySetInnerHTML={{
            __html: t('product_metacon_wallet_desc')
          }}
          style={font}
        />
        <Button className={styles.btn}>Visit the website</Button>
        <div className={styles.elements}>
          <div className={styles.item1}>
            <motion.img
              style={{
                scale: scaleDesktop
              }}
              src='/images/products/metacon/benefits4.png'
              alt='notebook'
            />
          </div>
          <motion.div
            ref={ref}
            variants={animationVarinat3}
            initial='hidden'
            animate={control}
            className={styles.item2}
          >
            <img src='/images/products/metacon/benefits2.png' alt='notebook' />
          </motion.div>
          <motion.div
            ref={ref}
            variants={animationVarinat2}
            initial='hidden'
            animate={control}
            className={styles.item3}
          >
            <img src='/images/products/metacon/benefits2.png' alt='notebook' />
          </motion.div>
          <motion.div
            ref={ref}
            variants={animationVarinat}
            initial='hidden'
            animate={control}
            className={styles.item4}
          >
            <img src='/images/products/metacon/benefits6.png' alt='notebook' />
          </motion.div>
          <motion.div
            ref={ref}
            variants={animationVarinat}
            initial='hidden'
            animate={control}
            className={styles.item5}
          >
            <img src='/images/products/metacon/benefits5.png' alt='notebook' />
          </motion.div>
          <motion.div
            ref={ref}
            variants={animationVarinat}
            initial='hidden'
            animate={control}
            className={styles.item6}
          >
            <img src='/images/products/metacon/benefits7.png' alt='notebook' />
          </motion.div>
          <motion.img
            style={{
              scale: scaleDesktop,
              position: 'relative'
            }}
            src='/images/products/metacon/benefits1.png'
            alt='notebook'
          />
        </div>
      </div>
    </Container>
  )
}
