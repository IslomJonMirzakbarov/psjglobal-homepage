import { Container, Typography } from '@mui/material'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import { rem } from 'utils/pxToRem'
import styles from './mainBenefits.module.scss'

const texts = [
  '#DreamsCT',
  '#Fun',
  '#Your last wallet',
  '#Wallet',
  '#Swap System',
  '#Easy',
]

function ColoredHashText({ text, isRed }) {
  const hashSymbol = <span className={isRed ? styles.redHash : ''}>#</span>
  const displayText = text.startsWith('#') ? text.slice(1) : text

  return (
    <>
      {hashSymbol}
      {displayText}
    </>
  )
}

export default function MainBenefits() {
  const { t } = useTranslation('common')
  const font = useFontFamily()
  const data = [
    {
      title: t('product_metacon_benefits_1'),
      img: '/images/products/metacon/main1.png',
      widthImg: 157,
      heightImg: 116,
    },
    {
      title: t('product_metacon_benefits_2'),
      img: '/images/products/metacon/main2.png',
      widthImg: 112,
      heightImg: 98,
    },
    {
      title: t('product_metacon_benefits_3'),
      img: '/images/products/metacon/main3.png',
      widthImg: 116,
      heightImg: 108,
    },
  ]
  return (
    <Container>
      <div className={styles.dexpo}>
        <Typography variant="h2" color="primary.dark" textAlign="center">
          Metacon
        </Typography>
        <Typography
          variant="body2"
          color="secondary"
          textAlign="center"
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: t('product_metacon_info'),
          }}
          style={font}
        />

        <div className={styles.hashTagBox}>
          <div className={classNames(styles.columnBox, styles.hideOnMobile)}>
            {texts.slice(0, 3).map((text, index) => (
              <div key={index} className={styles.textBox}>
                <ColoredHashText text={text} isRed={index === 2} />
              </div>
            ))}
          </div>
          <div className={classNames(styles.columnBox, styles.mobileImg)}>
            <img src="/icons/main-benefits/big-svg.svg" alt="big-svg" />
          </div>
          <div className={classNames(styles.columnBox, styles.hideOnMobile)}>
            {texts.slice(3).map((text, index) => (
              <div key={index} className={styles.textBox}>
                <ColoredHashText text={text} isRed={index === 0} />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={styles.starImg}
        >
          <img src="/images/star.png" />
        </motion.div>
        <Typography
          className={styles.title}
          variant="h2"
          color="secondary.dark"
          textAlign="center"
        >
          Main Contents
        </Typography>
        <div className={styles.list}>
          {data.map((item, index) => (
            <div
              className={`${styles.item} ${
                index === 0 ? styles.firstItem : ''
              }`}
              key={index}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: +`0.${index + 1}` }}
                className={styles.img}
                style={{
                  maxWidth: item.widthImg,
                  maxHeight: item.heightImg,
                  left: `calc(50% - ${rem(item.widthImg / 2)})`,
                }}
              >
                <img src={item.img} alt="ocean drive" />
              </motion.div>
              <Typography
                className={styles.subTitle}
                variant="body1"
                fontWeight="700"
                color="primary.dark"
                style={font}
                textAlign="center"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
          ))}
        </div>

        <section className={styles.flexSection}>
          <div className={`${styles.flexColumn} ${styles.firstFlexColumn}`}>
            <Typography className={styles.flexColumnTitle}>
              {t('quick_easy_swap')}
            </Typography>
            <Typography className={styles.flexColumnParagraph}>
              {t('quick_swap_trades')}
            </Typography>
          </div>

          <div className={styles.image}>
            <img
              src="/images/products/metacon/phone-main.png"
              alt="Image description"
            />
          </div>

          <div className={`${styles.flexColumn} ${styles.thirdFlexColumn}`}>
            <Typography className={styles.flexColumnTitle}>
              {t('decentralized_wallet')}
            </Typography>
            <Typography className={styles.flexColumnParagraph}>
              {t('metacon_wallet_description')}
            </Typography>
          </div>
        </section>
      </div>
    </Container>
  )
}
