import { Button, Container, Typography } from '@mui/material'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './walletForGoogle.module.scss'

const animationVarinat = {
  hidden: { scale: 0.2 },
  visible: { scale: 1, transition: { duration: 0.3 } },
}

const animationVarinat2 = {
  hidden: { x: 200 },
  visible: { x: 0, transition: { duration: 0.8 } },
}

const animationVarinat3 = {
  hidden: { x: -200 },
  visible: { x: 0, transition: { duration: 0.8 } },
}

export default function WalletForGoogle() {
  const { scrollYProgress } = useScroll()
  const { t } = useTranslation('common')
  const itemsData = [
    {
      title: t('item_title_1'),
      description: t('item_description_1'),
    },
    {
      title: t('item_title_2'),
      description: t('item_description_2'),
    },
    {
      title: t('item_title_3'),
      description: t('item_description_3'),
    },
    {
      title: t('item_title_4'),
      description: t('item_description_4'),
    },
  ]
  const gridItemParagraphs = [
    t('winning_condition_1'),
    t('winning_condition_2'),
    t('winning_condition_3'),
    t('winning_condition_4'),
    t('winning_condition_5'),
    t('winning_condition_6'),
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
          <div className={styles.imageColumn}>
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

          <div className={styles.flexContainer}>
            <div className={styles.item}>
              <img
                src="/images/products/dreamct/golden-round.png"
                alt="Icon 1"
              />
            </div>
            <div className={styles.item}>
              <Typography className={styles.goldenRoundTitle}>
                Golden Round Rules
              </Typography>
            </div>
            <div className={styles.item}>
              <Typography
                className={styles.goldenRoundParagraph}
                dangerouslySetInnerHTML={{
                  __html: t('golden_round_description'),
                }}
              />
            </div>
            <div className={styles.item}>
              <Typography className={styles.sampleNumbersTitle}>
                Sample numbers
              </Typography>
            </div>
            <div className={styles.item}>
              <img
                src="/images/products/dreamct/round-process.png"
                alt="Icon 2"
              />
            </div>
          </div>

          <div className={styles.gridContainer}>
            {gridItemParagraphs.map((paragraph, index) => (
              <div className={styles.gridItem} key={index}>
                <div className={styles.itemPair}>
                  <img
                    src={`/images/products/dreamct/numbers/icon-number-${
                      index + 1
                    }.svg`}
                    alt={`Number ${index + 1}`}
                  />
                  <Typography
                    className={styles.gridItemParagraph}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                </div>
                <img
                  src={`/images/products/dreamct/luckyNumbers/icon-${
                    index + 1
                  }.svg`}
                  alt={`Icon ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className={styles.conclusion}>
            <Typography
              className={styles.conclusionParagraph}
              dangerouslySetInnerHTML={{ __html: t('conclusion_golden_round') }}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
