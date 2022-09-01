import Typography from '@mui/material/Typography'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LanguageIcon } from '../Icons'
import Dropdown from './Dropdown'
import styles from './header.module.scss'

export function Header() {
  const router = useRouter()
  const { t } = useTranslation('common')
  const products = [
    {
      title: 'OceanDrive',
      link: '/ocean-drive'
    },
    {
      title: 'World Art DEXPO NFT',
      link: '/'
    },
    {
      title: 'Metacon',
      link: '/'
    }
  ]
  const downloads = [
    {
      title: 'OceanDrive',
      link: '/'
    },
    {
      title: 'Metacon',
      link: '/'
    }
  ]

  const community = [
    {
      title: 'News',
      link: '/'
    },
    {
      title: 'FAQ',
      link: '/'
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
            <Typography variant='body1' component='p'>
              Products ▼
            </Typography>
            <Dropdown links={products} />
          </li>
          <li>
            <Typography variant='body1' component='p'>
              Download ▼
            </Typography>
            <Dropdown links={downloads} />
          </li>
          <li>
            <Typography variant='body1' component='p'>
              Community ▼
            </Typography>
            <Dropdown links={community} />
          </li>
          <li>
            <Link href='/'>
              <a>
                <Typography variant='body1' component='p'>
                  WhitePaper
                </Typography>
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.rightItem}>
          <div className={styles.langItems}>
            <LanguageIcon />
            <Link href='/' locale='en'>
              <a>
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
              <a>
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
            <Link href='/'>
              <Typography
                className={styles.link}
                component='a'
                variant='body1'
                fontWeight='600'
              >
                Mainnet is live
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
