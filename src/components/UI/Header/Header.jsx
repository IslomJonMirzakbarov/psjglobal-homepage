import Typography from '@mui/material/Typography'
// import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import { request } from 'services/http-client'
import getDataByLang from 'utils/getDataByLang'
import saveLang from 'utils/saveLang'
import { LanguageIcon } from '../Icons'
import BurgerMenu from './BurgerMenu'
import Dropdown from './Dropdown'
import styles from './header.module.scss'

export function Header() {
  const router = useRouter()
  // const { t } = useTranslation('common')
  const [file, setFile] = useState(null)
  const products = [
    {
      title: 'Swap',
      link: 'https://swap.conun.io',
      target: '_blank'
    },
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
    },
    {
      title: 'Metacon [DreamsCT]',
      link: '/products/dreamct'
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
    },
    {
      title: 'Notice',
      link: '/notice'
    }
  ]

  useEffect(() => {
    request
      .get('white-paper?populate=*')
      .then((res) => {
        if (res.data.data)
          setFile({
            file_en: res.data.data.attributes.file_en,
            file_kr: res.data.data.attributes.file_kr
          })
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

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
            <Typography
              variant='body1'
              component='a'
              href={
                file
                  ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
                    getDataByLang(router.locale, 'file', file)?.data.attributes
                      ?.url
                  : '#'
              }
              target='_blank'
              style={{ fontSize: '13px' }}
            >
              WhitePaper
            </Typography>
          </li>
          <li>
            <Typography
              color={
                router.pathname === '/user-guide' ? 'primary' : 'primary.dark'
              }
              variant='body1'
              component='p'
            >
              <Link href='/user-guide'>
                <a>Docs</a>
              </Link>
            </Typography>
            {/* <Dropdown links={community} /> */}
          </li>
          <li>
            <Typography
              color={router.pathname === '/token' ? 'primary' : 'primary.dark'}
              variant='body1'
              component='p'
            >
              <Link href='/token'>
                <a>Token</a>
              </Link>
            </Typography>
            {/* <Dropdown links={community} /> */}
          </li>
        </ul>
        <div className={styles.rightItem}>
          <div className={styles.langItems}>
            <LanguageIcon />
            <Link href={router.asPath} locale='en'>
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
            <Link href={router.asPath} locale='kr'>
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
          {/* <div className={styles.border} />
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
          </div> */}
        </div>
        <BurgerMenu file={file} />
      </div>
    </header>
  )
}
