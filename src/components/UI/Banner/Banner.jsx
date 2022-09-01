import { Container, Typography } from '@mui/material'
import { NextArrow } from '../Icons'
import styles from './banner.module.scss'

export default function Banner() {
  return (
    <Container>
      <div className={styles.banner}>
        <div className={styles.content}>
          <Typography data-text='Conun' variant='h1' className={styles.title}>
            Great to
            <br /> See you again.
            <br /> {"It's Conun"}
          </Typography>
          <Typography variant='body2' color='secondary'>
            CONUN is a blockchain-based distributed supercomputing platform. It
            is a service platform that allows the processing of high-performance
            computing resources by sharing the idle resources of the
            participants' personal computers and smartphones.
          </Typography>
          <div className={styles.link}>
            <Typography variant='body1' color='primary'>
              CON Token withdrawal verification guide
            </Typography>
            <NextArrow />
          </div>
        </div>
      </div>
    </Container>
  )
}
