import { Button, Container, Typography } from '@mui/material'
import { NextArrow } from 'components/UI/Icons'
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
        <a
          href='/metacon_user_guide_en.pdf'
          target='_blank'
          className={styles.guide}
        >
          Metacon User Guide_en
          <NextArrow />
        </a>
        <a
          href='/metacon_user_guide_ko.pdf'
          target='_blank'
          className={styles.guide}
        >
          Metacon User Guide_ko
          <NextArrow />
        </a>
        <a
          href='/METACON_이체가이드(빗썸).pdf'
          target='_blank'
          className={styles.guide}
        >
          METACON_이체가이드(빗썸)
          <NextArrow />
        </a>
        <a
          href='/LD플레이어_이용 가이드.pdf'
          target='_blank'
          className={styles.guide}
        >
          LD플레이어_이용 가이드
          <NextArrow />
        </a>
        <div className={styles.leftElements}>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.leftElement1}
          >
            <img src='/images/metacon/leftElement1.png' />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.leftElement2}
          >
            <img src='/images/metacon/leftElement2.png' />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
            className={styles.leftElement3}
          >
            <img src='/images/metacon/leftElement3.png' />
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
            <img src='/images/metacon/rightElement1.png' />
          </motion.div>
          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.rightElement2}
          >
            <img src='/images/metacon/rightElement2.png' />
          </motion.div>
        </div>
        <div className={styles.items}>
          {items?.downloads?.map((item, index) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.itemImg}>
                {item?.logo?.data?.map((val) => (
                  <img
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                      val?.attributes?.url
                    }
                    key={val.id}
                    alt={item.title}
                    width={index === 0 ? 56 : 40}
                    height={index === 0 ? 56 : 40}
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
                {getDataByLang(router.locale, 'description', item)}
              </Typography>
              <Button
                color={!item.is_active ? 'secondary' : 'primary'}
                onClick={() => {
                  if (!item.is_active) {
                    setOpen((prev) => !prev)
                  } else {
                    const link = document.createElement('a')
                    link.href = item.link
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }
                }}
              >
                {item.is_active ? 'Download' : 'Coming soon'}
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
