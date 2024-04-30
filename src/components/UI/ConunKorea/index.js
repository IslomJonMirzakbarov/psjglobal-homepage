import { Container } from '@mui/material'
import styles from './style.module.scss'
import { NextArrow } from 'components/UI/Icons'
import useTranslation from 'next-translate/useTranslation'
import { items } from 'components/UI/ConunKorea/conunKoreaItems'

export default function ConunKorea() {
  const { t } = useTranslation('common')

  return (
    <Container>
      <div className={styles.titleDiv}>
        <img
          src='/images/conun-korea/conun-korea2.svg'
          width='91.44px'
          height='81.05px'
          alt=''
        />
        {/* <p>@conunkorea</p> */}
        <h1 className={styles.snsTitle}>PSJ GLOBAL</h1>
      </div>
      <div className={styles.guide}>
        <div className={styles.list}>
          <div className={styles.items}>
            {items.map((item) => (
              <div className={styles.item} key={item.title}>
                <h2>{item.title}</h2>
                <div className={styles.itemValues}>
                  {item.values.map((data) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
