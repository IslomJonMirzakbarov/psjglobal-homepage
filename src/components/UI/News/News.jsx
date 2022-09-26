import { Container, Typography } from '@mui/material'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { rem } from 'utils/pxToRem'
import { NextArrow } from '../Icons'
import Pagination from '../Pagination/Pagination'
import styles from './news.module.scss'
import { format } from 'date-fns'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import getDataByLang from 'utils/getDataByLang'

export default function News({ newsItem, isNewsPage = false, news, count }) {
  const { scrollYProgress } = useScroll()
  const [currentPage, setCurrentPage] = useState(0)
  const router = useRouter()
  useEffect(() => {
    if (router.pathname !== '/') {
      router.push(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            newsPage: currentPage
          }
        },
        undefined,
        { scroll: false }
      )
    }
  }, [currentPage])

  console.log('news', count)
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
  const firstNews = newsItem
    ? newsItem[0]?.attributes
    : news
    ? news[0]?.attributes
    : {}
  console.log('firstNews', firstNews)
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
                  src={
                    process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                    firstNews?.image?.data?.attributes?.url
                  }
                  objectFit='cover'
                  alt='news1'
                  layout='fill'
                />
              </div>
              <div className={styles.body}>
                {isNewsPage ? (
                  <Typography
                    className={styles.date}
                    variant='body2'
                    color='primary'
                    fontWeight='700'
                  >
                    {format(new Date(firstNews.createdAt), 'yyyy.MM.dd')}
                  </Typography>
                ) : (
                  <Typography
                    className={styles.date}
                    variant='body2'
                    color='primary'
                    fontWeight='700'
                  >
                    {format(new Date(firstNews.createdAt), 'EEEE').substring(
                      0,
                      3
                    )}{' '}
                    {format(new Date(firstNews.createdAt), 'LLLL').substring(
                      0,
                      3
                    )}{' '}
                    {format(new Date(firstNews.createdAt), 'dd yyyy')}
                  </Typography>
                )}
                <p className={styles.title}>
                  {getDataByLang(router.locale, 'title', firstNews)}
                  {/* {firstNews.title_en} */}
                </p>
                <Typography variant='body1' color='secondary'>
                  {/* {firstNews.description_en} */}
                  {getDataByLang(router.locale, 'description', firstNews)}
                </Typography>
                <div className={styles.navigation}>
                  <div className={styles.postName}>
                    {getDataByLang(router.locale, 'posted', firstNews)}
                    {/* {firstNews.posted_en} */}
                  </div>
                  <NextArrow width={rem(35)} height={rem(35)} />
                </div>
              </div>
            </div>
            <div className={styles.items}>
              {news.slice(isNewsPage ? 0 : 1).map((item, index) => (
                <div className={styles.card} key={item.title + index}>
                  <div className={styles.img}>
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                        item?.attributes?.image?.data?.attributes?.url
                      }
                      objectFit='contain'
                      alt='news2'
                      width={117}
                      height={139}
                    />
                  </div>
                  <div className={styles.content}>
                    <div>
                      {isNewsPage ? (
                        <Typography
                          className={styles.date}
                          variant='body2'
                          color='primary'
                          fontWeight='700'
                        >
                          {format(
                            new Date(item?.attributes?.createdAt),
                            'yyyy.MM.dd'
                          )}
                        </Typography>
                      ) : (
                        <Typography
                          className={styles.date}
                          variant='body2'
                          color='primary'
                          fontWeight='700'
                        >
                          {format(
                            new Date(item?.attributes?.createdAt),
                            'EEEE'
                          ).substring(0, 3)}{' '}
                          {format(
                            new Date(item?.attributes?.createdAt),
                            'LLLL'
                          ).substring(0, 3)}{' '}
                          {format(
                            new Date(item?.attributes?.createdAt),
                            'dd yyyy'
                          )}
                        </Typography>
                      )}
                      <p className={styles.title}>
                        {getDataByLang(
                          router.locale,
                          'title',
                          item?.attributes
                        )}
                        {/* {item?.attributes?.title_en} */}
                      </p>
                      <Typography
                        className={styles.desc}
                        variant='body3'
                        color='secondary'
                        component='p'
                      >
                        {getDataByLang(
                          router.locale,
                          'description',
                          item?.attributes
                        )}
                        {/* {item?.attributes?.description_en} */}
                      </Typography>
                    </div>
                    <div
                      className={styles.navigation}
                      style={{ marginTop: rem(13) }}
                    >
                      <div className={styles.postName}>
                        {getDataByLang(
                          router.locale,
                          'posted',
                          item?.attributes
                        )}
                        {/* {item?.attributes?.posted_en} */}
                      </div>
                      <NextArrow width={rem(35)} height={rem(35)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {count > 4 &&
            (isNewsPage ? (
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                count={count - 1}
                pageSize={5}
              />
            ) : (
              <Link href='/news/#news'>
                <a className={styles.more}>More {'>'}</a>
              </Link>
            ))}
        </div>
      </Container>
    </div>
  )
}
