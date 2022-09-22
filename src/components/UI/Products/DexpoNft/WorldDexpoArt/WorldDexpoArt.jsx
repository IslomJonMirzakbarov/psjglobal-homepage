import { Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import styles from './worldDexpoArt.module.scss'

export default function WorldDexpoArt() {
  const { t } = useTranslation('common')
  const font = useFontFamily()
  const data = [
    {
      title: t('product_dexpo_advantage_title_1'),
      desc: t('product_dexpo_advantage_desc_1'),
      img: '/images/products/dexpo-nft/art1.png'
    },
    {
      title: t('product_dexpo_advantage_title_2'),
      desc: t('product_dexpo_advantage_desc_2'),
      img: '/images/products/dexpo-nft/art2.png'
    },
    {
      title: t('product_dexpo_advantage_title_3'),
      desc: t('product_dexpo_advantage_desc_3'),
      img: '/images/products/dexpo-nft/art3.png'
    }
  ]
  return (
    <Container>
      <div className={styles.dexpo}>
        <Typography variant='h2' color='white' textAlign='center'>
          World Art DEXPO
        </Typography>
        <Typography
          variant='body2'
          color='white'
          textAlign='center'
          className={styles.desc}
          style={font}
          dangerouslySetInnerHTML={{ __html: t('product_dexpo_art_desc') }}
        />
        <div className={styles.list}>
          {data.map((item) => (
            <div className={styles.item}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={styles.img}
              >
                <img src={item.img} alt='ocean drive' />
              </motion.div>
              <Typography
                className={styles.title}
                variant='h6'
                fontWeight='700'
                color='white'
                textAlign='center'
                style={font}
              >
                {item.title}
              </Typography>
              <Typography
                textAlign='center'
                variant='body2'
                color='white'
                component='p'
                style={font}
              >
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
