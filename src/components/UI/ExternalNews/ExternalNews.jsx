import { Container, Typography } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import Pagination from '../Pagination/Pagination'
import styles from './externalNews.module.scss'
import { format } from 'date-fns'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import getDataByLang from 'utils/getDataByLang'
import { ArrowNews } from '../Icons'

export default function ExternalNews({
  externalNews,
  count,
  isNewsPage = false
}) {
  const [currentPage, setCurrentPage] = useState(0)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname !== '/') {
      router.push(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            externalNewsPage: currentPage
          }
        },
        undefined,
        { scroll: false }
      )
    }
  }, [currentPage])

  const data = [
    {
      title: 'MBN',
      desc: 'Why has CONUN developed its own private blockchain network?',
      date: '2022-08-16'
    },
    {
      title: 'MBN',
      desc: 'Why has CONUN developed its own private blockchain network?',
      date: '2022-08-16'
    },
    {
      title: 'MBN',
      desc: 'Why has CONUN developed its own private blockchain network?',
      date: '2022-08-16'
    },
    {
      title: 'MBN',
      desc: 'Why has CONUN developed its own private blockchain network?',
      date: '2022-08-16'
    },
    {
      title: 'MBN',
      desc: 'Why has CONUN developed its own private blockchain network?',
      date: '2022-08-16'
    },
    {
      title: 'MBN',
      desc: 'Why has CONUN developed its own private blockchain network?',
      date: '2022-08-16'
    },
    {
      title: 'MBN',
      desc: 'Why has CONUN developed its own private blockchain network?',
      date: '2022-08-16'
    },
    {
      title: 'MBN',
      desc: 'Why has CONUN developed its own private blockchain network?',
      date: '2022-08-16'
    },
    {
      title: 'MBN',
      desc: 'Why has CONUN developed its own private blockchain network?',
      date: '2022-08-16'
    },
    {
      title: 'MBN',
      desc: 'Why has CONUN developed its own private blockchain network?',
      date: '2022-08-16'
    }
  ]
  console.log('externalNews', externalNews)
  return (
    <Container className={styles.container} id='external-news'>
      <div className={styles.externalNews}>
        <Typography align='center' variant='h2' color='primary.dark'>
          External News
        </Typography>
        <div className={styles.list}>
          {externalNews.map((item, index) => (
            <div className={styles.item} key={item.title + index}>
              <div className={styles.leftElement}>
                <Typography
                  className={styles.title}
                  variant='body1'
                  fontWeight='600'
                  color='#7D8890'
                >
                  {getDataByLang(router.locale, 'title', item.attributes)}
                </Typography>
                <Typography
                  className={styles.content}
                  variant='body1'
                  fontWeight='500'
                  color='primary.dark'
                >
                  {getDataByLang(router.locale, 'description', item.attributes)}
                  {/* {item.attributes.description_en} */}
                </Typography>
              </div>
              <div className={styles.rightElement}>
                <Typography
                  variant='body1'
                  fontWeight='500'
                  color='primary.dark'
                >
                  {format(new Date(item?.attributes?.createdAt), 'yyyy-MM-dd')}
                </Typography>
                <ArrowNews />
              </div>
            </div>
          ))}
        </div>
        {count > 10 &&
          (isNewsPage ? (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              count={count}
            />
          ) : (
            <Link href='/news/#external-news'>
              <a className={styles.more}>More {'>'}</a>
            </Link>
          ))}
      </div>
    </Container>
  )
}
