import { Button, Container, Typography } from '@mui/material'
import SubscribeModal from 'components/UI/SubscribeModal/SubscribeModal'
import { motion } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import getDataByLang from 'utils/getDataByLang'
import styles from './metacon.module.scss'

export default function Metacon({ data, items }) {
  const [open, setOpen] = useState(false)
  const font = useFontFamily()
  const router = useRouter()
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
          style={font}
        />
        <div className={styles.leftElements}>
          <motion.div
            initial={{ x: -100 }}
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
            transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
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
          {items?.downloads?.map((item, index) => (
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
                    width={index === 0 ? 56 : 40}
                    height={index === 0 ? 56 : 40}
                  />
                ))}
              </div>
              <Typography variant='h6' fontWeight='700' color='primary.dark'>
                {item.title}
                {/* {getDataByLang(router.locale, 'title', item)} */}
              </Typography>
              <Typography
                className={styles.desc}
                variant='body2'
                color='secondary'
              >
                {getDataByLang(router.locale, 'description', item)}
                {/* {item.description_en} */}
              </Typography>
              <Button
                color={!item.active ? 'secondary' : 'primary'}
                onClick={() => {
                  if (!item.active) {
                    setOpen((prev) => !prev)
                  }
                }}
              >
                {item.active ? 'Download' : 'Coming soon'}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <SubscribeModal
        open={open}
        handleClose={() => setOpen((prev) => !prev)}
      />
    </Container>
  )
}
