import { Container, Typography } from '@mui/material'
import styles from './externalNews.module.scss'
import { format } from 'date-fns'
import Pagination from '../Pagination/Pagination'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ExternalNews({
  externalNews,
  count,
  isNewsPage = false
}) {
  const [currentPage, setCurrentPage] = useState(0)
  const router = useRouter()
  useEffect(() => {
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
    }
  ]
  console.log('externalNews', externalNews)
  return (
    <Container className={styles.container}>
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
                  {item.attributes.title_en}
                </Typography>
                <Typography
                  className={styles.content}
                  variant='body1'
                  fontWeight='500'
                  color='primary.dark'
                >
                  {item.attributes.description_en}
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
                <svg
                  width='7'
                  height='9'
                  viewBox='0 0 7 9'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0.0160001 0.415756H2.608L6.748 4.50176L2.608 8.58776H0.0160001L4.174 4.50176L0.0160001 0.415756Z'
                    fill='#232323'
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        {isNewsPage && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            count={count}
          />
        )}
      </div>
    </Container>
  )
}
