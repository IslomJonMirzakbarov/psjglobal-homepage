import { Container, Typography } from '@mui/material'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { rem } from 'utils/pxToRem'
import { NextArrow } from '../Icons'
import Pagination from '../Pagination/Pagination'
import styles from './news.module.scss'

export default function News({ isNewsPage = false }) {
  const { scrollYProgress } = useScroll()
  const [currentPage, setCurrentPage] = useState(0)
  const xCloud = useTransform(
    scrollYProgress,
    [0.55, 0.6, 0.66, 0.7],
    [-300, -200, -100, 0]
  )

  const xCloud2 = useTransform(
    scrollYProgress,
    [0.7, 0.72, 0.74, 0.77, 0.8],
    [0, 10, 30, 50, 70]
  )

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
    },
    isNewsPage && {
      title: 'Conun is Verified With Bithumb!',
      desc: 'Bithumb have repealed their investment warning status. Click for more info.',
      date: 'Tue Dec 21 2021',
      img: '/images/news2.png'
    },
    isNewsPage && {
      title: 'Conun is Verified With Bithumb!',
      desc: 'Bithumb have repealed their investment warning status. Click for more info.',
      date: 'Tue Dec 21 2021',
      img: '/images/news2.png'
    }
  ]

  return (
    <div className={styles.section} id='news'>
      <Container>
        <div className={`${styles.news} ${isNewsPage ? styles.newsPage : ''}`}>
          <Typography align='center' variant='h2' color='primary.dark'>
            CONUN News
          </Typography>
          {!isNewsPage && (
            <>
              <motion.div
                style={{
                  x: xCloud
                }}
                className={styles.element2}
              >
                <img src='/images/roadmap3.png' alt='roadmap' />
              </motion.div>
              <motion.div
                style={{
                  x: xCloud2
                }}
                className={styles.element}
              >
                <img src='/images/roadmap3.png' alt='roadmap' />
              </motion.div>
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
                <Typography
                  className={styles.date}
                  variant='body2'
                  color='primary'
                >
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
              {data.map(
                (item, index) =>
                  item && (
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
                        <div>
                          <Typography
                            className={styles.date}
                            variant='body2'
                            color='primary'
                            fontWeight='700'
                          >
                            {item.date}
                          </Typography>
                          <p className={styles.title}>{item.title}</p>
                          <Typography
                            className={styles.desc}
                            variant='body3'
                            color='secondary'
                            component='p'
                          >
                            {item.desc}
                          </Typography>
                        </div>
                        <div
                          className={styles.navigation}
                          style={{ marginTop: rem(13) }}
                        >
                          <div className={styles.postName}>posted by CHLOE</div>
                          <NextArrow width={rem(35)} height={rem(35)} />
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          {isNewsPage ? (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              count={100}
              pageSize={5}
            />
          ) : (
            <Link href='/news/#news'>
              <a className={styles.more}>More {'>'}</a>
            </Link>
          )}
        </div>
      </Container>
    </div>
  )
}
