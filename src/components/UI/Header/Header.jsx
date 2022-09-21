import Typography from '@mui/material/Typography'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import saveLang from 'utils/saveLang'
import { LanguageIcon } from '../Icons'
import BurgerMenu from './BurgerMenu'
import Dropdown from './Dropdown'
import styles from './header.module.scss'

export function Header() {
  const router = useRouter()
  const { t } = useTranslation('common')

  const products = [
    {
      title: 'OceanDrive',
      link: '/products/ocean-drive'
    },
    {
      title: 'World Art DEXPO NFT',
      link: '/products/world-art-nft'
    },
    {
      title: 'Metacon',
      link: '/products/metacon'
    }
  ]

  const downloads = [
    {
      title: 'OceanDrive',
      link: '/ocean-drive'
    },
    {
      title: 'Metacon',
      link: '/metacon'
    }
  ]

  const community = [
    {
      title: 'News',
      link: '/news'
    },
    {
      title: 'FAQ',
      link: '/faq'
    }
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <a className={styles.logo}>
            <img src='/logo.png' alt='logo' />
          </a>
        </Link>
        <ul className={styles.links}>
          <li>
            <Typography
              color={
                router.pathname.includes('products')
                  ? 'primary'
                  : 'primary.dark'
              }
              variant='body1'
              component='p'
            >
              Products ▼
            </Typography>
            <Dropdown links={products} />
          </li>
          <li>
            <Typography
              color={
                router.pathname === '/ocean-drive' ||
                router.pathname === '/metacon'
                  ? 'primary'
                  : 'primary.dark'
              }
              variant='body1'
              component='p'
            >
              Download ▼
            </Typography>
            <Dropdown links={downloads} />
          </li>
          <li>
            <Typography
              color={
                router.pathname === '/news' || router.pathname === '/faq'
                  ? 'primary'
                  : 'primary.dark'
              }
              variant='body1'
              component='p'
            >
              Community ▼
            </Typography>
            <Dropdown links={community} />
          </li>
          <li>
            <Typography variant='body1' component='p'>
              WhitePaper
            </Typography>
          </li>
        </ul>
        <div className={styles.rightItem}>
          <div className={styles.langItems}>
            <LanguageIcon />
            <Link href='/' locale='en'>
              <a onClick={() => saveLang('en')}>
                <Typography
                  className={styles.link}
                  component='p'
                  variant='body1'
                  fontWeight='600'
                >
                  En
                </Typography>
              </a>
            </Link>
            <Link href='/' locale='kr'>
              <a onClick={() => saveLang('kr')}>
                <Typography
                  className={styles.link}
                  component=''
                  variant='body1'
                  fontWeight='600'
                >
                  Kr
                </Typography>
              </a>
            </Link>
          </div>
          <div className={styles.border} />
          <div className={styles.mainnetLive}>
            <div className={styles.circle} />
            <a href='https://conscan.conun.io' target='_blank'>
              <Typography
                className={styles.link}
                component='p'
                variant='body1'
                fontWeight='600'
              >
                Mainnet is live
              </Typography>
            </a>
          </div>
        </div>
        <BurgerMenu />
      </div>
    </header>
  )
}
