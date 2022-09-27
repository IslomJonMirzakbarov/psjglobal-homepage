import { Container, Typography } from '@mui/material'
import styles from './advantage.module.scss'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useFontFamily } from 'hooks/useFontFamily'

const animationVariant = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 1.2, delay: 0.2 } }
}

export default function Advantage() {
  const control = useAnimation()
  const font = useFontFamily()
  const [ref, inView] = useInView()
  const { t } = useTranslation('common')
  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  const items = [
    {
      title: t('advantage_title_1'),
      content: t('advantage_desc_1'),
      img: '/icons/advantage1.png'
    },
    {
      title: t('advantage_title_2'),
      content: t('advantage_desc_2'),
      img: '/icons/advantage2.png'
    },
    {
      title: t('advantage_title_3'),
      content: t('advantage_desc_3'),
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
              style={font}
            >
              {item.title}
            </Typography>
            <Typography
              style={font}
              align='center'
              variant='body2'
              color='secondary'
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
            {/* {item.content} */}
            {/* </Typography> */}
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
