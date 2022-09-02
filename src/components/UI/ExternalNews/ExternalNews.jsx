import { Container, Typography } from '@mui/material'
import styles from './externalNews.module.scss'

export default function ExternalNews() {
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
  return (
    <Container>
      <div className={styles.externalNews}>
        <Typography align='center' variant='h2' color='primary.dark'>
          External News
        </Typography>
        <div className={styles.list}>
          {data.map((item, index) => (
            <div className={styles.item} key={item.title + index}>
              <div className={styles.leftElement}>
                <Typography
                  className={styles.title}
                  variant='body1'
                  fontWeight='600'
                  color='#7D8890'
                >
                  {item.title}
                </Typography>
                <Typography
                  className={styles.content}
                  variant='body1'
                  fontWeight='500'
                  color='primary.dark'
                >
                  {item.desc}
                </Typography>
              </div>
              <div className={styles.rightElement}>
                <Typography
                  variant='body1'
                  fontWeight='500'
                  color='primary.dark'
                >
                  {item.date}
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
      </div>
    </Container>
  )
}
