import { Container } from '@mui/material'
import styles from './style.module.scss'
import { NextArrow } from 'components/UI/Icons'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import { items, items2 } from 'components/UI/Sns/snsItems'

export default function Sns() {
  const { t } = useTranslation('common')
  const [expandedSections, setExpandedSections] = useState({})

  function toggleSection(title) {
    setExpandedSections({
      ...expandedSections,
      [title]: !expandedSections[title]
    })
  }

  return (
    <Container>
      <h1 className={styles.snsTitle}>sns</h1>
      <div className={styles.guide}>
        <div className={styles.list}>
          <div className={styles.items}>
            {items.map((item) => (
              <div className={styles.item} key={item.title}>
                <h2>{item.title}</h2>
                <div className={styles.itemValues}>
                  {(expandedSections[item.title]
                    ? item.values
                    : item.values.slice(0, 5)
                  ).map((data) => (
                    <a
                      href={data.path}
                      target='_blank'
                      key={data.label}
                      rel='noreferrer'
                    >
                      <span className={styles.labelSpan}>
                        <img src={data.iconPath} alt='' /> {data.label}
                      </span>{' '}
                      <NextArrow />
                    </a>
                  ))}
                </div>
                <div className={styles.moreDiv}>
                  {item.values.length > 5 && (
                    <p
                      className={styles.more}
                      onClick={() => toggleSection(item.title)}
                    >
                      {expandedSections[item.title] ? 'Less' : 'More'}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.items}>
            {items2.map((item) => (
              <div className={styles.item} key={item.title}>
                <h2>{item.title}</h2>
                <div className={styles.itemValues}>
                  {(expandedSections[item.title]
                    ? item.values
                    : item.values.slice(0, 5)
                  ).map((data) => (
                    <a
                      href={data.path}
                      target='_blank'
                      key={data.label}
                      rel='noreferrer'
                    >
                      <span className={styles.labelSpan}>
                        <img src={data.iconPath} alt='' /> {data.label}
                      </span>{' '}
                      <NextArrow />
                    </a>
                  ))}
                </div>
                <div className={styles.moreDiv}>
                  {item.values.length > 5 && (
                    <p
                      className={styles.more}
                      onClick={() => toggleSection(item.title)}
                    >
                      {expandedSections[item.title] ? 'Less' : 'More'}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
