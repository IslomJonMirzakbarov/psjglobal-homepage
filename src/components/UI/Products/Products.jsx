import { Container, Typography } from '@mui/material'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
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
  const font = useFontFamily()
  const { t } = useTranslation('common')
  const data = [
    {
      title: 'Cross Chain <br/> Swap',
      text: t('mainnet_description'),
      bgImg: '/images/adventage-bg1.jpg',
      color1: 'primary.dark',
      color2: 'secondary',
      subtitle: t('mainnet_subtitle'),
      icon: <MainnetIcon />,
      path: '#'
    },
    {
      title: 'Ocean Drive <br/> (Storage)',
      text: t('ocean_drive_description'),
      bgImg: '/images/adventage-bg.jpg',
      color1: 'white',
      color2: 'white',
      subtitle: t('ocean_drive_subtitle'),
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
      text: t('world_art_description'),
      bgImg: '/images/adventage-bg3.jpg',
      color1: 'white',
      color2: 'white',
      subtitle: t('world_art_subtitle'),
      icon: <DexpoIcon />,
      path: '/products/world-art-nft'
    },
    {
      title: 'Metacon',
      text: t('metacon_description'),
      bgImg: '/images/adventage-bg4.jpg',
      subtitle: t('metacon_subtitle'),
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
            <a>
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
                    style={font}
                    color={val.color2}
                    dangerouslySetInnerHTML={{ __html: val.subtitle }}
                  />
                  <Typography
                    className={styles.desc}
                    variant='body3'
                    style={font}
                    dangerouslySetInnerHTML={{ __html: val.text }}
                    color={val.color2}
                  />
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
      </div>
    </Container>
  )
}
