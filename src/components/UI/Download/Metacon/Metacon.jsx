import { Button, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './metacon.module.scss'

export default function Metacon({ data }) {
  return (
    <Container>
      <div className={styles.box}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={styles.img}
        >
          <Image
            src={data.img}
            alt='ocean-drive'
            width={110}
            height={110}
            objectFit='contain'
          />
        </motion.div>
        <Typography
          color='primary.dark'
          variant='h2'
          component='h1'
          fontWeight='700'
        >
          {data.title}
        </Typography>
        <Typography
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: data.desc }}
          variant='body2'
          component='p'
        />
        <div className={styles.leftElements}>
          <motion.div
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.leftElement1}
          >
            <img src='/images/metacon/left1.png' />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.leftElement2}
          >
            <img src='/images/metacon/left2.png' />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
            className={styles.leftElement3}
          >
            <img src='/images/metacon/left3.png' />
          </motion.div>
        </div>
        <div className={styles.rightElements}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.rightElement1}
          >
            <img src='/images/metacon/right1.png' />
          </motion.div>
          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.rightElement2}
          >
            <img src='/images/metacon/right2.png' />
          </motion.div>
        </div>
        <div className={styles.items}>
          {data.items.map((item) => (
            <div className={styles.item}>
              <div className={styles.itemImg}>
                {Array.isArray(item.img) ? (
                  item.img.map((val) => (
                    <Image
                      src={val}
                      key={val}
                      objectFit='contain'
                      alt='apple'
                      width={40}
                      height={40}
                    />
                  ))
                ) : (
                  <Image
                    src={item.img}
                    objectFit='contain'
                    alt='apple'
                    width={40}
                    height={40}
                  />
                )}
              </div>
              <Typography variant='h6' fontWeight='700' color='primary.dark'>
                {item.title}
              </Typography>
              <Typography
                className={styles.desc}
                variant='body2'
                color='secondary'
              >
                {item.desc}
              </Typography>
              <Button disabled={!item.active}>
                {item.active ? 'Download' : 'Coming soon'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
