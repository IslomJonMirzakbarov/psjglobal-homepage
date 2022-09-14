import { Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import styles from './worldDexpoArt.module.scss'

export default function WorldDexpoArt() {
  const data = [
    {
      title: 'Trade with CYCON',
      desc: 'The same ecosystem as when users receive rewards from CYCON COIN. Users can use CYCON COIN to buy and sell NFTs.',
      img: '/images/products/dexpo-nft/art1.png'
    },
    {
      title: 'OceanDrive Storage',
      desc: "Most NFT exchanges use third-party cloud storage. DEXPONFT uses OceanDrive's distributed storage.",
      img: '/images/products/dexpo-nft/art2.png'
    },
    {
      title: 'Audition',
      desc: 'Through an andition, all information regarding the artists will be checked and processed.',
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
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={styles.img}
              >
                <img src={item.img} alt='ocean drive' />
              </motion.div>
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
