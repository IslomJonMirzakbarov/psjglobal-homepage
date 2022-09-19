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
      text: 'CONUN’s Private Blockchain Network is an answer to the limitations that come with using a public blockchain...',
      bgImg: '/images/adventage-bg1.jpg',
      color1: 'primary.dark',
      color2: 'secondary',
      subtitle: 'A Fast, Secure, and Affordable Blockchain',
      icon: <MainnetIcon />,
      path: 'https://conscan.conun.io'
    },
    {
      title: 'Ocean Drive <br/> (Storage)',
      text: 'OceanDrive is a unique desktop platform that connects and allows users to share storage worldwide.',
      bgImg: '/images/adventage-bg.jpg',
      color1: 'white',
      color2: 'white',
      subtitle: 'Explore, Share, and Earn with OceanDrive',
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
      text: 'World Art DEXPO NFT Marketplace is a platform built to gather like-minded creators, artists, and crypto enthusiasts...',
      bgImg: '/images/adventage-bg3.jpg',
      color1: 'white',
      color2: 'white',
      subtitle: 'Create, Sell and Collect Extraordinary NFTs',
      icon: <DexpoIcon />,
      path: '/products/world-art-nft'
    },
    {
      title: 'Metacon',
      text: 'Metacon is CONUN’s cryptocurrency wallet. With our wallet you can access the products within our ecosystem as well as...',
      bgImg: '/images/adventage-bg4.jpg',
      subtitle: 'Fast and Secure Cryptocurrency Wallet',
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
                  className={styles.title}
                />
                <div>
                  <Typography
                    variant='body1'
                    fontWeight='700'
                    color={val.color2}
                  >
                    {val.subtitle}
                  </Typography>
                  <Typography
                    className={styles.desc}
                    variant='body3'
                    color={val.color2}
                  >
                    {val.text}
                  </Typography>
                </div>
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
