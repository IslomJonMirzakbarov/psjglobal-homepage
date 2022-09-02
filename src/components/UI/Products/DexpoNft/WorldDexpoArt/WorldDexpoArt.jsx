import { Container, Typography } from '@mui/material'
import styles from './worldDexpoArt.module.scss'

export default function WorldDexpoArt() {
  const data = [
    {
      title: 'Transactions on CYCON',
      desc: 'The same ecosystem as when users receive rewards from CYCON COIN. Users can use CYCON COIN to buy and sell NFTs.',
      img: '/images/products/dexpo-nft/art1.png'
    },
    {
      title: 'Using Ocean Drive Distributed Storage',
      desc: "Most NFT exchanges use third-party cloud storage. DEXPONFT uses OceanDrive's distributed storage.",
      img: '/images/products/dexpo-nft/art2.png'
    },
    {
      title: 'Audition',
      desc: 'DEXPONFT has a specific aspect of auditions. All information about the artist (artist information, content sales information, price information, etc.) is checked by the administrator.',
      img: '/images/products/dexpo-nft/art3.png'
    }
  ]
  return (
    <Container>
      <div className={styles.dexpo}>
        <Typography variant='h2' color='white' textAlign='center'>
          World Art DEXPO
        </Typography>
        <Typography
          variant='body2'
          color='white'
          textAlign='center'
          className={styles.desc}
        >
          World Art DEXPO NFT Marketplace is a platform built to gather
          like-minded creators, artists, and crypto <br /> enthusiasts to
          create, trade, and share top NFTs.
        </Typography>
        <div className={styles.list}>
          {data.map((item) => (
            <div className={styles.item}>
              <div className={styles.img}>
                <img src={item.img} alt='ocean drive' />
              </div>
              <Typography
                className={styles.title}
                variant='h6'
                fontWeight='700'
                color='white'
                textAlign='center'
              >
                {item.title}
              </Typography>
              <Typography
                textAlign='center'
                variant='body2'
                color='white'
                component='p'
              >
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
