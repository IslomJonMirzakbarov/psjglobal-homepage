import { Button, Container, Typography } from '@mui/material'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
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
  const { t } = useTranslation('common')
  const itemsData = [
    {
      title: t('item_title_1'),
      description: t('item_description_1')
    },
    {
      title: t('item_title_2'),
      description: t('item_description_2')
    },
    {
      title: t('item_title_3'),
      description: t('item_description_3')
    },
    {
      title: t('item_title_4'),
      description: t('item_description_4')
    }
  ]
  const font = useFontFamily()
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
    <div className={styles.container}>
      <Container>
        <div className={styles.box}>
          <Typography
            className={styles.title}
            variant="h2"
            color="primary.dark"
            textAlign="center"
            dangerouslySetInnerHTML={{
              __html: t('product_metacon_wallet_title')
            }}
            style={font}
          />

          <div className={styles.imageColumn}>
            <img
              src="/images/products/metacon/dream-city.png"
              alt="Image 1 description"
            />
            <img
              src="/images/products/metacon/metacon-showcase.png"
              alt="Image 2 description"
            />
          </div>

          <div className={styles.rowContainer}>
            {itemsData.map((item, index) => (
              <div className={styles.item} key={index}>
                <img
                  src={`/images/products/metacon/icon-${index + 1}.svg`}
                  alt={`Icon ${index + 1}`}
                />
                <Typography className={styles.itemTitle}>
                  {item.title}
                </Typography>
                <Typography className={styles.itemParagraph}>
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>

          <Button className={styles.btn}>DreamCT</Button>
        </div>
      </Container>
    </div>
  )
}
