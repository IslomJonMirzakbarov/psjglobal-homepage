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
  '#Easy'
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
      description: t('Install Metacon app')
    },
    {
      description: t('CYCON swap worth 5,000 KRW')
    },
    {
      description: t('DreamsCT game every Sunday from 9am to Saturday 6pm')
    },
    {
      description: t('Winner announced every Saturday at 9pm!')
    }
  ]

  return (
    <Container>
      <div className={styles.dexpo}>
        <div className={styles.hashTagBox}>
          <div className={styles.columnBox}>
            {texts.slice(0, 3).map((text, index) => (
              <div key={index} className={styles.textBox}>
                <ColoredHashText text={text} isRed={index === 2} />
              </div>
            ))}
          </div>
          <div className={styles.columnBox}>
            <img
              src="/images/products/dreamct/dreamct-in-action.png"
              alt="big-svg"
            />
          </div>
          <div className={styles.columnBox}>
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
              <Typography className={styles.itemParagraph}>
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
        <Typography className={styles.rowTitle} style={{ marginBottom: 200 }}>
          invited!
        </Typography>

        {/* 
        
        create div block, div block margin bottom is 135px:
        1. It should have title: Participation Criteria
        its style:  font-weight: 700;
                    font-size: 70px;
                    line-height: 70px;
                    text-align: center;
                    color: #FFFFFF;
                    margin-bottom: 35px
        
        2. second it has inner grid container, and grid container(should be displayed in 3columns and between first and second, and second and third columns center put the + sign) has 6 elements, gap between child elements is 26px. 5th element is empty shouldn't display anything but reserve corresponding space in the grid, just showing nothing. Each element is display flex and has 3 child elements as column centered horizontally. First child element is svg icon from public folder, second child element is title (style: font-style: normal; font-weight: 700; font-size: 25px; line-height: 38px; text-align: center; color: #FFFFFF);, third child element is paragraph (style: font-weight: 500; font-size: 15px; line-height: 22px; text-align: center; color: #E9EFFF;))

        */}
        <div className={styles.criteriaSection}>
          <Typography className={styles.criteriaTitle}>
            Participation Criteria
          </Typography>
          <div className={styles.gridContainer}>
            {/* Grid elements */}
            {Array(6)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className={classNames(styles.gridItem, {
                    [styles.emptyGridItem]: index === 4
                  })}
                >
                  {index !== 4 && (
                    <>
                      <img
                        src={`/images/participation/icon-${index + 1}.svg`}
                        alt={`Icon ${index + 1}`}
                      />
                      <Typography className={styles.gridItemTitle}>
                        Title {index + 1}
                      </Typography>
                      <Typography className={styles.gridItemParagraph}>
                        Description {index + 1}
                      </Typography>
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
