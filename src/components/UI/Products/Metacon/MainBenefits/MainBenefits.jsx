import { Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import { rem } from 'utils/pxToRem'
import styles from './mainBenefits.module.scss'

export default function MainBenefits() {
  const { t } = useTranslation('common')
  const font = useFontFamily()
  const data = [
    {
      title: t('product_metacon_benefits_1'),
      img: '/images/products/metacon/main1.png',
      widthImg: 112,
      heightImg: 112
    },
    {
      title: t('product_metacon_benefits_2'),
      img: '/images/products/metacon/main2.png',
      widthImg: 84,
      heightImg: 124
    },
    {
      title: t('product_metacon_benefits_3'),
      img: '/images/products/metacon/main3.png',
      widthImg: 109,
      heightImg: 129
    },
    {
      title: t('product_metacon_benefits_4'),
      img: '/images/products/metacon/main4.png',
      widthImg: 115,
      heightImg: 115
    },
    {
      title: t('product_metacon_benefits_5'),
      img: '/images/products/metacon/main5.png',
      widthImg: 74,
      heightImg: 112
    }
  ]
  return (
    <Container>
      <div className={styles.dexpo}>
        <Typography variant='h2' color='primary.dark' textAlign='center'>
          Metacon
        </Typography>
        <Typography
          variant='body2'
          color='secondary'
          textAlign='center'
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: t('product_metacon_info')
          }}
          style={font}
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={styles.starImg}
        >
          <img src='/images/star.png' />
        </motion.div>
        <Typography
          className={styles.title}
          variant='h2'
          color='secondary.dark'
          textAlign='center'
        >
          Main Benefits
        </Typography>
        <div className={styles.list}>
          {data.map((item, index) => (
            <div className={styles.item}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: +`0.${index + 1}` }}
                className={styles.img}
                style={{
                  maxWidth: item.widthImg,
                  maxHeight: item.heightImg,
                  left: `calc(50% - ${rem(item.widthImg / 2)})`
                }}
              >
                <img src={item.img} alt='ocean drive' />
              </motion.div>
              <Typography
                className={styles.subTitle}
                variant='body1'
                fontWeight='700'
                color='primary.dark'
                style={font}
                textAlign='center'
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
