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
  const itemsData = [
    {
      description: t('install_metacon_app'),
    },
    {
      description: t('cycon_swap_worth'),
    },
    {
      description: t('dreamsct_game_schedule'),
    },
    {
      description: t('winner_announcement_time'),
    },
  ]
  const gridItemsData = [
    {
      title: t('install_metacon_wallet_app'),
      paragraph: t('metacon_wallet_app_instruction'),
    },
    {
      title: t('hold_cycon_requirement'),
      paragraph: t('cycon_wallet_requirement'),
    },
    {
      title: t('phone_verification_requirement'),
      paragraph: t('phone_verification_instruction'),
    },
    {
      title: t('minors_restriction'),
      paragraph: t('age_restriction'),
    },
    {
      title: '',
      paragraph: '',
    },
    {
      title: t('participation_limitation'),
      paragraph: t('participation_criteria'),
    },
  ]

  return (
    <Container>
      <div className={styles.dexpo}>
        <div className={styles.hashTagBox}>
          <div className={classNames(styles.columnBox, styles.hideOnMobile)}>
            {texts.slice(0, 3).map((text, index) => (
              <div key={index} className={styles.textBox}>
                <ColoredHashText text={text} isRed={index === 2} />
              </div>
            ))}
          </div>
          <div className={classNames(styles.columnBox, styles.mobileImg)}>
            <img
              src="/images/products/dreamct/dreamct-in-action.png"
              alt="big-svg"
            />
          </div>
          <div className={classNames(styles.columnBox, styles.hideOnMobile)}>
            {texts.slice(3).map((text, index) => (
              <div key={index} className={styles.textBox}>
                <ColoredHashText text={text} isRed={index === 0} />
              </div>
            ))}
          </div>
        </div>

        <Typography className={styles.rowTitle}>You&apos;re</Typography>
        <div className={styles.rowContainer}>
          {itemsData.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.imageWrapper}>
                <img
                  src={`/images/products/dreamct/icon-${index + 1}.svg`}
                  alt={`Icon ${index + 1}`}
                />
              </div>
              <Typography
                className={styles.itemParagraph}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>
        <Typography
          className={classNames(styles.rowTitle, styles.bottomRowTitle)}
        >
          invited!
        </Typography>

        <div className={styles.criteriaSection}>
          <Typography className={styles.criteriaTitle}>
            Participation Criteria
          </Typography>
          <div className={styles.gridContainer}>
            {gridItemsData.map((item, index) => (
              <div
                key={index}
                className={classNames(styles.gridItem, {
                  [styles.emptyGridItem]: index === 4,
                })}
              >
                {index !== 4 && (
                  <>
                    <img
                      src={`/images/products/dreamct/participation-icon.svg`}
                      alt={`Icon ${index + 1}`}
                    />
                    <Typography className={styles.gridItemTitle}>
                      {item.title}
                    </Typography>
                    <Typography
                      className={styles.gridItemParagraph}
                      dangerouslySetInnerHTML={{ __html: item.paragraph }}
                    />
                    {/* {item.paragraph}
                    </Typography> */}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
