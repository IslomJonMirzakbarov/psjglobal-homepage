import { Button, Container, Typography } from '@mui/material'
import styles from './banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.box}>
      <Container className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <Typography
              data-text='NFTs'
              variant='h1'
              className={styles.title}
              color='white'
            >
              Create, sell and
              <br />
              collect
              <br />
              extraordinary NFTs
            </Typography>
            <Typography variant='body2' color='white'>
              Great chance for artists to create their own items. <br />
              lowest fee for Buying and Selling NFTs
            </Typography>
            <Button className={styles.btn}>Visit the website</Button>
          </div>
          <div className={styles.bannerBg} />
        </div>
        <div className={styles.elements}>
          <div className={styles.element}>
            <img src='/images/products/dexpo-nft/element.png' />
          </div>
          <div className={styles.element2}>
            <img src='/images/products/dexpo-nft/element2.png' />
          </div>
          <div className={styles.element3}>
            <img src='/images/products/dexpo-nft/element3.png' />
          </div>
          <div className={styles.element1}>
            <img src='/images/products/dexpo-nft/element1.png' />
          </div>
          <div className={styles.element4}>
            <img src='/images/products/dexpo-nft/element4.png' />
          </div>
        </div>
      </Container>
    </div>
  )
}
