import { Container, Typography } from '@mui/material'
import Image from 'next/image'
import { rem } from 'utils/pxToRem'
import { NextArrow } from '../Icons'
import styles from './news.module.scss'

export default function News({ isNewsPage = false }) {
  const data = [
    {
      title: 'Conun is Verified With Bithumb!',
      desc: 'Bithumb have repealed their investment warning status. Click for more info.',
      date: 'Tue Dec 21 2021',
      img: '/images/news2.png'
    },
    {
      title: 'Conun is Verified With Bithumb!',
      desc: 'Bithumb have repealed their investment warning status. Click for more info.',
      date: 'Tue Dec 21 2021',
      img: '/images/news2.png'
    },
    {
      title: 'Conun is Verified With Bithumb!',
      desc: 'Bithumb have repealed their investment warning status. Click for more info.',
      date: 'Tue Dec 21 2021',
      img: '/images/news2.png'
    }
  ]
  return (
    <div className={styles.section}>
      <Container>
        <div className={`${styles.news} ${isNewsPage ? styles.newsPage : ''}`}>
          <Typography align='center' variant='h2' color='primary.dark'>
            CONUN News
          </Typography>
          {!isNewsPage && (
            <>
              <div className={styles.element}>
                <img src='/images/roadmap3.png' alt='roadmap' />
              </div>
              <div className={styles.element2}>
                <img src='/images/roadmap3.png' alt='roadmap' />
              </div>
            </>
          )}

          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image
                  src='/images/news1.jpg'
                  objectFit='cover'
                  alt='news1'
                  layout='fill'
                />
              </div>
              <div className={styles.body}>
                <Typography variant='body2' color='primary'>
                  Tue Dec 21 2021
                </Typography>
                <p className={styles.title}>Conun is Verified With Bithumb!</p>
                <Typography variant='body1' color='secondary'>
                  Bithumb have repealed their investment warning status. Click
                  for more info.
                </Typography>
                <div className={styles.navigation}>
                  <div className={styles.postName}>
                    posted by BLOCKCHAIN TEAM
                  </div>
                  <NextArrow width={rem(35)} height={rem(35)} />
                </div>
              </div>
            </div>
            <div className={styles.items}>
              {data.map((item, index) => (
                <div className={styles.card} key={item.title + index}>
                  <div className={styles.img}>
                    <Image
                      src={item.img}
                      objectFit='contain'
                      alt='news2'
                      width={117}
                      height={139}
                    />
                  </div>
                  <div className={styles.content}>
                    <Typography variant='body2' color='primary'>
                      {item.date}
                    </Typography>
                    <p className={styles.title}>{item.title}</p>
                    <Typography variant='body3' color='secondary' component='p'>
                      {item.desc}
                    </Typography>
                    <div
                      className={styles.navigation}
                      style={{ marginTop: rem(13) }}
                    >
                      <div className={styles.postName}>posted by CHLOE</div>
                      <NextArrow width={rem(35)} height={rem(35)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
