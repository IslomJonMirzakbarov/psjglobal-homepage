import { Button, Container, Typography } from '@mui/material'
import styles from './banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.box}>
      <Container className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <Typography
              data-text='OceanDrive'
              variant='h1'
              className={styles.title}
              color='primary.dark'
            >
              Explore, Share, and
              <br />
              Earn with
              <br />
              OceanDrive
            </Typography>
            <Typography variant='body2' color='secondary'>
              OceanDrive is a unique desktop platform that connects and allows
              users to <br /> share digital assets worldwide. It is a place to
              share and explore all your assets
              <br /> quickly and conveniently.
            </Typography>
            <Button>Download</Button>
          </div>
          <div className={styles.bannerBg} />
        </div>
        <div className={styles.elements}>
          <div className={styles.element}>
            <img src='/images/products/ocean-drive/element.png' />
          </div>
          <div className={styles.element2}>
            <img src='/images/products/ocean-drive/element2.png' />
          </div>
          <div className={styles.element3}>
            <img src='/images/products/ocean-drive/element3.png' />
          </div>
          <div className={styles.element4}>
            <img src='/images/products/ocean-drive/element4.png' />
          </div>
          <div className={styles.element6}>
            <img src='/images/products/ocean-drive/element6.png' />
          </div>
          <div className={styles.element1}>
            <img src='/images/products/ocean-drive/element1.png' />
          </div>
          <div className={styles.element5}>
            <img src='/images/products/ocean-drive/element5.png' />
          </div>
        </div>
      </Container>
    </div>
  )
}
