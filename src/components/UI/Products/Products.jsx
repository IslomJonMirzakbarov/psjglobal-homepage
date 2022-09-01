import { Container, Typography } from '@mui/material'
import styles from './products.module.scss'

export default function Products() {
  const data = [
    {
      title: 'Mainnet',
      text: 'CONUN is a blockchain- based distributed super It is a service platform',
      bgImg: '/images/adventage-bg1.jpg',
      color1: 'primary.dark',
      color2: 'secondary'
    },
    {
      title: 'Ocean Drive <br/> (Storage)',
      text: 'CONUN is a blockchain-based distributed super It is a service platform',
      bgImg: '/images/adventage-bg.jpg',
      color1: 'white',
      color2: 'white'
    },
    {
      title: 'World Art DEXPO',
      text: 'World Art DEXPO NFT Marketplace is a platform built to gather like-minded creators, artists, and crypto enthusiasts to create, trade, and share top NFTs.',
      bgImg: '/images/adventage-bg3.jpg',
      color1: 'white',
      color2: 'white'
    },
    {
      title: 'Metacon',
      text: 'CONUN is a blockchain-based distributed super It is a service platform',
      bgImg: '/images/adventage-bg4.jpg',
      color1: 'white',
      color2: 'white'
    }
  ]

  return (
    <Container>
      <div className={styles.items}>
        {data.map((val) => (
          <div
            className={styles.item}
            style={{ backgroundImage: `url(${val.bgImg})` }}
          >
            <Typography
              dangerouslySetInnerHTML={{ __html: val.title }}
              variant='h5'
              color={val.color1}
            />

            <Typography variant='body2' color={val.color2}>
              {val.text}
            </Typography>
          </div>
        ))}

        {/* <div className={styles.item}>
          <Typography variant='h5' color='primary.dark'>
            Mainnet
          </Typography>
          <Typography variant='body2' color='secondary'>
            CONUN is a blockchain- based distributed super It is a service
            platform
          </Typography>
        </div>
        <div className={styles.item}>
          <Typography variant='h5' color='primary.dark'>
            Mainnet
          </Typography>
          <Typography variant='body2' color='secondary'>
            CONUN is a blockchain- based distributed super It is a service
            platform
          </Typography>
        </div>
        <div className={styles.item}>
          <Typography variant='h5' color='primary.dark'>
            Mainnet
          </Typography>
          <Typography variant='body2' color='secondary'>
            CONUN is a blockchain- based distributed super It is a service
            platform
          </Typography>
        </div> */}
      </div>
    </Container>
  )
}
