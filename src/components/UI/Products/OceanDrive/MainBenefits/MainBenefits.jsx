import { Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import styles from './mainBenefits.module.scss'

export default function MainBenefits() {
  const { t } = useTranslation('common')
  const font = useFontFamily()
  const data = [
    {
      title: t('product_ocean_drive_benefits_title_1'),
      desc: t('product_ocean_drive_benefits_desc_1'),
      img: '/images/products/ocean-drive/main1.png'
    },
    {
      title: t('product_ocean_drive_benefits_title_2'),
      desc: t('product_ocean_drive_benefits_desc_2'),
      img: '/images/products/ocean-drive/main2.png'
    },
    {
      title: t('product_ocean_drive_benefits_title_3'),
      desc: t('product_ocean_drive_benefits_desc_3'),
      img: '/images/products/ocean-drive/main3.png',
      imgTop: -45
    },
    {
      title: t('product_ocean_drive_benefits_title_4'),
      desc: t('product_ocean_drive_benefits_desc_4'),
      img: '/images/products/ocean-drive/main4.png',
      imgTop: -15
    }
  ]
  return (
    <Container>
      <div className={styles.benefits}>
        <Typography variant='h2' color='primary.dark' textAlign='center'>
          Main Benefits
        </Typography>
        <div className={styles.list}>
          {data.map((item, index) => (
            <>
              {index === 2 && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className={styles.starImg}
                >
                  <img src='/images/star.png' />
                </motion.div>
              )}
              <div className={styles.item}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className={styles.img}
                  style={{ top: item.imgTop || -30 }}
                >
                  <img src={item.img} alt='ocean drive' />
                </motion.div>
                <Typography
                  className={styles.title}
                  variant='h6'
                  fontWeight='700'
                  color='primary.dark'
                  textAlign='center'
                  style={font}
                >
                  {item.title}
                </Typography>
                <Typography
                  textAlign='center'
                  variant='body3'
                  color='secondary'
                  fontWeight='500'
                  component='p'
                  style={font}
                >
                  {item.desc}
                </Typography>
              </div>
            </>
          ))}
        </div>
        <div className={styles.video}>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/LJW-s7j8ric'
          />
        </div>
      </div>
    </Container>
  )
}
