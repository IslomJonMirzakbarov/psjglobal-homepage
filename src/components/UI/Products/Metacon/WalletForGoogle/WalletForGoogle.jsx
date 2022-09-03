import { Button, Container, Typography } from '@mui/material'
import styles from './walletForGoogle.module.scss'

export default function WalletForGoogle() {
  return (
    <Container>
      <div className={styles.box}>
        <Typography variant='h2' color='primary.dark' textAlign='center'>
          A Cryptocurrency
          <br /> Wallet for Google Chrome!
        </Typography>
        <Typography
          variant='body2'
          className={styles.desc}
          color='secondary'
          textAlign='center'
        >
          It also provides a decentralized swapping service. Any transactions
          made on METACON will be peer-to-peer without an intermediator. All
          transaction information is transparent to the public, so anyone can
          see and check the transaction history updated live on CONSCAN. If you
          already have an Ethereum wallet, you can link it to METACON and use
          it. Of course, you can create a new wallet here. Download now and
          enjoy the various services of CONUN through METACON in a fast and
          secure environment.
        </Typography>
        <Button className={styles.btn}>Visit the website</Button>
        <div className={styles.elements}>
          <div className={styles.item1}>
            <img src='/images/products/metacon/benefits4.png' alt='notebook' />
          </div>
          <div className={styles.item2}>
            <img src='/images/products/metacon/benefits2.png' alt='notebook' />
          </div>
          <div className={styles.item3}>
            <img src='/images/products/metacon/benefits2.png' alt='notebook' />
          </div>
          <div className={styles.item4}>
            <img src='/images/products/metacon/benefits6.png' alt='notebook' />
          </div>
          <div className={styles.item5}>
            <img src='/images/products/metacon/benefits5.png' alt='notebook' />
          </div>
          <div className={styles.item6}>
            <img src='/images/products/metacon/benefits7.png' alt='notebook' />
          </div>
          <img
            style={{ position: 'relative' }}
            src='/images/products/metacon/benefits1.png'
            alt='notebook'
          />
        </div>
      </div>
    </Container>
  )
}
