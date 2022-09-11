import { Button, Container, Typography } from '@mui/material'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
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
        >
          A Cryptocurrency
          <br /> Wallet for Google Chrome!
        </Typography>
        <Typography
          variant='body2'
          className={styles.desc}
          color='secondary'
          textAlign='center'
        >
          It also provides a decentralized swapping service. Any transactions
          made on METACON will be peer-to-peer without an intermediator. All
          transaction information is transparent to the public, so anyone can
          see and check the transaction history updated live on CONSCAN. If you
          already have an Ethereum wallet, you can link it to METACON and use
          it. Of course, you can create a new wallet here. Download now and
          enjoy the various services of CONUN through METACON in a fast and
          secure environment.
        </Typography>
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
