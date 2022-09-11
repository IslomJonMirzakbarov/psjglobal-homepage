import { Container, Typography } from '@mui/material'
import styles from './advantage.module.scss'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const animationVariant = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 1.2, delay: 0.2 } }
}

export default function Advantage() {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  const items = [
    {
      title: 'Get Power By Conun',
      content:
        'Through our distributed super computing platform you can get the power to run large projects, files, and applications affordably.',
      img: '/icons/advantage1.png'
    },
    {
      title: 'Give Power to Earn',
      content:
        'By sharing your personal computing resources you become part of a P2P network where earning is easy.',
      img: '/icons/advantage2.png'
    },
    {
      title: 'Join Our Ecosystem',
      content:
        'Become part of the CONUN network and you can benefit from our current and future blockchain-based projects.',
      img: '/icons/advantage3.png'
    }
  ]

  return (
    <Container>
      <div className={styles.items}>
        {items.map((item) => (
          <div className={styles.item} key={item.title}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className={styles.img}
            >
              <img src={item.img} alt={item.title} />
            </motion.div>
            <Typography
              className={styles.title}
              variant='h6'
              color='primary.dark'
              align='center'
            >
              {item.title}
            </Typography>
            <Typography align='center' variant='body2' color='secondary'>
              {item.content}
            </Typography>
          </div>
        ))}
        <motion.img
          ref={ref}
          variants={animationVariant}
          initial='hidden'
          animate={control}
          className={styles.element}
          src='/icons/advantage4.png'
          alt='element'
        />
      </div>
    </Container>
  )
}
