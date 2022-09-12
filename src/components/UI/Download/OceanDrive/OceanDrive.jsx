import { Button, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './oceanDrive.module.scss'

export default function OceanDrive({ data, items }) {
  return (
    <Container>
      <div className={styles.box}>
        <div className={styles.img}>
          <Image
            src={data.img}
            alt='ocean-drive'
            width={110}
            height={110}
            objectFit='contain'
          />
        </div>
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
            <img src='/images/ocean-drive/left1.png' />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.leftElement2}
          >
            <img src='/images/ocean-drive/left2.png' />
          </motion.div>
        </div>
        <div className={styles.rightElements}>
          <motion.div
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.rightElement1}
          >
            <img src='/images/ocean-drive/right1.png' />
          </motion.div>
          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.rightElement3}
          >
            <img src='/images/ocean-drive/right2.png' />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.rightElement2}
          >
            <img src='/images/ocean-drive/right3.png' />
          </motion.div>
        </div>
        <div className={styles.items}>
          {items.downloads.map((item, index) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.itemImg}>
                {item?.logo?.data?.map((val) => (
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                      val?.attributes?.url
                    }
                    key={val.id}
                    objectFit='contain'
                    alt='apple'
                    width={index === 2 ? 70 : 40}
                    height={40}
                  />
                ))}
              </div>
              <Typography variant='h6' fontWeight='700' color='primary.dark'>
                {item.title}
              </Typography>
              <Typography
                className={styles.desc}
                variant='body2'
                color='secondary'
              >
                {item.description_en}
              </Typography>
              <Button disabled={!item.is_active}>
                {item.is_active ? 'Download' : 'Coming soon'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
