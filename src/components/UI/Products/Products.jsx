import { Container, Typography } from '@mui/material'
import Link from 'next/link'
import {
  DexpoIcon,
  MainnetIcon,
  MetaconIcon,
  NextArrow,
  OceanDriveIcon
} from '../Icons'
import styles from './products.module.scss'

export default function Products() {
  const data = [
    {
      title: 'Mainnet',
      text: 'CONUN is a blockchain- based distributed super It is a service platform',
      bgImg: '/images/adventage-bg1.jpg',
      color1: 'primary.dark',
      color2: 'secondary',
      icon: <MainnetIcon />,
      path: 'https://conscan.conun.io'
    },
    {
      title: 'Ocean Drive <br/> (Storage)',
      text: 'CONUN is a blockchain-based distributed super It is a service platform',
      bgImg: '/images/adventage-bg.jpg',
      color1: 'white',
      color2: 'white',
      icon: (
        <img
          src='/images/ocean-drive.png'
          alt='ocean drive'
          width='41'
          height='38'
          style={{ objectFit: 'contain' }}
        />
      ),
      path: '/products/ocean-drive'
    },
    {
      title: 'World Art <br/> DEXPO',
      text: 'World Art DEXPO NFT Marketplace is a platform built to gather like-minded creators, artists, and crypto enthusiasts to create, trade, and share top NFTs.',
      bgImg: '/images/adventage-bg3.jpg',
      color1: 'white',
      color2: 'white',
      icon: <DexpoIcon />,
      path: '/products/world-art-nft'
    },
    {
      title: 'Metacon',
      text: 'CONUN is a blockchain-based distributed super It is a service platform',
      bgImg: '/images/adventage-bg4.jpg',
      color1: 'white',
      color2: 'white',
      icon: <MetaconIcon />,
      path: '/products/metacon'
    }
  ]

  return (
    <Container>
      <div className={styles.items}>
        {data.map((val, index) => (
          <Link href={val.path} key={val.title}>
            <a target={index === 0 ? '_blank' : ''}>
              <div
                className={styles.item}
                style={{ backgroundImage: `url(${val.bgImg})` }}
              >
                <div className={styles.icon}>{val.icon}</div>
                <Typography
                  dangerouslySetInnerHTML={{ __html: val.title }}
                  variant='h5'
                  color={val.color1}
                />

                <Typography variant='body2' color={val.color2}>
                  {val.text}
                </Typography>
                <div className={styles.next}>
                  <NextArrow
                    fill={index === 0 ? '#232323' : '#fff'}
                    width='30'
                    height='30'
                  />
                </div>
              </div>
            </a>
          </Link>
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
